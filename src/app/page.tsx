import { FloatingNavDemo } from "@/components/blocks/Navbar";
import { HeroSectionOne } from "@/components/blocks/Hero";
import FeaturedCards from "@/components/blocks/FeaturedCards";
import WhyChooseUs from "@/components/blocks/why-choose-us";
import Testimonials from "@/components/blocks/Testimonials";
import Footer from "@/components/blocks/Footer";
export default function Home() {
  return (
    <main className="text-center">
      <FloatingNavDemo />
      <HeroSectionOne />
      <FeaturedCards />
      <WhyChooseUs />
      <Testimonials />
      <Footer/>
    </main>
  );
}
