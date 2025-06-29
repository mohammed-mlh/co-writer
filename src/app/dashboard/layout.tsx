import DashboardLayout from "@/components/dashboard/Layout";
import { auth } from '@clerk/nextjs/server'
import { ensureUserExists, getUserById } from '@/server/users'

// Import User type from the Layout component
interface User {
    id: string;
    credits: number | null;
    plan: 'free' | 'premium' | 'supremium'
}

const Layout = async ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const { userId } = await auth()
    if (!userId) {
        return <div>Sign in to view this page</div>
    }
    
    // Ensure user exists in database
    try {
        await ensureUserExists(userId)
    } catch (error) {
        console.error('Error ensuring user exists:', error)
        // Continue to dashboard even if there's an error with user creation
    }

    const user = await getUserById(userId)

    
    return <DashboardLayout user={user as User}>{children}</DashboardLayout>
}

export default Layout

