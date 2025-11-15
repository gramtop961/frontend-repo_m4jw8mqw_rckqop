function Prestasi() {
  const items = [
    {
      title: 'Juara 1 Olimpiade Sains Nasional',
      desc: 'Siswa kami meraih medali emas dalam OSN tingkat nasional.',
      badge: 'Nasional',
    },
    {
      title: 'Gold Medal Robotic Competition',
      desc: 'Tim robotik memenangkan kompetisi internasional.',
      badge: 'Internasional',
    },
    {
      title: 'Sekolah Adiwiyata',
      desc: 'Penghargaan atas komitmen pada lingkungan bersih dan hijau.',
      badge: 'Lingkungan',
    },
  ]

  return (
    <section id="prestasi" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Prestasi & Penghargaan</h2>
          <p className="mt-2 text-slate-600">Bangga atas karya dan dedikasi siswa serta guru</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-slate-900">{it.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">{it.badge}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Prestasi
