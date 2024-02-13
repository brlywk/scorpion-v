import { real, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { v4 as uuid4 } from "uuid";
import { z } from "zod";
import { relations } from "drizzle-orm";
import {
    type BillingCycle,
    type Currency,
    billingCycleList,
    currencyList,
} from "../types";
import { categories } from "./categories";

const defaultCategoryId = "0f0e69d7-c031-4a17-8e1e-499b7a540934";

// ----- Table Definition ------------------------
export const expenses = sqliteTable("expenses", {
    id: text("id")
        .$defaultFn(() => uuid4())
        .primaryKey(),
    userId: text("user_id").notNull(),
    name: text("name").notNull(),
    image: text("image"),
    price: real("price").notNull(),
    currency: text("currency").$type<Currency>().default("EUR").notNull(),
    billingCycle: text("billing_cycle")
        .$type<BillingCycle>()
        .default("Monthly")
        .notNull(),
    categoryId: text("category_id").default(defaultCategoryId).notNull(),
    created: text("created").$defaultFn(() => new Date().toString()),
});

// ----- Relations -------------------------------
export const expensesRelations = relations(expenses, ({ one }) => ({
    categories: one(categories, {
        fields: [expenses.categoryId],
        references: [categories.id],
    }),
}));

// ----- Schema & Types --------------------------
// TODO: change these when it becomes necessary
// - Also unify if both stay the same in the end
export const expensesInsertSchema = createInsertSchema(expenses, {
    currency: z.enum(currencyList),
    billingCycle: z.enum(billingCycleList),
});
export const expensesSelectSchema = createSelectSchema(expenses, {
    currency: z.enum(currencyList),
    billingCycle: z.enum(billingCycleList),
});

export type ExpenseInsert = z.infer<typeof expensesInsertSchema>;
export type ExpenseSelect = z.infer<typeof expensesSelectSchema>;
