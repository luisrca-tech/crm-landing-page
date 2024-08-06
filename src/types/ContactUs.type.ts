import type { z } from "zod";
import type { contactUsSchema } from "~/schemas/ContactUs.schema";

export type ContactUsSchema = z.infer<typeof contactUsSchema>;
