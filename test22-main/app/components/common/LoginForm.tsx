'use client'

import React, { useState } from 'react'
import { auth } from '../../../lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      await signInWithEmailAndPassword(auth, email, password)
      alert('Login successful!')
      // You can redirect or update your app state here
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <form onSubmit={handleLogin} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ width: '100%', padding: '8px', marginBottom: '12px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ width: '100%', padding: '8px', marginBottom: '12px' }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" style={{ width: '100%', padding: '8px' }}>
        Login
      </button>
    </form>
  )
}

export default LoginForm
