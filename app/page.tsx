import { HeroSection } from "@/components/hero-section"
import { SpeakersSection } from "@/components/speakers-section"
import { AboutSection } from "@/components/about-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { CommitteeMembersSection } from "@/components/committee-members-section"
import { RegistrationFeesSection } from "@/components/registration-fees-section"
import { PaymentDetailsSection } from "@/components/payment-details-section"
import { ResearchAreasSection } from "@/components/research-areas-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
        <ResearchAreasSection />
        <SponsorsSection />
        <CommitteeMembersSection />
        <RegistrationFeesSection />
        <PaymentDetailsSection />
      </main>
      <Footer />
    </div>
  )
}
