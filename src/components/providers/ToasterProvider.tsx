"use client";
import { Toaster } from "react-hot-toast";
export function ToasterProvider() {
    return (<Toaster position="top-center" toastOptions={{
            duration: 4500,
            className: "text-base",
            style: {
                background: "var(--toast-bg)",
                color: "var(--toast-fg)",
            },
        }}/>);
}
