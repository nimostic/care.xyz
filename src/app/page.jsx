import Caregivers from "@/components/Home/Caregivers";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
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
      <Testimonials />
    </>
  );
}
