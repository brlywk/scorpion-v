import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// Helper function combining twMerge and clsx
export default function cl(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
