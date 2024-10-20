import AppBar from "./_components/Appbar";
import HeroSection from "./_components/HeroSection";
import BrandShowcase from "./_components/HorizontalMarquee";
import ServicesMenu from "./_components/Services";
import { TalentMarquee } from "./_components/TalentMarquee";
import ProcessComponent from "./_components/ProcessComponent";
import IndustriesWeServe from "./_components/IndustriesWeServe";
import PortfolioCarousel from "./_components/PortfolioCarousel";
import TestimonialCarousel from "./_components/TestimonialCarousel";
import FAQ from "./_components/FAQ";
import HeroSectionTwo from "./_components/HersoSectionTwo";
import ArticleCarousel from "./_components/ArticleCarousel";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div>
      <AppBar />
      <HeroSection />
      <BrandShowcase />
      <ServicesMenu />
      <TalentMarquee />
      <ProcessComponent />
      <IndustriesWeServe />
      <PortfolioCarousel />
      <TestimonialCarousel />
      <ArticleCarousel />
      <HeroSectionTwo />
      <FAQ />
      <Footer />
    </div>
  );
}
