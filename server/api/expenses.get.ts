import { db } from "../drizzle";
import { expenses } from "~/db/schemas/expenses";

export default defineEventHandler(async () => {
    try {
        // DEBUG: Just a little waiting to test
        await new Promise(resolve => setTimeout(resolve, 2000));

        const expensesList = await db.select().from(expenses).all();
        return expensesList;
    } catch (error: unknown) {
        throw createError({
            statusCode: 500,
            statusMessage: "Shit broke",
        });
    }
});
