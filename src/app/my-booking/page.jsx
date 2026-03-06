"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Package,
  ChevronRight,
  Filter,
} from "lucide-react";

const MOCK_BOOKINGS = [
  {
    id: "BK-9901",
    serviceName: "Post-Surgery Care",
    duration: "10 Days",
    location: "Dhanmondi, Dhaka",
    totalCost: 9000,
    status: "Confirmed",
    date: "24 Oct, 2023",
  },
  {
    id: "BK-8842",
    serviceName: "Elderly Care",
    duration: "24 Hours",
    location: "Gulshan 2, Dhaka",
    totalCost: 1200,
    status: "Pending",
    date: "26 Oct, 2023",
  },
  {
    id: "BK-7721",
    serviceName: "Child Care",
    duration: "5 Days",
    location: "Uttara, Dhaka",
    totalCost: 4500,
    status: "Completed",
    date: "15 Oct, 2023",
  },
  {
    id: "BK-1102",
    serviceName: "Physiotherapy",
    duration: "2 Hours",
    location: "Banani, Dhaka",
    totalCost: 800,
    status: "Cancelled",
    date: "10 Oct, 2023",
  },
];

const StatusBadge = ({ status }) => {
  const styles = {
    Pending: "bg-amber-50 text-amber-600 border-amber-100",
    Confirmed: "bg-teal-50 text-teal-600 border-teal-100",
    Completed: "bg-blue-50 text-blue-600 border-blue-100",
    Cancelled: "bg-rose-50 text-rose-600 border-rose-100",
  };
  return (
    <span
      className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border ${styles[status]}`}
    >
      {status}
    </span>
  );
};

export default function MyBookings() {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBookings = useMemo(() => {
    return MOCK_BOOKINGS.filter(
      (b) =>
        (filter === "All" || b.status === filter) &&
        (b.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          b.location.toLowerCase().includes(searchTerm.toLowerCase())),
    );
  }, [filter, searchTerm]);

  return (
    <main className="min-h-screen bg-[#fcfdfe] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight"
          >
            My <span className="text-teal-600">Bookings</span>
          </motion.h1>
          <p className="text-slate-500 mt-2 text-base sm:text-lg">
            Manage and track your caregiver service requests.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="max-w-md mx-auto mb-12 flex gap-2">
          <input
            type="text"
            placeholder="Search by service or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {["All", "Pending", "Confirmed", "Completed", "Cancelled"].map(
              (f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ),
            )}
          </select>
        </div>

        {/* Booking Grid */}
        <div className="relative">
          <AnimatePresence mode="popLayout">
            {filteredBookings.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredBookings.map((booking) => (
                  <motion.div
                    key={booking.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-slate-50 text-slate-400 rounded-3xl flex items-center justify-center">
                        <Package size={28} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {booking.serviceName}
                        </h3>
                        <StatusBadge status={booking.status} />
                        <p className="text-xs text-slate-400 mt-1">
                          Booking ID: {booking.id}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-slate-500 text-sm font-medium mt-2">
                      <span className="flex items-center gap-1">
                        <Clock size={16} className="text-teal-500" />
                        {booking.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} className="text-teal-500" />
                        {booking.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={16} className="text-teal-500" />
                        {booking.date}
                      </span>
                    </div>
                    <div className="text-right mt-2">
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
                        Total Cost
                      </p>
                      <p className="text-xl font-black text-slate-900">
                        ৳{booking.totalCost}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200"
              >
                <Package size={48} className="mx-auto text-slate-200 mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  No results found
                </h3>
                <p className="text-slate-400 text-sm sm:text-base">
                  Try another search or filter.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setFilter("All");
                  }}
                  className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-lg font-bold shadow hover:bg-teal-700 transition"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
