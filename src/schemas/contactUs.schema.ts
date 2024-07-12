import { z } from 'zod';

export const contactUsSchema = z.object({
  name: z.string().min(4, 'Insira ao menos 4 caracteres').max(255),
  email: z.string().email('Insira um email válido').max(255)
})