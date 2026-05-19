import { z } from "zod";
import { korapayConfig } from "./korapay-config";

export const koraPaymentFormSchema = z.object({
    name: z.string().trim().min(2, "Enter your full name"),
    email: z.string().trim().email("Enter a valid email address"),
    amountNaira: z
        .number({ error: "Enter a valid amount" })
        .int("Amount must be a whole number")
        .min(
            korapayConfig.minAmountNaira,
            `Minimum amount is ₦${korapayConfig.minAmountNaira.toLocaleString("en-NG")}`,
        ),
});

export type KoraPaymentFormValues = z.infer<typeof koraPaymentFormSchema>;
