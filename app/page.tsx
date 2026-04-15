import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyMontessori from '@/components/WhyMontessori'
import ProgramsPreview from '@/components/ProgramsPreview'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyMontessori />
      <ProgramsPreview />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}