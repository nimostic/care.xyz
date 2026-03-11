"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, LogOut, Menu, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const pathname = usePathname();
  const user = session?.user;

  // 1
  const navRef = useRef();

  //2
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const routes = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Caregivers", path: "/caregivers" },
    { name: "My Bookings", path: "/my-booking" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header ref={navRef} className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-black text-slate-900 tracking-tight"
          >
            Care<span className="text-teal-600">.xyz</span>
          </Link>

          {/* Desktop Routes */}
          <nav className="hidden md:flex items-center gap-1">
            {routes.map((route) => {
              const isActive = pathname === route.path;
              return (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-teal-50 text-teal-600"
                      : "text-slate-600 hover:text-teal-600 hover:bg-slate-50"
                  }`}
                >
                  {route.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            {!user && (
              <>
                <Link
                  href="/login"
                  className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 text-sm font-bold bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition shadow-sm shadow-teal-100"
                >
                  Join Now
                </Link>
              </>
            )}

            {user && (
              <div className="relative">
                <button
                  onClick={() => setDropdown(!dropdown)}
                  className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-50 transition"
                >
                  {user.image ? (
                    <Image
                      height={34}
                      width={34}
                      src={user.image}
                      alt={user.name}
                      className="rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center text-sm font-black uppercase">
                      {user.name?.[0] || "U"}
                    </div>
                  )}
                  <div className="text-left">
                    <p className="text-sm font-bold text-slate-800 leading-none">
                      {user.name}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      {user.email}
                    </p>
                  </div>
                </button>

                {dropdown && (
                  <>
                    {/* Backdrop */}
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setDropdown(false)}
                    />
                    <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-100 rounded-2xl shadow-xl p-2 z-20">
                      <div className="px-3 py-2.5 border-b border-slate-100 mb-1">
                        <p className="text-sm font-bold text-slate-900">
                          {user.name}
                        </p>
                        <p className="text-xs text-slate-400 truncate">
                          {user.email}
                        </p>
                      </div>

                      <Link
                        href="/my-booking"
                        onClick={() => setDropdown(false)}
                        className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-slate-700 rounded-xl hover:bg-slate-50 transition"
                      >
                        <LayoutDashboard size={16} className="text-teal-600" />
                        My Bookings
                      </Link>

                      <div className="border-t border-slate-100 mt-1 pt-1">
                        <button
                          onClick={() => signOut({ callbackUrl: "/" })}
                          className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-bold text-rose-500 rounded-xl hover:bg-rose-50 transition"
                        >
                          <LogOut size={16} /> Logout
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-slate-50 text-slate-700 transition"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 flex flex-col gap-1">
            {routes.map((route) => {
              const isActive = pathname === route.path;
              return (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                    isActive
                      ? "bg-teal-50 text-teal-600"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {route.name}
                </Link>
              );
            })}

            {!user && (
              <div className="flex gap-2 pt-3 border-t border-slate-100 mt-2">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center py-2.5 text-sm font-bold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center py-2.5 text-sm font-bold bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition"
                >
                  Join Now
                </Link>
              </div>
            )}

            {user && (
              <div className="pt-3 border-t border-slate-100 mt-2 space-y-1">
                <div className="flex items-center gap-3 px-4 py-2.5 bg-slate-50 rounded-xl mb-2">
                  {user.image ? (
                    <Image
                      height={36}
                      width={36}
                      src={user.image}
                      alt={user.name}
                      className="rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center text-sm font-black uppercase shrink-0">
                      {user.name?.[0] || "U"}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      {user.name}
                    </p>
                    <p className="text-xs text-slate-400 truncate">
                      {user.email}
                    </p>
                  </div>
                </div>

                <Link
                  href="/my-booking"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-slate-700 rounded-xl hover:bg-slate-50 transition"
                >
                  <LayoutDashboard size={16} className="text-teal-600" />
                  My Bookings
                </Link>

                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-bold text-rose-500 rounded-xl hover:bg-rose-50 transition"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
