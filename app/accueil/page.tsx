// app/accueil/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-4 text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Bienvenue sur Mâboka Traffic 🚦</h1>
      <p className="text-lg text-gray-600 max-w-xl mb-6">
        Une application citoyenne pour signaler les embouteillages, incidents et situations d’urgence en RDC.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-md text-lg hover:bg-blue-700 transition"
      >
        Accéder à l’application
      </a>
    </main>
  );
}
