/* eslint node/prefer-global/process: 0 */
import { type Config, defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./db/schemas/*",
    driver: "turso",
    dbCredentials: {
        url: process.env.TURSO_DB_URL as string,
        authToken: process.env.TURSO_DB_AUTH_TOKEN as string,
    },
}) satisfies Config;
