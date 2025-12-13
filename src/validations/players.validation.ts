import { z } from 'zod';

export const playerSchema = z.object({
  id:z.number().optional(),
  name: z.string().min(1,{message:'Name field cannot be let empty!'}).max(50,{message:'Name cannot exceed 50 characters'}),
  position: z.enum(['GK', 'DEF', 'MID', 'FWD'],'Choose one of the position..'),
  jerseyNumber: z.coerce.number().min(1,{message:'Jersey number must be atleast 1'}).max(99,{
    message:'Jersey number cannot exceed 99'
  }).int({
    message:'Must be a whole number'
  }),
  age: z.coerce.number().min(15,'Min age 15').max(45,'Max age 45'),
avatarUrl: z
  .string()
  .regex(
    /^https?:\/\/.+\..+/,
    "Must be a valid URL with domain"
  )
  .optional()
  .or(z.literal('')),
  nationality: z.string().optional(),
});

export type PlayerFormData = z.infer<typeof playerSchema>;