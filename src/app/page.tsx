import Navigation from '@/components/fragments/Navigation'
import HeroSection from '@/components/fragments/HeroSection'
import SolutionsSection from '@/components/fragments/SolutionsSection'
import IndustriesSection from '@/components/fragments/IndustriesSection'
import ProcessSection from '@/components/fragments/ProcessSection'
import AboutSection from '@/components/fragments/AboutSection'
import ResultsSection from '@/components/fragments/ResultsSection'
import PartnersSection from '@/components/fragments/PartnersSection'
import ContactSection from '@/components/fragments/ContactSection'
import Footer from '@/components/fragments/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SolutionsSection />
      <IndustriesSection />
      <ProcessSection />
      <AboutSection />
      <ResultsSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
