import Image from 'next/image'
import { testimonials } from '@/lib/data'

export default function Testimonials() {
  const getFallbackColor = (index: number) => {
    if (index === 0) return 'bg-violet-700'
    if (index === 1) return 'bg-blue-600'
    return 'bg-green-700'
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-main">
        <div className="section-label">Parent Stories</div>
        <h2 className="section-title">What Families Are Saying</h2>
        <p className="section-sub">
          Real experiences from families who have seen their children grow in
          confidence, independence, and love for learning.
        </p>

        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <div className="mb-3 text-sm text-yellow-500">★★★★★</div>

                <p className="mb-6 min-h-[140px] text-sm italic leading-7 text-gray-700 md:min-h-[168px]">
                  &quot;{item.quote}&quot;
                </p>
              </div>

              <div>
                <div className="mb-4 h-px w-full bg-gray-100" />

                <div className="flex items-center gap-3">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-white"
                    />
                  ) : (
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-black text-white ${getFallbackColor(
                        index
                      )}`}
                    >
                      {item.initials}
                    </div>
                  )}

                  <div className="min-w-0">
                    <div className="font-extrabold text-[var(--navy)]">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-500">{item.role}</div>

                    {(item.childAge || item.program || item.childName) && (
                      <div className="mt-1 text-xs text-gray-400">
                        {item.childName ? `${item.childName}` : 'Child'}
                        {item.childAge ? `, Age ${item.childAge}` : ''}
                        {item.program ? ` • ${item.program}` : ''}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}