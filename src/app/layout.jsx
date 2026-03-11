import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/Provider/AuthProvider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://care-xyz-pearl.vercel.app"),

  title: {
    default: "Care — Trusted Home Healthcare & Caregiver Services",
    template: "%s | Care",
  },

  description:
    "Care provides professional home healthcare services including elderly care, infant care, home nursing, and post-surgery assistance. Book trusted caregivers easily.",

  keywords: [
    "home care",
    "home nursing",
    "elderly care",
    "caregiver services",
    "post surgery care",
    "infant care",
    "home healthcare",
    "professional caregivers",
    "child daycare",
    "medical home service",
  ],

  authors: [{ name: "Care Team", url: "https://care-xyz-pearl.vercel.app" }],
  creator: "Care",
  publisher: "Care",

  applicationName: "Care",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://care-xyz-pearl.vercel.app",
    title: "Care — Trusted Home Healthcare & Caregiver Services",
    description:
      "Book professional caregivers for elderly care, home nursing, infant care, and post-surgery support. Reliable home healthcare services.",
    siteName: "Care",
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "Care Home Healthcare Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Care — Trusted Home Healthcare Services",
    description:
      "Find professional caregivers for elderly, infants, and medical home services.",
    images: ["/og/home.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "healthcare",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning={true}
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
           <Toaster richColors position="top-center" />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
