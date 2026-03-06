"use client";
import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Left Side: Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-4 sm:mb-6">
              Let's Get in <span className="text-teal-600">Touch</span>
            </h1>
            <p className="text-slate-500 text-base sm:text-lg">
              Have questions about our caregivers? Our team is here to help you 24/7.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 pt-4">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3 sm:p-4 bg-teal-50 text-teal-600 rounded-2xl">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-slate-400 font-bold uppercase">Call Us</p>
                <p className="font-bold text-slate-900 text-sm sm:text-base">+880 1234 567 890</p>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3 sm:p-4 bg-teal-50 text-teal-600 rounded-2xl">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-slate-400 font-bold uppercase">Email Us</p>
                <p className="font-bold text-slate-900 text-sm sm:text-base">support@caregivers.com</p>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3 sm:p-4 bg-teal-50 text-teal-600 rounded-2xl">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-slate-400 font-bold uppercase">Our Office</p>
                <p className="font-bold text-slate-900 text-sm sm:text-base">Gulshan 2, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-slate-50 p-6 sm:p-8 md:p-12 rounded-4xl border border-slate-100 shadow-sm">
          <form className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-none focus:ring-2 focus:ring-teal-500 shadow-sm outline-none text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-none focus:ring-2 focus:ring-teal-500 shadow-sm outline-none text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-none focus:ring-2 focus:ring-teal-500 shadow-sm outline-none text-sm sm:text-base"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message here..."
                className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-none focus:ring-2 focus:ring-teal-500 shadow-sm outline-none resize-none text-sm sm:text-base"
              ></textarea>
            </div>

            <button className="w-full bg-slate-900 text-white py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg hover:bg-teal-600 transition-all flex items-center justify-center gap-2 sm:gap-3">
              Send Message <Send size={18} className="sm:ml-1" />
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}