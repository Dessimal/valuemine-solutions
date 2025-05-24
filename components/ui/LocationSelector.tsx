import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import NaijaStates from "naija-state-local-government";

export function LocationSelector({
  field,
  locationParameter,
  selectedState,
}: {
  field: ControllerRenderProps<FormData, "location">;
  locationParameter?: string;
  selectedState?: string;
}) {
  const states = NaijaStates.states(); // Get all states
  // const lgas = locationParameter === "lga" ? NaijaStates.lgas(field.value) : []; // Get LGAs for the selected state
  let lgas: string[] = [];
  if (locationParameter === "lga" && selectedState) {
    const stateDetails = NaijaStates.lgas(selectedState);
    lgas = stateDetails.lgas;
  }

  return (
    <FormItem>
      <FormLabel>
        {locationParameter === "lga" ? "Local Government Area" : "State"}
      </FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue
              placeholder={`Select your ${
                locationParameter === "lga" ? "LGA" : "state"
              }`}
            />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {(locationParameter === "lga" ? lgas : states).map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
