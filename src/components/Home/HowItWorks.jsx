import { Search, UserCheck, CalendarDays } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { title: "Find Caregiver", desc: "Search through our verified list of experts.", icon: <Search size={30}/> },
    { title: "Select Profile", desc: "Check reviews and NID verification status.", icon: <UserCheck size={30}/> },
    { title: "Book Service", desc: "Select date and confirm your booking.", icon: <CalendarDays size={30}/> },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16">
            How it <span className="text-teal-600">Works</span>
          </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}