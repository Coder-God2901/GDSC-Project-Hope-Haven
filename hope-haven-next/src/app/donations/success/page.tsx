// src/app/donations/success/page.tsx
import Link from "next/link";

export default function SuccessPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] py-24">
      <div className="bg-white/5 border border-[#D4AF37]/30 rounded-xl p-10 shadow-lg text-center backdrop-blur-md">
        <h1 className="text-4xl font-serif text-[#D4AF37] mb-4">Thank You!</h1>
        <p className="mb-6 text-lg text-[#F5F5F5]/90">
          Your generosity brings hope and nourishment to many. We appreciate your support!
        </p>
        <Link href="/" className="btn btn-primary bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#b8962d] transition">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
