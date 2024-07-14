import { z } from 'zod';
import { ContactUs } from '~/types/ContactUs.type';

export type ContactUsSchema = z.infer<typeof ContactUs>;
