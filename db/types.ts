// Currencies to be used
export const currencyList = ["eur", "usd"] as const;
export type Currency = (typeof currencyList)[number];

// Allowed Billing Cycles
export const billingCycleList = ["monthly", "yearly"] as const;
export type BillingCycle = (typeof billingCycleList)[number];
