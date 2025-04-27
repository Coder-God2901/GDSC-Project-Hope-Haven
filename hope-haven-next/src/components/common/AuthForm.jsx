"use client"
import { useState } from "react";

export default function AuthForm({ mode = "login" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setForm({ name: "", email: "", password: "", confirmPassword: "" });
    }, 1200);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-gold/30 rounded-xl p-8 max-w-md mx-auto shadow-lg"
    >
      <h2 className="text-2xl font-serif text-gold mb-6 text-center">
        {mode === "login" ? "Login" : "Register"}
      </h2>
      {success && (
        <div className="mb-4 p-3 rounded bg-green-900/60 text-gold text-center">
          {mode === "login" ? "Welcome back!" : "Registration successful!"}
        </div>
      )}
      {mode === "register" && (
        <div className="mb-4">
          <label className="block mb-1 text-gold font-medium" htmlFor="name">
            Full Name
          </label>
          <input
            className="w-full p-3 rounded bg-transparent border border-gold/40 text-ivory focus:border-gold outline-none transition"
            id="name"
            name="name"
            type="text"
            required
            autoComplete="off"
            value={form.name}
            onChange={handleChange}
          />
        </div>
      )}
      <div className="mb-4">
        <label className="block mb-1 text-gold font-medium" htmlFor="email">
          Email
        </label>
        <input
          className="w-full p-3 rounded bg-transparent border border-gold/40 text-ivory focus:border-gold outline-none transition"
          id="email"
          name="email"
          type="email"
          required
          autoComplete="off"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-gold font-medium" htmlFor="password">
          Password
        </label>
        <input
          className="w-full p-3 rounded bg-transparent border border-gold/40 text-ivory focus:border-gold outline-none transition"
          id="password"
          name="password"
          type="password"
          required
          value={form.password}
          onChange={handleChange}
        />
      </div>
      {mode === "register" && (
        <div className="mb-4">
          <label className="block mb-1 text-gold font-medium" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="w-full p-3 rounded bg-transparent border border-gold/40 text-ivory focus:border-gold outline-none transition"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </div>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 rounded-lg bg-gold text-black font-bold text-lg shadow-gold transition hover:shadow-lg hover:bg-[#b8962d] relative overflow-hidden"
      >
        {submitting
          ? mode === "login"
            ? "Logging in..."
            : "Registering..."
          : mode === "login"
          ? "Login"
          : "Register"}
        <span className="absolute left-0 top-0 w-full h-full pointer-events-none animate-shimmer bg-gradient-to-r from-transparent via-[#fff7c2]/40 to-transparent opacity-60" />
      </button>
    </form>
  );
}
