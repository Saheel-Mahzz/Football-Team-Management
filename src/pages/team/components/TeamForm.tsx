import { Button } from "@/components/ui/button";
import {
  Form
} from "@/components/ui/form";
import { NATIONALITY_OPTIONS, POSITION_OPTIONS } from "@/constants/playersRoles";
import { playerSchema, type PlayerFormData } from "@/validations/players.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type Resolver } from "react-hook-form";
import { FormInput } from "../../../components/form/formInput";
import { FormSelect } from "../../../components/form/formSelect";

interface PlayerFormProps {
  initialData?: PlayerFormData;
  onSubmit?: (data: PlayerFormData) => void;
  onCancel?: () => void;
}

const TeamForm = ({ initialData, onCancel, onSubmit }: PlayerFormProps) => {
  const form = useForm<PlayerFormData>({
    resolver: zodResolver(playerSchema) as Resolver<PlayerFormData>,
    defaultValues: initialData || {
      name: '',
      age: 15,
      avatarUrl: '',
      jerseyNumber: 1,
      nationality: '',
      position: undefined,
    },
  });

  const handleSubmit = (data: PlayerFormData) => {
    onSubmit?.(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormInput
          control={form.control}
          name="name"
          label="Player Name *"
          placeholder="Enter player name"
        />

        <FormSelect
          control={form.control}
          name="position"
          label="Position *"
          options={POSITION_OPTIONS}
          placeholder="Select position"
        />

        <FormInput
          control={form.control}
          name="jerseyNumber"
          label="Jersey Number *"
          placeholder="1-99"
          type="number"
        />

        <FormInput
          control={form.control}
          name="age"
          label="Age *"
          placeholder="15-45"
          type="number"
        />

        <FormSelect
          control={form.control}
          name="nationality"
          label="Nationality *"
          options={NATIONALITY_OPTIONS}
          placeholder="Select position"
        />

        <FormInput
          control={form.control}
          name="avatarUrl"
          label="Avatar URL (Optional)"
          placeholder="https://example.com/avatar.jpg"
        />

        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Save Player</Button>
        </div>
      </form>
    </Form>
  );
};

export default TeamForm;