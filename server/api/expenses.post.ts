import { db } from "../drizzle";
import { expenses, expensesInsertSchema } from "~/db/schemas/expenses";

export default defineEventHandler(async event => {
    try {
        // DEBUG: Just a little slow down...
        await new Promise(resolve => setTimeout(resolve, 2000));

        const body = await readBody(event);

        const unsafeExpense = expensesInsertSchema.safeParse(body);

        if (!unsafeExpense.success) {
            throw new TypeError(unsafeExpense.error.toString());
        }

        // NOTE: We could also check here if we affect 1 row on insert... naaaah
        await db.insert(expenses).values(unsafeExpense.data);

        setResponseStatus(event, 201);
    } catch (error: unknown) {
        let message = "";
        let statusCode = 418;

        if (error instanceof TypeError) {
            statusCode = 400;
            message = error.message;
        } else {
            statusCode = 500;
            message = "Boom goes the server";
        }

        throw createError({
            statusCode,
            message,
        });
    }
});
