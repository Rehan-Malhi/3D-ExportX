import { FloatingNavDemo } from "@/components/blocks/Navbar";
import { HeroSectionOne } from "@/components/blocks/Hero";
import FeaturedCards from "@/components/blocks/FeaturedCards";
export default function Home() {
  return (
    <main className="text-center">
      <FloatingNavDemo />
      <HeroSectionOne />
      <FeaturedCards />
    </main>
  );
}
