import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="bg-[var(--navy)] py-10 text-violet-200">
        <div className="container-main grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-2xl text-white">🦉 Bambini Smart Beginners</h3>
            <p className="max-w-sm text-sm leading-6 text-violet-300">
              A Montessori Learning Center dedicated to nurturing curious,
              confident, and capable young learners.
            </p>
          </div>

          <div>
            <h5 className="mb-3 text-sm font-extrabold uppercase tracking-wider text-violet-100">
              Quick Links
            </h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/Navbar">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/programs">Our Programs</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-3 text-sm font-extrabold uppercase tracking-wider text-violet-100">
              Contact
            </h5>
            <ul className="space-y-2 text-sm">
              <li>📍 Davao City, Philippines</li>
              <li>📞 +63 912 345 6789</li>
              <li>✉️ hello@bambini.edu.ph</li>
              <li>🕗 Mon–Fri, 7am–5pm</li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="border-t border-indigo-900 bg-[var(--navy)] px-6 py-4 text-center text-xs text-violet-400">
        © 2025 Bambini Smart Beginners Montessori Learning Center. All rights reserved.
      </div>
    </>
  )
}