'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const data = await res.json()

    if (res.ok) {
      setStatus(data.message)
      setForm({ name: '', email: '', message: '' })
    } else {
      setStatus(data.error || 'Failed to send')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-violet-100 bg-white p-6 shadow-sm">
      <input
        type="text"
        placeholder="Your name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full rounded-2xl border px-4 py-3 outline-none"
      />
      <input
        type="email"
        placeholder="Your email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full rounded-2xl border px-4 py-3 outline-none"
      />
      <textarea
        placeholder="Your message"
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full rounded-2xl border px-4 py-3 outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-violet-700 px-6 py-3 font-extrabold text-white"
      >
        Send Message
      </button>
      {status && <p className="text-sm text-gray-600">{status}</p>}
    </form>
  )
}