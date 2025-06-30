import { integer, text, boolean, pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";
import { use } from "react";

export const users = pgTable("users", {
  id: varchar('id', { length: 36 }).primaryKey().notNull().unique(),
  plan: text().default('free').notNull(),
    credits: integer().default(3).notNull()
  });

export const articles = pgTable('articles', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', {length: 36}).notNull().references(() => users.id),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
})