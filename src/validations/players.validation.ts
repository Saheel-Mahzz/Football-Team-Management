import { z } from 'zod';

export const playerSchema = z.object({
  name: z.string().min(1).max(50),
  position: z.enum(['GK', 'DEF', 'MID', 'FWD']),
  jerseyNumber: z.number().min(1).max(99),
  age: z.number().min(15).max(45),
  avatarUrl: z.string().url().optional().or(z.literal('')),
  nationality: z.string().optional(),
});

export type PlayerFormData = z.infer<typeof playerSchema>;