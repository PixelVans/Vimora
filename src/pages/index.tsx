
import Footer from "@/components/Footer";
import CollaborationSection from "@/components/landingPageUtils/CollaborationSection";
import CtaSection from "@/components/landingPageUtils/CtaSection";
import EverythingYouNeedSection from "@/components/landingPageUtils/EverythingYouNeedSection";
import FeaturesSection from "@/components/landingPageUtils/FeaturesSection";
import HeroSection from "@/components/landingPageUtils/HeroSection";
import PricingSection from "@/components/landingPageUtils/PricingSection";
import PropellingSection from "@/components/landingPageUtils/PropellingSection";
import TestimonialsSection from "@/components/landingPageUtils/TestimonialsSection";
import WhoVimoraIsForSection from "@/components/landingPageUtils/WhoVimoraIsForSection";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";



const Index = () => {

  const location = useLocation();
  

  useEffect(() => {
    const hash = location.hash;
        if (hash) {

          // DOM to render before scrolling
          setTimeout(() => {
            const el = document.querySelector(hash);
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }, 100); 
        }
      }, [location]);


  return (
    <div className="min-h-screen bg-background">
       <>

      <Navbar />
        <HeroSection />
        <PropellingSection />
        <CollaborationSection />
        <TestimonialsSection />
        <PricingSection />
        <WhoVimoraIsForSection   />
        <FeaturesSection />
        <EverythingYouNeedSection />
        <CtaSection />
      <Footer/>
      
      </>
      </div>
  );
};

export default Index;
