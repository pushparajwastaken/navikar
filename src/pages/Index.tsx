import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { CTA } from "@/components/sections/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <CTA />
    </div>
  );
};

export default Index;
