"use client";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Pay as You Go",
      price: "0",
      desc: "Perfect for one-time emergency care.",
      features: ["Verified Caregivers", "Instant Booking", "Standard Support"],
      button: "Start Free",
      highlight: false,
    },
    {
      name: "Family Essential",
      price: "1500",
      desc: "Best for busy families needing regular help.",
      features: [
        "Priority Matching",
        "NID Verified Only",
        "Insurance Coverage",
        "24/7 Support",
      ],
      button: "Choose Plan",
      highlight: true,
    },
    {
      name: "Premium Care",
      price: "4500",
      desc: "Full support for elderly or chronic patients.",
      features: [
        "Dedicated Manager",
        "Police Verified Staff",
        "Weekly Health Reports",
        "Emergency Ambulance",
      ],
      button: "Get Premium",
      highlight: false,
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            Simple, Transparent <span className="text-teal-600">Pricing</span>
          </h2>
          <p className="text-slate-500 mt-4">
            No hidden fees. Choose a plan that fits your family's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl bg-white border ${plan.highlight ? "border-teal-500 shadow-2xl shadow-teal-100 scale-105" : "border-slate-200 shadow-sm"} relative`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
              <p className="text-slate-500 text-sm mt-2 h-10">{plan.desc}</p>

              <div className="my-8">
                <span className="text-4xl font-black text-slate-900">
                  ৳{plan.price}
                </span>
                <span className="text-slate-400">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-slate-600"
                  >
                    <div className="bg-teal-100 p-1 rounded-full">
                      <Check size={12} className="text-teal-600 font-bold" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.highlight ? "bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-200" : "bg-slate-100 text-slate-700 hover:bg-slate-900 hover:text-white"}`}
              >
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
