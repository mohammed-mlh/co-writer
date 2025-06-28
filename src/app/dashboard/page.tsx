import { auth, currentUser } from '@clerk/nextjs/server'
import DashboardComponent from '@/components/DashboardComponent'

export default async function DashboardPage() {
    const { userId } = await auth()
    if (!userId) {
        return <div>Sign in to view this page</div>
    }
    
    return <DashboardComponent />
}
