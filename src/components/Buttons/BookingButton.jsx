"use client";
import { useSession } from "next-auth/react";
import { useParams, usePathname, useRouter } from "next/navigation";

const BookingButton = ({ serviceId }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const path = usePathname();
  const params = useParams()
  console.log(params)
  const handleClick = () => {
    if (status === "loading") return; 
    if (session) {
      router.push(`/booking/${serviceId}`);
    } else {
      router.push(`/login?callbackUrl=/booking/${serviceId}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={status === "loading"}
      className="w-full bg-teal-600 hover:bg-teal-500 text-white py-4 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-lg shadow-teal-500/20 text-center block mt-4 disabled:opacity-60"
    >
      {status === "loading" ? "Please wait..." : "Book Now"}
    </button>
  );
};

export default BookingButton;