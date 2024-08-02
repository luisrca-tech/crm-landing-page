import type { z } from "zod";
import type { ContactUs } from "~/schemas/ContactUs.schema";

export type ContactUsSchema = z.infer<typeof ContactUs>;
