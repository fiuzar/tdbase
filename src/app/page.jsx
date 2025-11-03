import Header from "@/components/root/header"
import Footer from "@/components/root/footer"
import Hero from "@/components/root/hero"
import HomeFeatures from "@/components/root/home-features";
import PricingComponent from "@/components/root/pricing";
import TestimonialSlider from "@/components/root/testimonials"
import HowItWorksComponent from "@/components/root/how-it-works";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <HomeFeatures />
        <PricingComponent />
        <HowItWorksComponent />
        <TestimonialSlider />
      </main>
      
      <Footer />
    </>
  );
}
