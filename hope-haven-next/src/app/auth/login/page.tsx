// src/app/auth/login/page.tsx
import AuthForm from "@/components/common/AuthForm";

export default function LoginPage() {
  return (
    <section className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif text-[#D4AF37] mb-6 tracking-wide">Login</h1>
      <AuthForm mode="login" />
    </section>
  );
}
