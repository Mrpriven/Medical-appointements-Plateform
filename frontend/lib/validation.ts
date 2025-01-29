import { z } from 'zod';

export const UserFormValidation = z.object({
  name: z.string()
    .min(2, { message: "name must be at least 2 characters." })
    .max(50, { message: "name must be at most 50 characters." }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().refine((phone) => /^\+[0-9]{1,3}[0-9]{10}$/.test(phone), { message: "Invalid phone number" })
});