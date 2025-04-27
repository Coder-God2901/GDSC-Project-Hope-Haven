// src/app/main/impact/page.tsx
import ImpactStats from "@/components/donations/ImpactStats";

export default function ImpactPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif text-[#D4AF37] mb-6 tracking-wide">Our Impact</h1>
      <ImpactStats />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-[#D4AF37]/30 rounded-xl p-6 backdrop-blur-md">
          <h2 className="font-serif text-2xl text-[#D4AF37] mb-2">Success Story</h2>
          <p>
            “Thanks to Hope Haven, our community pantry now serves over 200 families every week. The support and dignity we receive is unmatched.”
          </p>
          <div className="mt-2 text-right text-[#D4AF37]/80">- Maya, Community Leader</div>
        </div>
        <div className="bg-white/5 border border-[#D4AF37]/30 rounded-xl p-6 backdrop-blur-md">
          <h2 className="font-serif text-2xl text-[#D4AF37] mb-2">Volunteer Highlight</h2>
          <p>
            “Volunteering at Hope Haven has been a life-changing experience. The impact is real, and every meal matters.”
          </p>
          <div className="mt-2 text-right text-[#D4AF37]/80">- Arjun, Volunteer</div>
        </div>
      </div>
    </section>
  );
}
