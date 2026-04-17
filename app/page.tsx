import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyMontessori from '@/components/WhyMontessori'
import ProgramsPreview from '@/components/ProgramsPreview'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import MontessoriQuiz from '@/components/MontessoriQuiz'
import ActivitiesShowcase from '@/components/ActivitiesShowcase'
import NewsUpdate from '@/components/NewsUpdate'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <NewsUpdate />
      <WhyMontessori />
      <MontessoriQuiz />
      <ProgramsPreview />
      <ActivitiesShowcase />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}