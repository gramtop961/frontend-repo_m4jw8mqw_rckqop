function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-wider uppercase bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Sekolah Unggulan</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Membangun Generasi Emas dengan Pendidikan Modern
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Kurikulum berstandar nasional, fasilitas lengkap, dan lingkungan belajar yang inspiratif untuk menumbuhkan potensi terbaik setiap siswa.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#daftar" className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow hover:opacity-95">
                Daftar Sekarang
              </a>
              <a href="#tentang" className="inline-flex items-center rounded-md border border-slate-300 text-slate-700 px-5 py-3 text-sm font-semibold hover:bg-slate-50">
                Jelajahi Sekolah
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { label: 'Guru Profesional', value: '80+' },
                { label: 'Siswa Aktif', value: '1200+' },
                { label: 'Prestasi', value: '250+' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="text-2xl font-extrabold text-slate-900">{item.value}</div>
                  <div className="text-xs text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-200 shadow-inner" />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-slate-200">
              <div className="text-sm font-semibold text-slate-700">Kelas Digital</div>
              <div className="text-xs text-slate-500">Pembelajaran interaktif berbasis teknologi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
