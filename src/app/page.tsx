import Navigation from '@/components/fragments/Navigation'
import HeroSection from '@/components/fragments/HeroSection'
import SolutionsSection from '@/components/fragments/SolutionsSection'
import IndustriesSection from '@/components/fragments/IndustriesSection'
import DemosSection from '@/components/fragments/DemosSection'
import ROICalculator from '@/components/fragments/ROICalculator'
import IntelligenceFeed from '@/components/fragments/IntelligenceFeed'
import ProposalGenerator from '@/components/fragments/ProposalGenerator'
import ProcessSection from '@/components/fragments/ProcessSection'
import AboutSection from '@/components/fragments/AboutSection'
import PartnersSection from '@/components/fragments/PartnersSection'
import ContactSection from '@/components/fragments/ContactSection'
import Footer from '@/components/fragments/Footer'
import AIConcierge from '@/components/fragments/AIConcierge'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SolutionsSection />
      <IndustriesSection />
      <DemosSection />
      <ROICalculator />
      <IntelligenceFeed />
      <ProposalGenerator />
      <ProcessSection />
      <AboutSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
      <AIConcierge />
    </main>
  )
}
