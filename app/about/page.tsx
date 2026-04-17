import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VirtualTour from '@/components/aboutus/VirtualTour'
import MissionVision from '@/components/aboutus/MissionVision'
import WhyMontessori from '@/components/WhyMontessori'
import Teacher from '@/components/aboutus/Techer'
import FAQ from '@/components/aboutus/FAQ'

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
              learning. [cite: 34]
            </p>
          </div>

          <VirtualTour />
          <MissionVision />
          <WhyMontessori />
          <Teacher />

          <FAQ /> 

        </div>
      </section>

      <Footer />
    </main>
  )
}