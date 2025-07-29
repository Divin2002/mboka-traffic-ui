"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ phone: "", password: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // ➤ À remplacer plus tard par une vraie vérification Firebase/Auth
    if (form.phone && form.password) {
      alert("Connexion réussie");
      router.push("/"); // On redirigera par rôle dans l’étape suivante
    } else {
      alert("Échec de connexion");
    }
  };

  return (
    <main className="max-w-sm mx-auto mt-20 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Connexion</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="phone"
          placeholder="Numéro de téléphone"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="w-full bg-primary text-white py-2 rounded">
          Se connecter
        </button>
      </form>
    </main>
  );
}
