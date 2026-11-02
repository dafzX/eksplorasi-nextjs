import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portofolio | Dafa",
  description: "Portofolio Software Engineer Dafa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-zinc-950 text-zinc-50 antialiased">
        <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <span className="font-bold text-emerald-400 text-xl">DafzX</span>
            <div className="space-x-6 text-sm font-medium text-zinc-50">
              <a href="#beranda" className="hover:text-white transition">Beranda</a>
              <a href="#proyek" className="hover:text-white transition">Proyek</a>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}