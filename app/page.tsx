import { Suspense } from "react";
import Hero from "@/components/Hero";
import ShopSection from "@/components/ShopSection";
import AboutSection from "@/components/AboutSection";
import CommissionsSection from "@/components/CommissionsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <ShopSection />
      </Suspense>
      <AboutSection />
      <CommissionsSection />
    </>
  );
}
