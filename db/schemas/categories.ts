import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { v4 as uuid4 } from "uuid";
import type { z } from "zod";

// ----- Table Definition ------------------------
export const categories = sqliteTable("categories", {
    id: text("id")
        .$defaultFn(() => uuid4())
        .primaryKey(),
    userId: text("user_id").notNull(),
    name: text("name").notNull(),
    icon: text("icon").default("InboxIcon"),
});

// ----- Schema & Types --------------------------
export const categoriesInsertSchema = createInsertSchema(categories);
export const categoriesSelectSchema = createSelectSchema(categories);

export type CategoryInsert = z.infer<typeof categoriesInsertSchema>;
export type CategorySelect = z.infer<typeof categoriesSelectSchema>;
