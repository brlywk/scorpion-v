import type { Currency } from "~/db/types";

// Converts a currency name into it's corresponding currency symbol
export function currencySymbol(cur: Currency): string {
    if (!cur) {
        return "No currency provided";
    }

    switch (cur) {
        case "EUR":
            return "€";
        case "USD":
            return "$";
        default:
            return "Unknown currency";
    }
}
