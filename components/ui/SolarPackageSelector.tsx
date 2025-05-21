import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { PACKAGES } from "@/app/constants.ts";

export function SolarPackageSelector({
  field,
}: {
  field: ControllerRenderProps<FormData, "package">;
}) {
  return (
    <FormItem>
      <FormLabel>Solar Package</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select your preferred package" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {PACKAGES.map((p, index) => (
            <SelectItem key={index} value={p.name}>
              {p.name}
              <span className="font-light text-gray-500">{p.price}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormItem>
  );
}
