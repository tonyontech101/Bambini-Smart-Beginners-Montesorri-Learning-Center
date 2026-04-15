import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="relative mt-24 pt-24 pb-16 text-center text-white overflow-hidden">
      
      {/* Soft transition from previous section */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-violet-100/40 to-transparent" />

      {/* Main gradient (slightly softer entry) */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-violet-600 to-fuchsia-500" />

      {/* Extra glow for smooth blending */}
      <div className="absolute -top-12 left-1/2 h-32 w-[70%] -translate-x-1/2 rounded-full bg-violet-300/20 blur-3xl" />

      <div className="relative container-main">
        <div className="mb-4 text-5xl">🦉</div>

        <h2 className="mb-3 text-4xl md:text-5xl font-bold">
          Ready to Begin the Journey?
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-base text-white/85">
          Give your child the gift of a Montessori education. Limited slots
          available for the next school year.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-3.5 font-black text-violet-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Enroll Now
          </Link>

          <Link
            href="/about"
            className="rounded-full border-2 border-white/60 px-8 py-3.5 font-extrabold text-white transition-all duration-300 hover:bg-white/10"
          >
            Schedule a Visit
          </Link>
        </div>
      </div>
    </section>
  )
}