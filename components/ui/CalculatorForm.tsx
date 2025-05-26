"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"; // Fixed import
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SolarPackageSelector } from "@/components/ui/SolarPackageSelector";
import { LocationSelector } from "@/components/ui/LocationSelector";
import { useRouter } from "next/navigation";
import { TRANSPORT_COST, PACKAGES, WORKMANSHIP } from "@/app/constants";
import { Input } from "./input";

// Define the form schema using Zod for validation
const formSchema = z.object({
  package: z.string().nonempty("Package is required"),
  location: z.string().nonempty("Location is required"),
  localGovt: z.string().nonempty("Local Government is required"),
  building: z.enum(["bungalow", "storey"], {
    required_error: "Building type is required",
  }),
  downPayment: z.coerce
    .number()
    .min(0, "Down payment must be a positive number"),
});

// Infer the TypeScript type from the schema
type FormData = z.infer<typeof formSchema>;

export function CalculatorForm() {
  const router = useRouter();

  // Initialize the form with react-hook-form and Zod resolver
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      package: "",
      location: "",
      localGovt: "",
      building: "bungalow",
      downPayment: 0,
    },
  });

  // Handle form submission
  const onSubmit = (data: FormData) => {
    // console.log("Form data:", data);
    // Find the selected package details
    const selectedPackage = PACKAGES.find((p) => p.name === data.package);
    const selectedPackageBattery = selectedPackage?.battery;
    const selectedPackagePanelArray = selectedPackage?.panelArray;
    const selectedPackagePicture = selectedPackage?.picture;
    // Get transportation cost for the selected location
    const transportationCost =
      TRANSPORT_COST.find((t) => t.location === data.location)?.cost || 20000;
    // Get workmanship cost for the selected building and package
    const workmanship =
      WORKMANSHIP.find(
        (w) => w.building === data.building && w.package === data.package
      )?.cost || 100000;

    // Validate selected package
    if (!selectedPackage) {
      alert("Selected package is invalid.");
      return;
    }

    // Validate transportation cost
    if (transportationCost === 0) {
      alert(
        "Transportation cost could not be determined for the selected location."
      );
      return;
    }

    // Validate workmanship cost
    if (workmanship === 0) {
      alert(
        "Workmanship cost could not be determined for the selected package and building type."
      );
      return;
    }

    // Calculate total cost and chargeable amount
    const totalCost = selectedPackage.price + transportationCost + workmanship;
    const chargeableAmount = totalCost - data.downPayment;
    const monthlyInterestRate = 5.5 / 100; // Monthly interest rate (5.5% annual rate)

    // Helper function to calculate repayment for a given number of months
    const calculateRepayment = (months: number) => {
      const amountWithInterest =
        chargeableAmount * (1 + monthlyInterestRate * months);
      return {
        monthly: amountWithInterest / months,
        weekly: amountWithInterest / (months * 4.33),
      };
    };

    // Prepare result object to pass to results page
    const result = {
      ...data,
      selectedPackage,
      selectedPackageBattery,
      selectedPackagePanelArray,
      selectedPackagePicture,
      transportationCost,
      workmanship,
      totalCost,
      chargeableAmount,
      repayment: {
        "3 months": calculateRepayment(3),
        "6 months": calculateRepayment(6),
        "9 months": calculateRepayment(9),
        "12 months": calculateRepayment(12),
      },
    };

    // Redirect to results page with encoded result data
    router.push(
      `/result/interest?data=${encodeURIComponent(JSON.stringify(result))}`
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculate Interest On Your Inverter Package</CardTitle>
        <CardDescription>Please enter required details below</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-16">
            <div className="grid gap-8">
              {/* Solar Package Selector */}
              <FormField
                control={form.control}
                name="package"
                render={({ field }) => <SolarPackageSelector field={field} />}
              />

              {/* Location Selector */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => <LocationSelector field={field} />}
              />

              {/* Local Government Selector */}
              <FormField
                control={form.control}
                name="localGovt"
                render={({ field }) => (
                  <LocationSelector
                    locationParameter="lga"
                    field={field}
                    selectedState={form.watch("location")}
                  />
                )}
              />

              {/* Building Type Selector */}
              <FormField
                control={form.control}
                name="building"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Building Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your Building Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="bungalow">Bungalow</SelectItem>
                        <SelectItem value="storey">Storey-Building</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              {/* Down Payment Input */}
              <FormField
                control={form.control}
                name="downPayment"
                render={({ field }) => (
                  <FormItem>
                    <label>Down Payment (₦)</label>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter down payment amount"
                        value={
                          field.value
                            ? Number(field.value).toLocaleString("en-NG")
                            : ""
                        }
                        onChange={(e) => {
                          // Remove commas and non-digit characters
                          const rawValue = e.target.value.replace(/,/g, "");
                          // Only allow numbers
                          if (/^\d*$/.test(rawValue)) {
                            // Update form state as number
                            field.onChange(
                              rawValue === "" ? "" : Number(rawValue)
                            );
                          }
                        }}
                        className="form-input"
                      />
                    </FormControl>

                    {/* Display validation error for down payment */}
                    {form.formState.errors.downPayment && (
                      <p className="text-red-500">
                        {errors.downPayment.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button className="w-full" type="submit">
                Calculate
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <p>Fill out the form to calculate your payment plan.</p>
      </CardFooter>
    </Card>
  );
}
