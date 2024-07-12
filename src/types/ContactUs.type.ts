import { type z } from 'zod';
import { type contactUsSchema } from '~/schemas/contactUs.schema';

export type ContactUs = z.infer<typeof contactUsSchema>