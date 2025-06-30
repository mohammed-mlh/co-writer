'use server'

import { db } from "@/db/drizzle"
import { users } from "@/db/schema"
import { eq } from "drizzle-orm"
import { AwsPgDialect } from "drizzle-orm/aws-data-api/pg"


export async function getUser() {
    const allUsers = await db.select().from(users)
    return allUsers
}

export async function createUser(id:string) {
    const newUser = await db.insert(users).values({id, credits: 3, plan: 'free'})
    return newUser
}

export async function getUserById(id: string) {
    const user = await db.select().from(users).where(eq(users.id, id))
    return user[0] || null
}

export async function consumeCreditsForUser(id: string, credits: number) {
    const user = await getUserById(id)
    if (!user) {
        throw new Error(`User with id ${id} not found`)
    }
    await db.update(users).set({ credits: user.credits - credits }).where(eq(users.id, id))
}

export async function topupCreditsForUser(id: string, credits: number) {
    const user = await getUserById(id)
    if (!user) {
        throw new Error(`User with id ${id} not found`)
    }
    await db.update(users).set({ credits: user.credits + credits }).where(eq(users.id, id))
}

export async function ensureUserExists(id: string) {
    // Check if user already exists
    const existingUser = await getUserById(id)
    
    if (!existingUser) {
        // User doesn't exist, create them
        await createUser(id)
        console.log(`Created new user with ID: ${id}`)
        return true
    }
    
    console.log(`User already exists with ID: ${id}`)
    return false
}