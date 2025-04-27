// src/app/donations/donate/page.tsx
import DonationsForm from "@/components/donations/DonationForm";

export default function DonatePage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif text-[#D4AF37] mb-6 tracking-wide">Make a Donation</h1>
      <DonationsForm />
    </section>
  );
}
