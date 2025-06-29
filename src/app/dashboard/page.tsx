import { auth, currentUser } from '@clerk/nextjs/server'
import DashboardComponent from '@/components/DashboardComponent'
import { ensureUserExists, getUserById } from '@/server/users'

export default async function DashboardPage() { 
    return <DashboardComponent />
}
