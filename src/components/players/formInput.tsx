// components/players/FormInput.tsx
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormInputProps {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}

export const FormInput = ({ control, name, label, placeholder, type = "text" }: FormInputProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input 
            type={type}
            placeholder={placeholder} 
            {...field}
            onChange={(e) => {
              if (type === "number") {
                field.onChange(parseInt(e.target.value) || 0);
              } else {
                field.onChange(e.target.value);
              }
            }}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);