export default function MissionVision() {
  return (
    <div id="mission" className="grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm">
        <h2 className="mb-2 text-xl font-bold text-violet-700">🌱 Our Mission</h2>
        <p className="text-gray-600 leading-7">
          To guide children in becoming independent, confident, and
          lifelong learners through meaningful, hands-on experiences.
        </p>
      </div>

      <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
        <h2 className="mb-2 text-xl font-bold text-blue-700">🌟 Our Vision</h2>
        <p className="text-gray-600 leading-7">
          To build a strong foundation for every child, helping them grow
          into capable individuals who love learning and exploring the world.
        </p>
      </div>
    </div>
  )
}