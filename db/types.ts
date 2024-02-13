// Currencies to be used
export const currencyList = ["EUR", "USD"] as const;
export type Currency = (typeof currencyList)[number];

// Allowed Billing Cycles
export const billingCycleList = ["Monthly", "Yearly"] as const;
export type BillingCycle = (typeof billingCycleList)[number];
