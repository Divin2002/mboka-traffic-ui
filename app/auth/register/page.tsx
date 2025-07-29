"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    password: "",
    contactUrgence: "",
    vehicule: false,
    immatriculation: "",
    marque: "",
    couleur: "",
    estChauffeur: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
    // ➤ ICI : appel Firebase Auth + Firestore ou API custom
  };

  return (
    <main className="max-w-lg mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Créer un compte</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Nom complet" onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="phone" placeholder="Numéro de téléphone" onChange={handleChange} required className="w-full border p-2 rounded" />
        <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} required className="w-full border p-2 rounded" />

        <input name="contactUrgence" placeholder="Numéro d’un proche de confiance" onChange={handleChange} required className="w-full border p-2 rounded" />

        <label className="flex items-center gap-2">
          <input type="checkbox" name="vehicule" onChange={handleChange} />
          Je suis véhiculé
        </label>

        {form.vehicule && (
          <div className="space-y-2">
            <input name="immatriculation" placeholder="Immatriculation" onChange={handleChange} className="w-full border p-2 rounded" />
            <input name="marque" placeholder="Marque" onChange={handleChange} className="w-full border p-2 rounded" />
            <input name="couleur" placeholder="Couleur" onChange={handleChange} className="w-full border p-2 rounded" />
            <label className="flex items-center gap-2">
              <input type="checkbox" name="estChauffeur" onChange={handleChange} />
              Je suis chauffeur
            </label>
          </div>
        )}

        <button type="submit" className="w-full bg-primary text-white py-2 rounded">
          S’inscrire
        </button>
      </form>
    </main>
  );
}
