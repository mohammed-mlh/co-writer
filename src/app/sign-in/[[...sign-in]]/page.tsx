import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <i className="fas fa-robot text-white text-xl"></i>
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome back to CoWriter
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account to continue creating amazing content
          </p>
        </div>
        
        <div className="bg-white py-8 px-6 shadow-xl rounded-xl border border-gray-100">
          <SignIn 
            appearance={{
              elements: {
                formButtonPrimary: 'bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg transition duration-200',
                card: 'shadow-none',
                headerTitle: 'text-gray-900 font-bold text-xl',
                headerSubtitle: 'text-gray-600',
                socialButtonsBlockButton: 'border border-gray-300 hover:bg-gray-50 transition duration-200',
                formFieldInput: 'border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-lg px-3 py-2',
                formFieldLabel: 'text-gray-700 font-medium',
                footerActionLink: 'text-primary hover:text-primary/80 font-medium',
                dividerLine: 'bg-gray-200',
                dividerText: 'text-gray-500 bg-white px-4',
              }
            }}
          />
        </div>
        
        <p className="mt-6 text-sm text-gray-600 text-center">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up/" className="font-medium text-primary hover:text-primary/80 transition duration-200">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  )
} 