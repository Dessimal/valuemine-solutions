// app/auth/page.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const load = searchParams.get("load") || "2.5kva";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save formData to backend here (e.g., Supabase)
    router.push(`/size-result?load=${load}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-4">
      <h2 className="text-xl font-semibold">Sign up to view your quote</h2>
      <input
        type="text"
        placeholder="Name"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="border p-2 w-full"
      />
      <input
        type="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="border p-2 w-full"
      />
      <input
        type="tel"
        placeholder="Phone"
        required
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit & View Quote
      </button>
    </form>
  );
}
