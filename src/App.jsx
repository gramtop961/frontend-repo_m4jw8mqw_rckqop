import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tentang from './components/Tentang'
import Program from './components/Program'
import Prestasi from './components/Prestasi'
import Berita from './components/Berita'
import Kontak from './components/Kontak'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Tentang />
        <Program />
        <Prestasi />
        <Berita />
        <Kontak />
      </main>
      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-600 text-sm">© 2025 Sekolah Bintang. Semua hak dilindungi.</div>
          <div className="text-sm text-slate-500">Dikelola oleh Guru & OSIS • Ikuti kami di Instagram & YouTube</div>
        </div>
      </footer>
    </div>
  )
}

export default App
