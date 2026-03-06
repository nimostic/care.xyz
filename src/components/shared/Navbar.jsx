"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // Temporary user 
  const user = {
    name: "Riyad",
    email: "riyad@email.com",
  };
  // const user = null;

  const routes = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Caregivers", path: "/caregivers" },
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
            Care<span className="text-blue-600">.xyz</span>
          </Link>

          {/* Desktop Routes */}
          <nav className="hidden md:flex items-center gap-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="text-gray-600 hover:text-blue-600 text-sm font-medium transition"
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
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Register
                </Link>
              </>
            )}

            {user && (
              <div className="relative">

                <button
                  onClick={() => setDropdown(!dropdown)}
                  className="flex items-center gap-2"
                >
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                    {user.name[0]}
                  </div>

                  <span className="text-sm text-gray-700">
                    {user.name}
                  </span>
                </button>

                {dropdown && (
                  <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-2">

                    <div className="px-3 py-2 border-b">
                      <p className="text-sm font-medium text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {user.email}
                      </p>
                    </div>

                    <Link
                      href="/add-product"
                      className="block px-3 py-2 text-sm rounded hover:bg-gray-100"
                    >
                      Add Product
                    </Link>

                    <Link
                      href="/manage-products"
                      className="block px-3 py-2 text-sm rounded hover:bg-gray-100"
                    >
                      Manage Products
                    </Link>

                    <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100">
                      Logout
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