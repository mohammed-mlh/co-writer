'use server'

import { db } from "@/db/drizzle"
import { articles, users } from "@/db/schema"
import { eq } from "drizzle-orm"
import { AwsPgDialect } from "drizzle-orm/aws-data-api/pg"


export async function getArticlesByUserId(userId: string) {
    const userArticles = await db
      .select()
      .from(articles)
      .where(eq(articles.userId, userId))
  
    return userArticles
  }
  

  export async function createArticle({
    userId,
    title,
    topic,
    targetAudience,
    tone,
    wordCount,
    keywords,
    contentType,
    additionalRequirements,
    content,
  }: {
    userId: string
    title: string
    topic: string
    targetAudience: string
    tone: string
    wordCount: number
    keywords: string
    contentType: string
    additionalRequirements: string
    content: string
  }) {
    const inserted = await db
      .insert(articles)
      .values({
        userId,
        title,
        topic,
        targetAudience,
        tone,
        wordCount,
        keywords,
        contentType,
        additionalRequirements,
        content,
      })
      .returning()
  
    return inserted[0]
  }
  

  export async function getArticleById(id: number) {
    const article = await db
      .select()
      .from(articles)
      .where(eq(articles.id, id))
  
    return article[0] || null
  }
  

  export async function deleteArticle(id: number) {
    const deleted = await db
      .delete(articles)
      .where(eq(articles.id, id))
      .returning()
  
    return deleted[0] || null
  }
  