import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Program', href: '#program' },
    { label: 'Prestasi', href: '#prestasi' },
    { label: 'Berita', href: '#berita' },
    { label: 'Kontak', href: '#kontak' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#beranda" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center font-bold">SB</div>
            <div className="text-slate-900 font-semibold text-lg">Sekolah Bintang</div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#daftar" className="ml-2 inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow hover:opacity-95">
              Pendaftaran
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-slate-100">
                {item.label}
              </a>
            ))}
            <a href="#daftar" onClick={() => setOpen(false)} className="block px-2 py-2 rounded bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center font-semibold">Pendaftaran</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
