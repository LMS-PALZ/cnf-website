import { redirect } from "next/navigation";
import { getInvolvedRoutes } from "@/data/get-involved/nav";

export default function GetInvolvedPage() {
    redirect(getInvolvedRoutes.partnership.href);
}
