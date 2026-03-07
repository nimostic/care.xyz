"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, Clock, DollarSign, ArrowLeft, Home, Activity, ShieldCheck, HeartPulse } from "lucide-react";
import services from "../../../../public/data/services.json";

const ServiceDetails = () => {
  const { id } = useParams();

  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen text-teal-600">
        <p className="text-xl font-semibold animate-pulse">Loading Service Details...</p>
      </div>
    );
  }

  return (
    <div className=" bg-gray-50 px-4 sm:px-6 lg:px-8 py-10 md:py-20">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Back Button */}
        <div className="p-6">
          <Link
            href="/services"
            className="flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/2 p-6"
          >
            <div className="relative h-80 md:h-112.5 w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={service.image}
                alt={service.title}
                // layout="fill"
                width={1600}
                height={900}
                
                className="hover:scale-105 transition-transform duration-500 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  {service.priority}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/2 p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                   <Home size={28} />
                </div>
                <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
                  {service.title}
                </h1>
              </div>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center p-4 bg-teal-50 rounded-2xl border border-teal-100">
                  <DollarSign className="text-teal-600 mr-2" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wide">Price</p>
                    <p className="font-bold text-teal-800">৳{service.price}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-teal-50 rounded-2xl border border-teal-100">
                  <Clock className="text-teal-600 mr-2" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wide">Duration</p>
                    <p className="font-bold text-teal-800">{service.date}</p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <ShieldCheck className="mr-2 text-teal-600" /> Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-2 shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={`/booking/${service.id}`}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-2xl font-bold text-xl text-center shadow-lg shadow-teal-200 transition-all flex justify-center items-center gap-2"
              >
                <HeartPulse size={24} />
                Confirm Booking
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;