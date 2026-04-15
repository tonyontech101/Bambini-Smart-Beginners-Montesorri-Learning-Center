export default function WhyMontessori() {
  const items = [
    {
      badge: 'Respects',
      icon: '🧠',
      title: 'How Young Minds Naturally Learn',
      desc: 'Children learn by doing — touching, exploring, experimenting — leading to deeper understanding and genuine curiosity.',
      classes: 'border-blue-100',
      badgeClasses: 'bg-blue-100 text-blue-800',
      iconClasses: 'bg-blue-50',
      titleClasses: 'text-blue-800',
    },
    {
      badge: 'Builds',
      icon: '🔗',
      title: 'Strong Brain Connections Early',
      desc: 'Hands-on activities strengthen neural pathways, supporting memory, problem-solving, and critical thinking during peak growth years.',
      classes: 'border-green-100',
      badgeClasses: 'bg-green-100 text-green-800',
      iconClasses: 'bg-green-50',
      titleClasses: 'text-green-800',
    },
    {
      badge: 'Develops',
      icon: '🌟',
      title: 'Independence and Confidence',
      desc: 'From self-care to completing tasks independently, children gain confidence and a sense of responsibility for lifelong success.',
      classes: 'border-pink-100',
      badgeClasses: 'bg-pink-100 text-pink-800',
      iconClasses: 'bg-pink-50',
      titleClasses: 'text-pink-800',
    },
    {
      badge: 'Improves',
      icon: '🎯',
      title: 'Focus and Self-Discipline',
      desc: 'Montessori activities encourage concentration and patience, helping young children develop longer attention spans without pressure.',
      classes: 'border-yellow-100',
      badgeClasses: 'bg-yellow-100 text-yellow-800',
      iconClasses: 'bg-yellow-50',
      titleClasses: 'text-yellow-800',
    },
    {
      badge: 'Nurtures',
      icon: '🌱',
      title: 'The Whole Child',
      desc: 'Montessori education supports intellectual, emotional, physical, and social development, creating balanced and confident learners.',
      classes: 'border-purple-100',
      badgeClasses: 'bg-purple-100 text-purple-800',
      iconClasses: 'bg-purple-50',
      titleClasses: 'text-purple-800',
    },
    {
      badge: 'Supports',
      icon: '💬',
      title: 'Language and Social Development',
      desc: 'Children learn to express themselves, listen, take turns, and respect others—building strong communication and emotional skills early on.',
      classes: 'border-indigo-100',
      badgeClasses: 'bg-indigo-100 text-indigo-800',
      iconClasses: 'bg-indigo-50',
      titleClasses: 'text-indigo-800',
    },
  ]

  const duplicatedItems = [...items, ...items]

  return (
    <section id="why" className="bg-gray-50 py-16 md:py-20 overflow-hidden">
      <div className="container-main mb-10 text-center">
        <div className="section-label">Why Montessori</div>
        <h2 className="section-title">How Young Minds Naturally Learn</h2>
        <p className="section-sub mx-auto max-w-2xl">
          The Montessori method respects every child&apos;s natural curiosity,
          building lifelong skills through hands-on exploration.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex w-max gap-6">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className={`w-[320px] shrink-0 rounded-3xl border-2 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg ${item.classes}`}
            >
              <div
                className={`mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider ${item.badgeClasses}`}
              >
                {item.badge}
              </div>

              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${item.iconClasses}`}
              >
                {item.icon}
              </div>

              <h3 className={`mb-2 text-xl font-bold ${item.titleClasses}`}>
                {item.title}
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}