import { programs } from '@/lib/data'

export default function ProgramsPreview() {
  const getTheme = (theme: string) => {
    if (theme === 'blue') {
      return {
        card: 'from-blue-50 via-sky-50 to-blue-100',
        accent: 'text-blue-700',
        ring: 'ring-blue-200/70',
      }
    }

    if (theme === 'green') {
      return {
        card: 'from-green-50 via-emerald-50 to-green-100',
        accent: 'text-green-700',
        ring: 'ring-green-200/70',
      }
    }

    return {
      card: 'from-fuchsia-50 via-violet-50 to-violet-100',
      accent: 'text-violet-700',
      ring: 'ring-violet-200/70',
    }
  }

  const getIcon = (title: string) => {
    const lower = title.toLowerCase()

    if (lower.includes('toddler')) return '🧸'
    if (lower.includes('kindergarten')) return '📚'
    if (lower.includes('summer')) return '☀️'
    if (lower.includes('tutorial')) return '🧠'
    if (lower.includes('enhancement')) return '✨'
    if (lower.includes('play')) return '🎨'
    return '🌱'
  }

  const getMinAge = (age: string) => {
    const match = age.match(/\d+/)
    return match ? parseInt(match[0], 10) : 99
  }

  const featuredPrograms = ['Casa dei Bambini', 'Kindergarten Ready']

  const sortedPrograms = [...programs].sort((a, b) => {
    const ageDiff = getMinAge(a.age) - getMinAge(b.age)

    if (ageDiff !== 0) return ageDiff

    const aFeatured = featuredPrograms.includes(a.title)
    const bFeatured = featuredPrograms.includes(b.title)

    if (aFeatured && !bFeatured) return -1
    if (!aFeatured && bFeatured) return 1

    return a.title.localeCompare(b.title)
  })

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-blue-50 py-16 md:py-20">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-violet-100/40 to-transparent" />
      <div className="absolute left-0 top-24 h-40 w-40 rounded-full bg-fuchsia-100/40 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-48 w-48 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="container-main relative">
        <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center text-center">
          <div className="section-label text-center tracking-[0.22em]">
            Our Programs
          </div>

          <h2 className="section-title mt-3 max-w-2xl text-center leading-tight tracking-tight">
            Learning at Every Stage
          </h2>

          <p className="section-sub mt-4 max-w-2xl text-center leading-relaxed">
            Age-appropriate Montessori programs designed to nurture your child&apos;s
            development from toddler to kindergarten.
          </p>

          <div className="mt-5 inline-flex items-center rounded-full border border-violet-200 bg-white/90 px-5 py-2 text-sm font-semibold text-violet-700 shadow-sm backdrop-blur">
            We are still accepting enrollees — but slots are filling fast!
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sortedPrograms.map((program, index) => {
            const isFeatured = featuredPrograms.includes(program.title)
            const theme = getTheme(program.theme)
            const isLastOdd =
              sortedPrograms.length % 3 === 1 && index === sortedPrograms.length - 1

            return (
              <article
                key={program.title}
                className={`group flex min-h-[350px] w-full flex-col overflow-hidden rounded-[28px] border bg-white/95 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  isFeatured
                    ? 'border-violet-300 shadow-lg shadow-violet-200/50 ring-1 ring-violet-200/70'
                    : 'border-violet-100 shadow-md shadow-slate-200/60 hover:border-violet-200'
                } ${isLastOdd ? 'xl:col-start-2' : ''}`}
              >
                <div
                  className={`relative flex flex-1 flex-col bg-gradient-to-br p-6 md:p-7 ${theme.card}`}
                >
                  {isFeatured && (
                    <div className="mb-4">
                      <span className="inline-flex rounded-full bg-violet-700 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white shadow-sm">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-2xl shadow-sm ring-1 ring-white/70">
                    {getIcon(program.title)}
                  </div>

                  <div
                    className={`text-[11px] font-extrabold uppercase tracking-[0.2em] ${theme.accent}`}
                  >
                    {program.age}
                  </div>

                  <h3 className="mt-3 text-2xl font-bold leading-tight text-[var(--navy)] md:text-[2rem]">
                    {program.title}
                  </h3>

                  <p className="mt-4 max-w-[34ch] text-sm leading-7 text-slate-600 md:text-[15px]">
                    {program.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-violet-100 bg-white px-5 py-5 md:px-6">
                  <span className="text-sm font-bold text-slate-400">
                    {program.schedule}
                  </span>

                  <button
                    className={`rounded-full px-4 py-2.5 text-xs font-extrabold transition duration-200 ${
                      isFeatured
                        ? 'bg-violet-700 text-white shadow-md shadow-violet-200 hover:bg-violet-800'
                        : 'bg-violet-100 text-violet-700 hover:bg-violet-200'
                    }`}
                  >
                    Learn More
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}