import { z } from "zod";

export const ContactUs = z.object({
  name: z.string().min(3, { message: "Por favor, digite seu nome!" }).max(255),
  email: z
    .string()
    .email({ message: "Por favor, digite um email valido!" })
    .min(3, { message: "Por favor, digite seu email!" })
    .max(255),
});
