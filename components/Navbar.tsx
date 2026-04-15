import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="w-full border-b border-violet-100 bg-white">
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
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center sm:gap-x-8 md:gap-x-10">
            <Link href="/" className="text-sm font-bold uppercase tracking-wide hover:text-violet-200">
              Home
            </Link>

            <Link href="/about" className="text-sm font-bold uppercase tracking-wide hover:text-violet-200">
              About Us
            </Link>

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
        </div>
      </nav>
    </header>
  )
}