import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { v4 as uuid4 } from "uuid";
import { z } from "zod";

export const expenses = sqliteTable("expenses", {
    id: text("id")
        .$defaultFn(() => uuid4())
        .primaryKey(),
    userId: text("user_id").notNull(),
    name: text("name").notNull(),
});
