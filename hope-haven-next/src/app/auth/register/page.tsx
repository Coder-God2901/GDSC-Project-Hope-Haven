// src/app/auth/register/page.tsx
import AuthForm from "@/components/common/AuthForm";

export default function RegisterPage() {
  return (
    <section className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif text-[#D4AF37] mb-6 tracking-wide">Register</h1>
      <AuthForm mode="register" />
    </section>
  );
}
