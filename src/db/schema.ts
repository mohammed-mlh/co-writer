import { integer, text, boolean, pgTable } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: text().primaryKey().notNull().unique(),
    plan: text().default('free').notNull(),
    credits: integer().default(3)
  });