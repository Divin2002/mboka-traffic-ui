// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Mâboka Traffic",
  description: "Application communautaire de circulation et de sécurité en RDC",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head />
      <body className="bg-gray-100 text-gray-900 font-sans antialiased">
        <main className="min-h-screen max-w-3xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
