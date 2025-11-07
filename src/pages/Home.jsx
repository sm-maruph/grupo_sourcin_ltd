import Navbar from "../components/navbar/Navbar";
import HeroBanner from "../components/hero/HeroBanner";
import StatsSection from "../components/stats/StatsSection";
import TopStrip from "../components/navbar/TopStrip";
import CategoryGrid from "../components/CategoryGrid";
import AboutSection from "../components/AboutSection";
import CategoryInfoCards from "../components/CategoryInfoCards";
import TestimonialCEO from "../components/TestmonialCEO";
import ContactSection from "../components/ContactSection";
import PartnersSection from "../components/others/PartnersSection";
function Home() {
  return (
    <div className="bg-primary dark:bg-primary min-h-screen text-text_primary-900 dark:text-text_secondary-100 transition-colors duration-500">
      
      <main>
        <HeroBanner />
        <StatsSection />
        <CategoryGrid/>
        <AboutSection />
        <CategoryInfoCards />
        <PartnersSection />
        <TestimonialCEO />
        <ContactSection />
      </main>
    </div>
  );
}

export default Home;
