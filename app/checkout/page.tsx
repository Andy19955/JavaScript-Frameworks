"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const items = cart.reduce<Record<string, { title: string; qty: number; price: number }>>((acc, p) => {
    if (acc[p.id]) acc[p.id].qty++;
    else acc[p.id] = { title: p.title, qty: 1, price: p.discountedPrice && p.discountedPrice < p.price ? p.discountedPrice : p.price };
    return acc;
  }, {});

  const summary = Object.values(items);
  const subtotal = summary.reduce((s, it) => s + it.price * it.qty, 0);

  const [form, setForm] = useState({ name: "", email: "", address: "", city: "", zip: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) {
      setError("Please complete name, email and address.");
      return;
    }
    setError("");
    alert(`Order submitted — ${summary.length} line(s), total ${subtotal.toFixed(2)}.`);
  };
  return (
    <>
      <Header />
      <main className="flex-1 flex justify-center">
        <div className="max-w-6xl w-full py-12 px-6">
          <h1 className="text-4xl font-bold mb-6">Checkout</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <form onSubmit={handleSubmit} className="md:col-span-2 bg-zinc-900 p-6 rounded shadow text-zinc-200">
              <h2 className="text-2xl font-semibold mb-4">Billing details</h2>
              {error && <div className="mb-4 text-sm text-red-400">{error}</div>}
              <label className="block mb-3">
                <span className="text-sm text-zinc-300">Full name</span>
                <input name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full rounded bg-white/5 px-3 py-2 text-zinc-100" />
              </label>
              <label className="block mb-3">
                <span className="text-sm text-zinc-300">Email</span>
                <input name="email" value={form.email} onChange={handleChange} className="mt-1 block w-full rounded bg-white/5 px-3 py-2 text-zinc-100" />
              </label>
              <label className="block mb-3">
                <span className="text-sm text-zinc-300">Address</span>
                <textarea name="address" value={form.address} onChange={handleChange} className="mt-1 block w-full rounded bg-white/5 px-3 py-2 text-zinc-100" rows={3} />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm text-zinc-300">City</span>
                  <input name="city" value={form.city} onChange={handleChange} className="mt-1 block w-full rounded bg-white/5 px-3 py-2 text-zinc-100" />
                </label>
                <label className="block">
                  <span className="text-sm text-zinc-300">ZIP</span>
                  <input name="zip" value={form.zip} onChange={handleChange} className="mt-1 block w-full rounded bg-white/5 px-3 py-2 text-zinc-100" />
                </label>
              </div>
              <div className="mt-6 flex gap-4">
                <button type="submit" className="px-6 py-3 bg-orange-400 text-black font-semibold rounded">
                  Place order
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setForm({ name: "", email: "", address: "", city: "", zip: "" });
                    setError("");
                  }}
                  className="px-4 py-3 border border-zinc-700 rounded text-zinc-200"
                >
                  Reset
                </button>
              </div>
            </form>
            <aside className="bg-zinc-800 p-6 rounded text-zinc-200">
              <h2 className="text-2xl font-semibold mb-4">Order summary</h2>
              <ul className="divide-y divide-zinc-700 mb-4">
                {summary.map((it) => (
                  <li key={it.title} className="py-3 flex justify-between">
                    <div>
                      <div className="font-medium">{it.title}</div>
                      <div className="text-sm text-zinc-500">
                        {it.qty} × ${it.price.toFixed(2)}
                      </div>
                    </div>
                    <div className="font-semibold">${(it.price * it.qty).toFixed(2)}</div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mb-6 text-zinc-200">
                <span className="text-sm">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="text-sm text-zinc-500 mb-4">Shipping and taxes will be calculated at checkout.</div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
