// components/players/PlayerForm.tsx

import { Button } from "@/components/ui/button";
import {
    Form
} from "@/components/ui/form";
import { playerSchema, type PlayerFormData } from "@/validations/players.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormInput } from "./formInput";
import { FormSelect } from "./formSelect";

interface PlayerFormProps {
  initialData?: PlayerFormData;
  onSubmit?: (data: PlayerFormData) => void;
  onCancel?: () => void;
}

const PlayerForm = ({ initialData, onSubmit, onCancel }: PlayerFormProps) => {
  const form = useForm<PlayerFormData>({
    resolver: zodResolver(playerSchema),
    defaultValues: initialData ,
  });

  const handleSubmit = (data: PlayerFormData) => {
    onSubmit?.(data);
  };

  // POSITION OPTIONS
  const positionOptions = [
    { value: 'GK', label: 'Goalkeeper (GK)' },
    { value: 'DEF', label: 'Defender (DEF)' },
    { value: 'MID', label: 'Midfielder (MID)' },
    { value: 'FWD', label: 'Forward (FWD)' },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        {/* NAME */}
        <FormInput
          control={form.control}
          name="name"
          label="Player Name *"
          placeholder="Enter player name"
        />

        {/* POSITION */}
        <FormSelect
          control={form.control}
          name="position"
          label="Position *"
          options={positionOptions}
          placeholder="Select position"
        />

        {/* JERSEY NUMBER */}
        <FormInput
          control={form.control}
          name="jerseyNumber"
          label="Jersey Number *"
          placeholder="1-99"
          type="number"
        />

        {/* AGE */}
        <FormInput
          control={form.control}
          name="age"
          label="Age *"
          placeholder="15-45"
          type="number"
        />

        {/* AVATAR URL */}
        <FormInput
          control={form.control}
          name="avatarUrl"
          label="Avatar URL (Optional)"
          placeholder="https://example.com/avatar.jpg"
        />

        {/* BUTTONS */}
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

export default PlayerForm;