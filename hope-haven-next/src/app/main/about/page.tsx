// src/app/main/about/page.tsx
export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif text-[#D4AF37] mb-6 tracking-wide">About Hope Haven</h1>
      <p className="mb-8 text-lg text-[#F5F5F5]/90 max-w-2xl">
        Hope Haven is a luxurious yet warm platform dedicated to bridging the gap between abundance and need.
        Our mission is to connect surplus food and generous donors with communities in need, ensuring dignity, nourishment, and sustainability for all.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-[#D4AF37]/30 rounded-xl p-6 backdrop-blur-md">
          <h2 className="font-serif text-2xl text-[#D4AF37] mb-2">Our Mission</h2>
          <p>
            To nourish communities with dignity, reduce food waste, and foster a culture of giving.
          </p>
        </div>
        <div className="bg-white/5 border border-[#D4AF37]/30 rounded-xl p-6 backdrop-blur-md">
          <h2 className="font-serif text-2xl text-[#D4AF37] mb-2">Our Values</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Compassion</li>
            <li>Transparency</li>
            <li>Sustainability</li>
            <li>Community</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
