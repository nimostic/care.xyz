
import Link from "next/link";
import {
  Baby, HeartPulse, Activity,
  Accessibility, Home, UserCheck,
} from "lucide-react";
import ServiceCard from "../card/ServiceCard";
import { getServices } from "@/actions/server/service";

const ICONS = { Baby, HeartPulse, Activity, Accessibility, Home, UserCheck };

const ServicesSection = async () => {
  const services = await getServices();

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              Our Professional <br />
              <span className="text-teal-600">Caregiving Services</span>
            </h2>
            <p className="text-slate-500 mt-4 text-lg">
              Trusted by 2000+ families for providing high-quality care at home.
            </p>
          </div>
          <Link href="/services" className="text-teal-600 font-bold hover:underline">
            View All Services →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((item, idx) => (
            <ServiceCard
              key={item._id}
              service={item}
              iconName={item.icon}  
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;