"use client";

import toast from "react-hot-toast";
import { postJson } from "@/lib/api/post-json";
import type { FieldValues, Path, UseFormSetError } from "react-hook-form";

type SubmitFormWithToastOptions<T extends FieldValues> = {
    url: string;
    data: T;
    successMessage: string;
    setError?: UseFormSetError<T>;
};

function applyFieldErrors<T extends FieldValues>(
    setError: UseFormSetError<T>,
    fieldErrors: Record<string, string[] | undefined>,
) {
    for (const [key, messages] of Object.entries(fieldErrors)) {
        const msg = messages?.[0];
        if (msg) {
            setError(key as Path<T>, { message: msg });
        }
    }
}

/** POST form data and show react-hot-toast success or error feedback. */
export async function submitFormWithToast<T extends FieldValues>({
    url,
    data,
    successMessage,
    setError,
}: SubmitFormWithToastOptions<T>): Promise<boolean> {
    try {
        const res = await postJson(url, data);

        if (!res.ok) {
            if (setError && res.fieldErrors) {
                applyFieldErrors(setError, res.fieldErrors);
            }
            toast.error(res.error);
            return false;
        }

        toast.success(successMessage);
        return true;
    } catch {
        toast.error("Unable to reach the server. Check your connection and try again.");
        return false;
    }
}
