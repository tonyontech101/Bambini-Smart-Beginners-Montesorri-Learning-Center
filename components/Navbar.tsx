"use client";

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  return (
    <header className="relative z-50 w-full border-b border-violet-100 bg-white">
      {/* TOP AREA */}
      <div className="container-main flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-6">
        {/* LEFT SIDE: LOGO + NAME */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-violet-100 bg-white shadow-sm sm:h-16 sm:w-16 md:h-20 md:w-20">
            <Image
              src="/images/logo.jpg"
              alt="Bambini Smart Beginners logo"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="min-w-0">
            <h1 className="text-lg font-black leading-tight text-violet-700 sm:text-xl md:text-2xl">
              Bambini Smart Beginners
            </h1>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400 sm:text-xs md:text-sm md:tracking-[0.25em]">
              Montessori Learning Center
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: CONTACT INFO */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:ml-8 lg:grid-cols-3 xl:ml-14">
          <div className="flex items-center gap-3 rounded-2xl bg-violet-50 px-3 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm shadow-sm">
              📞
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-violet-700">
                Contact Number
              </p>
              <p className="text-sm font-semibold leading-tight text-gray-700">
                0912 345 6789
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-fuchsia-50 px-3 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm shadow-sm">
              ✉️
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-fuchsia-700">
                School Email
              </p>
              <p className="truncate text-sm font-semibold leading-tight text-gray-700">
                bambinisb@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-blue-50 px-3 py-3 sm:col-span-2 lg:col-span-1">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm shadow-sm">
              📍
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700">
                Location
              </p>
              <p className="text-sm font-semibold leading-tight text-gray-700">
                Tagum City, Philippines
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM NAVIGATION */}
      <nav className="bg-gradient-to-r from-violet-700 to-fuchsia-600 text-white shadow-sm">
        <div className="container-main py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="hidden flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center sm:flex sm:gap-x-8 md:gap-x-10">
              <div className="relative group py-3">
                <button className="flex items-center gap-1 text-sm font-bold uppercase tracking-wide hover:text-violet-200">
                  About Us <span>▼</span>
                </button>

                <div className="absolute left-0 top-full hidden w-48 rounded-b-2xl border-t-4 border-fuchsia-500 bg-white text-gray-800 shadow-xl group-hover:block overflow-hidden">
                  <Link href="/about" className="block px-6 py-3 text-sm font-semibold hover:bg-violet-50 hover:text-violet-700 transition">
                    Our Story
                  </Link>
                  <Link href="/about#mission" className="block px-6 py-3 text-sm font-semibold hover:bg-violet-50 hover:text-violet-700 transition">
                    Mission & Vision
                  </Link>
                  <Link href="/about#teacher" className="block px-6 py-3 text-sm font-semibold hover:bg-violet-50 hover:text-violet-700 transition">
                    Meet Our Teacher
                  </Link>
                  <Link href="/about#tour" className="block px-6 py-3 text-sm font-semibold hover:bg-violet-50 hover:text-violet-700 transition">
                    Virtual Tour
                  </Link>
                </div>
              </div>

              <Link href="/#why" className="text-sm font-bold uppercase tracking-wide hover:text-violet-200">
                Why Montessori
              </Link>

              <Link href="/programs" className="text-sm font-bold uppercase tracking-wide hover:text-violet-200">
                Programs
              </Link>

              <Link href="/contact" className="text-sm font-bold uppercase tracking-wide hover:text-violet-200">
                Contact
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 p-2 text-white transition hover:bg-white/20 md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen((current) => !current)}
            >
              <span className="text-xs font-bold uppercase tracking-widest">Menu</span>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="mt-3 space-y-3 rounded-3xl bg-white/10 p-4 backdrop-blur-md md:hidden">
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-left text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/20"
                onClick={() => setMobileAboutOpen((current) => !current)}
              >
                About Us <span>{mobileAboutOpen ? '▲' : '▼'}</span>
              </button>

              {mobileAboutOpen && (
                <div className="space-y-1 rounded-2xl bg-white/10 p-3">
                  <Link href="/about" className="block rounded-xl px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
                    Our Story
                  </Link>
                  <Link href="/about#mission" className="block rounded-xl px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
                    Mission & Vision
                  </Link>
                  <Link href="/about#teacher" className="block rounded-xl px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
                    Meet Our Teacher
                  </Link>
                  <Link href="/about#tour" className="block rounded-xl px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">
                    Virtual Tour
                  </Link>
                </div>
              )}

              <Link href="/#why" className="block rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/20">
                Why Montessori
              </Link>
              <Link href="/programs" className="block rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/20">
                Programs
              </Link>
              <Link href="/contact" className="block rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/20">
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}