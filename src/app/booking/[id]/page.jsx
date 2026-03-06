"use client";

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

export default function BookingForm() {
  const { register, handleSubmit, watch } = useForm();

  const duration = watch("duration");
  const type = watch("type");

  const [total, setTotal] = useState(0);

  const hourRate = 120;
  const dayRate = 900;

  useEffect(() => {
    if (!duration) return;

    if (type === "hours") setTotal(duration * hourRate);
    else if (type === "days") setTotal(duration * dayRate);
  }, [duration, type]);

  const onSubmit = (data) => {
    const booking = {
      ...data,
      totalCost: total,
      status: "Pending",
    };

    console.log("Booking Saved:", booking);
  };

  return (
    <section className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-10">
            Book a <span className="text-teal-600">Caregiver</span>
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Duration */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Duration Type
                </label>

                <select
                  {...register("type", { required: true })}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-200 outline-none"
                >
                  <option value="">Select Type</option>
                  <option value="hours">Hours</option>
                  <option value="days">Days</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Duration
                </label>

                <input
                  type="number"
                  {...register("duration", { required: true })}
                  placeholder="Enter duration"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-200 outline-none"
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-700">Location</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  {...register("division")}
                  placeholder="Division"
                  className="border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-200 outline-none"
                />

                <input
                  {...register("district")}
                  placeholder="District"
                  className="border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-200 outline-none"
                />

                <input
                  {...register("city")}
                  placeholder="City"
                  className="border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-200 outline-none"
                />

                <input
                  {...register("area")}
                  placeholder="Area"
                  className="border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-200 outline-none"
                />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Full Address
              </label>

              <textarea
                {...register("address")}
                rows="3"
                placeholder="House / Road / Block details"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-200 outline-none"
              />
            </div>

            {/* Cost */}
            <div className="bg-teal-50 p-5 rounded-xl text-center space-y-1">
              <p className="text-sm text-slate-500">Estimated Cost</p>
              <p className="text-2xl font-bold text-teal-700">৳{total}</p>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
