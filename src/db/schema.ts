import { integer, text, pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: varchar('id', { length: 36 }).primaryKey().notNull().unique(),
  plan: text().default('free').notNull(),
  credits: integer().default(3).notNull()
  });

export const articles = pgTable('articles', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', {length: 36}).notNull().references(() => users.id),
  title: varchar('title', { length: 255 }).notNull(),
  topic: varchar('topic', { length: 255 }).notNull(),
  targetAudience: varchar('target_audience', { length: 255 }).notNull(),
  tone: varchar('tone', { length: 100 }).notNull(),
  wordCount: integer('word_count').notNull(),
  keywords: text('keywords').notNull(),
  contentType: varchar('content_type', { length: 100 }).notNull(),
  additionalRequirements: text('additional_requirements').notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
})