import Caregivers from "@/components/Home/Caregivers";
import CTA from "@/components/Home/CTA";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import Pricing from "@/components/Home/Pricing";
import Services from "@/components/Home/ServicesSection";
import Testimonials from "@/components/Home/Testimonials";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <Caregivers />
      <Pricing/>
      <Testimonials />
      <CTA/>
    </>
  );
}
