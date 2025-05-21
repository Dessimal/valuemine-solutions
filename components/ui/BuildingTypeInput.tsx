import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function BuildingTypeInput({ field }: { field: any }) {
  return (
    <FormItem>
      <FormLabel>Building Type</FormLabel>
      <FormControl>
        <Input placeholder="Bungalow or Storey building" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
