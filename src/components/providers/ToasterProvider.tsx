"use client";

import { Toaster } from "react-hot-toast";

export function ToasterProvider() {
    return (
        <Toaster
            position="top-center"
            toastOptions={{
                duration: 4500,
                className: "text-base font-medium",
                style: {
                    background: "var(--toast-bg)",
                    color: "var(--toast-fg)",
                    boxShadow: "0 12px 40px rgba(15, 23, 42, 0.14)",
                    borderRadius: "0.75rem",
                    padding: "14px 18px",
                    maxWidth: "28rem",
                },
                success: {
                    duration: 4500,
                    style: {
                        background: "var(--toast-success-bg)",
                        color: "var(--toast-success-fg)",
                        borderLeft: "4px solid var(--toast-success-border)",
                    },
                    iconTheme: {
                        primary: "var(--toast-success-border)",
                        secondary: "#ffffff",
                    },
                },
                error: {
                    duration: 6000,
                    style: {
                        background: "var(--toast-error-bg)",
                        color: "var(--toast-error-fg)",
                        borderLeft: "4px solid var(--toast-error-border)",
                    },
                    iconTheme: {
                        primary: "var(--toast-error-border)",
                        secondary: "#ffffff",
                    },
                },
            }}
        />
    );
}
