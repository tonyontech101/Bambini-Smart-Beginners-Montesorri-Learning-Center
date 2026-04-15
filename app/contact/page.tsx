import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <section className="container-main py-16">
        <div className="section-label">Contact</div>
        <h1 className="section-title">Get in Touch</h1>
        <p className="section-sub">
          Have questions about enrollment, programs, or visits? Send us a message.
        </p>
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  )
}