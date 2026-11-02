export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-32 mb-32">
      <section id="#beranda" className="pt-32 text-center sm:text-left">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Halo, saya <span className="text-emerald-400">Dafa</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mx-auto sm:mx-0">
          Mahasiswa Teknologi Rekayasa Perangat Lunak, Berfokus pada pengembangan aplikasi web full-stack modern yang interaktif dan responsif.
        </p>
      </section>

      <section id="#proyek" className="space-y-8">
        <h2 className="text-3xl font-bold border-b border-zinc-800 pb-4">Proyek Ekspolarasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-emerald-500/50 transition-colors group">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Paham Iklim</h3>
            <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
              Platform edukasi iklim interaktif dengan visualisasi 3D globe, kalkulator jejak karbon, dan alur navigasi scrollytelling.
            </p>
            <div className="flex flex-warp gap-2 text-xs font-mono text-emerald-400">
              <span className="px-2 py-1 bg-emerald-400/10 rounded">Next.js</span>
              <span className="px-2 py-1 bg-emerald-400/10 rounded">Three.js</span>
              <span className="px-2 py-1 bg-emerald-400/10 rounded">Tailwind</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-emerald-500/50 transition-colors group">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Paham Iklim</h3>
            <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
              Sistem agrikultur cerdas berbasis AI untuk deteksi penyakit tanaman dan otomatisasi irigasi menggunakan sensor IoT.
            </p>
            <div className="flex flex-warp gap-2 text-xs font-mono text-emerald-400">
              <span className="px-2 py-1 bg-emerald-400/10 rounded">React</span>
              <span className="px-2 py-1 bg-emerald-400/10 rounded">YOLOv8</span>
              <span className="px-2 py-1 bg-emerald-400/10 rounded">IoT</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}