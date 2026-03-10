import Caregivers from "@/components/Home/Caregivers";
import CTA from "@/components/Home/CTA";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import Pricing from "@/components/Home/Pricing";
import Services from "@/components/Home/ServicesSection";
import Testimonials from "@/components/Home/Testimonials";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
export const metadata = {
  title: "Home Healthcare Services",
  description:
    "Care connects families with trusted caregivers. Book elderly care, infant care, home nursing, and specialized medical support at home.",
};
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
