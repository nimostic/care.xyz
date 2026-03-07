"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutDashboard, LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const user = session?.user;

  const routes = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Caregivers", path: "/caregivers" },
    { name: "My Bookings", path: "/my-booking" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold text-gray-900 tracking-tight"
          >
            Care<span className="text-teal-600">.xyz</span>
          </Link>

          {/* Desktop Routes */}
          <nav className="hidden md:flex items-center gap-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="text-gray-600 hover:text-teal-600 text-sm font-medium transition"
              >
                {route.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            {!user && (
              <>
                <Link
                  href="/login"
                  className="text-sm text-gray-600 hover:text-teal-600"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="px-4 py-2 text-sm bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
                >
                  Join Now
                </Link>
              </>
            )}

            {user && (
              <div className="relative">
                <button
                  onClick={() => setDropdown(!dropdown)}
                  className="flex items-center gap-2"
                >
                  {user.image ? (
                    <Image
                      height={36}
                      width={36}
                      src={user.image}
                      alt="User"
                      className="rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center text-sm font-black uppercase">
                      {user.name?.[0] || "U"}
                    </div>
                  )}

                  <span className="text-sm text-gray-700">{user.name}</span>
                </button>

                {dropdown && (
                  <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                    <div className="px-3 py-2 border-b">
                      <p className="text-sm font-medium text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>

                    <Link
                      href="/my-booking"
                      className="block px-3 py-2 text-sm rounded hover:bg-gray-100"
                    >
                      <LayoutDashboard size={18} /> My Bookings
                    </Link>

                    <Link
                      href="/manage-products"
                      className="block px-3 py-2 text-sm rounded hover:bg-gray-100"
                    >
                      Manage Products
                    </Link>

                    <button
                      onClick={() => signOut()}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-rose-500 rounded-xl hover:bg-rose-50 transition-all"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-700 text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="text-gray-700"
              >
                {route.name}
              </Link>
            ))}

            {!user && (
              <>
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
              </>
            )}

            {user && (
              <>
                <div className="border-t pt-3">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>

                <Link href="/add-product">Add Product</Link>
                <Link href="/manage-products">Manage Products</Link>
                <button>Logout</button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
