import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-violet-50 via-blue-50 to-green-50 py-16 md:py-20">
        <div className="container-main space-y-16">

          {/* INTRO */}
          <div className="text-center">
            <div className="section-label">About Us</div>
            <h1 className="section-title">
              A Warm Montessori Environment for Growing Minds
            </h1>
            <p className="mx-auto mt-4 max-w-3xl leading-8 text-gray-600">
              Bambini Smart Beginners is a Montessori-inspired learning center
              dedicated to nurturing young minds through hands-on, child-centered
              learning. We provide a safe, supportive, and engaging space where
              children can grow with confidence, curiosity, and independence.
            </p>
          </div>

          {/* MISSION & VISION */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm">
              <h2 className="mb-2 text-xl font-bold text-violet-700">
                🌱 Our Mission
              </h2>
              <p className="text-gray-600 leading-7">
                To guide children in becoming independent, confident, and
                lifelong learners through meaningful, hands-on experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
              <h2 className="mb-2 text-xl font-bold text-blue-700">
                🌟 Our Vision
              </h2>
              <p className="text-gray-600 leading-7">
                To build a strong foundation for every child, helping them grow
                into capable individuals who love learning and exploring the world.
              </p>
            </div>
          </div>

          {/* WHY MONTESSORI */}
          <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm text-center">
            <h2 className="mb-3 text-2xl font-bold text-green-700">
              🧠 Why Montessori?
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600 leading-8">
              We follow Montessori principles where children learn by doing —
              exploring, experimenting, and discovering at their own pace.
              This approach helps develop focus, problem-solving skills, and a
              genuine love for learning.
            </p>
          </div>

          {/* TEACHER / TEAM */}
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-br from-violet-100 to-fuchsia-100 p-10 text-center text-5xl">
              👩‍🏫
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-[var(--navy)]">
                Meet Our Teacher
              </h2>
              <p className="text-gray-600 leading-8">
                Our lead teacher is passionate about early childhood education
                and is dedicated to creating a nurturing and engaging learning
                environment. With a focus on each child’s unique development,
                we ensure that every learner feels supported, valued, and inspired.
              </p>

              <p className="mt-3 text-gray-600 leading-8">
                Even as a growing learning center, our commitment remains strong:
                to provide quality education, personal attention, and a safe space
                where children can truly thrive.
              </p>
            </div>
          </div>

          {/* WHAT MAKES US DIFFERENT */}
          <div className="text-center">
            <h2 className="mb-6 text-2xl font-bold text-[var(--navy)]">
              💛 What Makes Us Different
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm">
                <div className="mb-2 text-3xl">👶</div>
                <h3 className="font-semibold text-violet-700">
                  Small Class Sizes
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  We focus on personalized attention to support each child’s growth.
                </p>
              </div>

              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
                <div className="mb-2 text-3xl">🌿</div>
                <h3 className="font-semibold text-blue-700">
                  Nurturing Environment
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  A calm, safe, and supportive space where children feel comfortable learning.
                </p>
              </div>

              <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
                <div className="mb-2 text-3xl">🎯</div>
                <h3 className="font-semibold text-green-700">
                  Hands-On Learning
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Activities designed to build independence, creativity, and confidence.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}