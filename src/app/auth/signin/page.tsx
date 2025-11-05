'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      router.push('/dashboard')
      router.refresh()
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-yeezy-sand">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <Link href="/" className="text-4xl font-bold tracking-tighter inline-block mb-4">
            YEEZY
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">SIGN IN</h1>
          <p className="text-yeezy-earth mt-2">Welcome back to the movement</p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-6 bg-yeezy-cream p-8">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 uppercase tracking-wide">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2 uppercase tracking-wide">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'SIGNING IN...' : 'SIGN IN'}
          </button>

          <div className="text-center space-y-4 text-sm">
            <Link href="/auth/reset-password" className="text-yeezy-earth hover:text-yeezy-carbon block">
              Forgot password?
            </Link>
            <div className="pt-4 border-t border-yeezy-stone">
              <span className="text-yeezy-earth">Don't have an account? </span>
              <Link href="/auth/signup" className="font-medium hover:text-yeezy-earth">
                Create one
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}