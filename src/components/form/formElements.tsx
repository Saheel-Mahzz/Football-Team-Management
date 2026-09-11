
import type { ChangeEventHandler } from "react";
import { Input } from "@/components/ui/input";

interface BaseProps {
  label: string;
  name: string;
  placeholder?: string;
}

type TextFieldType = "text" | "email" | "password" | "number" | "date";

interface TextFieldProps extends BaseProps {
  type: TextFieldType;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

interface SelectProps extends BaseProps {
  type: "select";
  value: string;
  options: ReadonlyArray<{ label: string; value: string }>;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

interface TextareaProps extends BaseProps {
  type: "textarea";
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

interface CheckboxProps extends BaseProps {
  type: "checkbox";
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export type FormElementProps =
  | TextFieldProps
  | SelectProps
  | TextareaProps
  | CheckboxProps;

function TextField({ label, name, ...props }: TextFieldProps) {
  return (
    <label className="grid gap-2" htmlFor={name}>
      <span>{label}</span>
      <Input id={name} name={name} {...props} />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  placeholder,
  ...props
}: SelectProps) {
  return (
    <label className="grid gap-2" htmlFor={name}>
      <span>{label}</span>
      <select id={name} name={name} {...props}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({ label, name, ...props }: TextareaProps) {
  return (
    <label className="grid gap-2" htmlFor={name}>
      <span>{label}</span>
      <textarea id={name} name={name} rows={4} {...props} />
    </label>
  );
}

function CheckboxField({ label, name, ...props }: CheckboxProps) {
  return (
    <label className="flex items-center gap-2" htmlFor={name}>
      <Input
        id={name}
        name={name}
        type="checkbox"
        className="h-4 w-4"
        {...props}
      />
      <span>{label}</span>
    </label>
  );
}

export function FormElement(props: FormElementProps) {
  switch (props.type) {
    case "select":
      return <SelectField {...props} />;
    case "textarea":
      return <TextareaField {...props} />;
    case "checkbox":
      return <CheckboxField {...props} />;
    default:
      return <TextField {...props} />;
  }
}
