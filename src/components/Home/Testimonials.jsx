"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ayesha Rahman",
      role: "Parent",
      text: "Care.xyz helped me find a reliable babysitter within minutes. The process was incredibly smooth!",
    },
    {
      name: "Mahmud Hasan",
      role: "Son",
      text: "Great platform for elderly care. The caregiver was very professional and patient with my father.",
    },
    {
      name: "Nusrat Jahan",
      role: "Housewife",
      text: "Easy booking and trustworthy service. Highly recommended for any family looking for home care.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            What <span className="text-teal-600">Families</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-teal-100/30 transition-all duration-300"
            >
              <Quote className="text-teal-200 absolute top-6 right-8" size={40} />
              
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed italic relative z-10">
                &quot;{review.text}&quot;
              </p>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="font-bold text-slate-900">{review.name}</p>
                <p className="text-xs text-teal-600 font-medium">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}