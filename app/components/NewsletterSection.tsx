"use client";

import { useState } from "react";
import { AfterListSection } from "./AfterListSection";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    msg: string;
  } | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setToast({
        type: "error",
        msg: "Te rugăm să introduci un e-mail valid.",
      });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Eroare la trimitere.");

      setToast({
        type: "success",
        msg: "Mesaj trimis cu succes! Mulțumim 🙌",
      });
      setEmail("");
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Ceva n-a mers bine.";
      setToast({
        type: "error",
        msg: errorMessage,
      });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 3500);
    }
  }

  return (
    <section id="newsletter" className="scroll-mt-24 bg-gray-100">
      <div className="container px-4 py-16 lg:py-24">
        <div className="flex flex-col w-full">
          <h2 className="text-4xl font-extrabold leading-tight text-[#0C3559] sm:text-5xl">
            Află primul despre schimbările care au loc în Germania
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-500">
            Abonează-te acum și afla gratuit informații pentru care unii plătesc
            bani ca să le știe!
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-8 flex w-full max-w-2xl overflow-hidden rounded-lg shadow-sm"
          >
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full flex-1 border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C3559]"
              aria-label="Email"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-[#0C3559] px-6 text-white font-semibold hover:bg-[#0a2945] disabled:opacity-70"
            >
              {loading ? "Se trimite..." : "Trimite"}
            </button>
          </form>

          <div className="mt-6 h-1 w-24 rounded bg-[#C6912B]" />
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-6 left-6 z-50 rounded-md px-4 py-3 text-lg shadow-lg ${
            toast.type === "success"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {toast.msg}
        </div>
      )}
      <div className="container px-4">
        <AfterListSection />
      </div>
    </section>
  );
}
