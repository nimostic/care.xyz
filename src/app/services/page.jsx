import ServiceCard from "@/components/card/ServiceCard";
import services from "../../../public/data/services.json";


export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">
            Our Professional <span className="text-teal-600">Services</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Explore our wide range of caregiving services designed to provide comfort, 
            safety, and peace of mind for your loved ones.
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-20 bg-white p-12 rounded-[3rem] text-center border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Need a Custom Plan?</h2>
          <p className="text-slate-500 mb-8">We offer personalized caregiving solutions for long-term needs.</p>
          <button className="bg-teal-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-900 transition-all">
            Contact Support
          </button>
        </div>

      </div>
    </main>
  );
}