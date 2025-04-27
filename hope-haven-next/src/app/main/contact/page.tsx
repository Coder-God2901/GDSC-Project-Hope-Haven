// src/app/main/contact/page.tsx
export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif text-[#D4AF37] mb-6 tracking-wide">Contact Us</h1>
      <form className="bg-white/5 border border-[#D4AF37]/30 rounded-xl p-8 shadow-lg backdrop-blur-md">
        <div className="mb-4">
          <label className="block mb-1 text-[#D4AF37]" htmlFor="name">Name</label>
          <input
            className="w-full p-3 rounded bg-transparent border border-[#D4AF37]/40 text-[#F5F5F5] focus:border-[#D4AF37] outline-none transition"
            id="name" name="name" type="text" required autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-[#D4AF37]" htmlFor="email">Email</label>
          <input
            className="w-full p-3 rounded bg-transparent border border-[#D4AF37]/40 text-[#F5F5F5] focus:border-[#D4AF37] outline-none transition"
            id="email" name="email" type="email" required autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-[#D4AF37]" htmlFor="message">Message</label>
          <textarea
            className="w-full p-3 rounded bg-transparent border border-[#D4AF37]/40 text-[#F5F5F5] focus:border-[#D4AF37] outline-none transition"
            id="message" name="message" rows={4} required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-[#D4AF37] text-black font-bold text-lg shadow transition hover:shadow-lg hover:bg-[#b8962d]"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-[#F5F5F5]/80">
        <p>Email: info@hopehaven.org</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </section>
  );
}
