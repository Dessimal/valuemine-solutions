"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"; // Fixed import
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField } from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SolarPackageSelector } from "@/components/ui/SolarPackageSelector";
import { LocationSelector } from "@/components/ui/LocationSelector";
import { useRouter } from "next/navigation";
import { TRANSPORT_COST, PACKAGES, WORKMANSHIP } from "@/app/constants";

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

type FormData = z.infer<typeof formSchema>;

export function CalculatorForm() {
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      package: "",
      location: "",
      localGovt: "",
      building: "bungalow",
      downPayment: 0,
    },
  });

  const onSubmit = (data: FormData) => {
    const selectedPackage = PACKAGES.find((p) => p.name === data.package);
    const transportationCost =
      TRANSPORT_COST.find((t) => t.location === data.location)?.cost || 0;
    const workmanship =
      WORKMANSHIP.find(
        (w) => w.building === data.building && w.package === data.package
      )?.cost || 0;

    if (!selectedPackage) {
      alert("Selected package is invalid.");
      return;
    }

    if (transportationCost === 0) {
      alert(
        "Transportation cost could not be determined for the selected location."
      );
      return;
    }

    if (workmanship === 0) {
      alert(
        "Workmanship cost could not be determined for the selected package and building type."
      );
      return;
    }

    const totalCost = selectedPackage.price + transportationCost + workmanship;
    const chargeableAmount = totalCost - data.downPayment;
    const monthlyInterestRate = 5.5 / 100; // Monthly interest rate (5.5% annual rate)

    const calculateRepayment = (months: number) => {
      const amountWithInterest =
        chargeableAmount * (1 + monthlyInterestRate * months);
      return {
        monthly: amountWithInterest / months,
        weekly: amountWithInterest / (months * 4.33),
      };
    };

    const result = {
      ...data,
      selectedPackage,
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

    router.push(`/results?data=${encodeURIComponent(JSON.stringify(result))}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculate Interest On Your Inverter Package</CardTitle>
        <CardDescription>Please enter required details below</CardDescription>
      </CardHeader>
      <CardContent>
        <Form>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Solar Package Selector */}
            <FormField
              control={control}
              name="package"
              render={({ field }) => <SolarPackageSelector field={field} />}
            />

            {/* Location Selector */}
            <FormField
              control={control}
              name="location"
              render={({ field }) => <LocationSelector field={field} />}
            />

            {/* Local Government Selector */}
            <FormField
              control={control}
              name="localGovt"
              render={({ field }) => (
                <LocationSelector locationParameter="localGovt" field={field} />
              )}
            />

            {/* Building Type Selector */}
            <FormField
              control={control}
              name="building"
              render={({ field }) => (
                <select {...field} className="form-select">
                  <option value="bungalow">Bungalow</option>
                  <option value="storey">Storey Building</option>
                </select>
              )}
            />

            {/* Down Payment Input */}
            <FormField
              control={control}
              name="downPayment"
              render={({ field }) => (
                <div>
                  <label>Down Payment (₦)</label>
                  <FormControl>
                    <input
                      type="number"
                      placeholder="Enter down payment amount"
                      {...field}
                      className="form-input"
                    />
                  </FormControl>

                  {errors.downPayment && (
                    <p className="text-red-500">{errors.downPayment.message}</p>
                  )}
                </div>
              )}
            />

            {/* Submit Button */}
            <Button type="submit">Calculate</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <p>Fill out the form to calculate your payment plan.</p>
      </CardFooter>
    </Card>
  );
}
