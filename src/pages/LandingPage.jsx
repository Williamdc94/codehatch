import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Stats from "../components/stats"
import AchievementCurriculum from "../components/AchievementCurriculum"
import WhyCodehatch from "../components/WhyCodehatch"
import PricingSection from "../components/PricingSection"
import FAQ from "../components/FAQ"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

function LandingPage() {
    return (
        <>
     <Navbar/>
      <Hero/>
      <Stats/>
      <AchievementCurriculum/>
      <WhyCodehatch/>
      <PricingSection/>
      <FAQ/>
      <CTA/>
      <Footer/>
        </>
    )
}
export default LandingPage