import { eq } from "drizzle-orm";
import { db } from "../drizzle";
import { categories } from "~/db/schemas/categories";

// TODO: Error Handling? What's that? Never heard of it...
export default defineEventHandler(async () => {
    try {
        const categoryList = await db
            .select()
            .from(categories)
            .where(eq(categories.userId, "DEFAULT_CATEGORY"));

        console.log("server:", categoryList);
        return categoryList;
    } catch (error: unknown) {
        return createError({
            statusCode: 500,
            statusMessage: "Shit broke",
        });
    }
});
