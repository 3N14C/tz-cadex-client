import { z } from 'zod';

export const contactUsSchema = z.object({
  name: z.string().nonempty('Field is required'),
  email: z.string().email('Invalid email').nonempty('Field is required'),
  message: z.string().nonempty('Field is required'),
});

export type TContactUsSchema = z.infer<typeof contactUsSchema>;
