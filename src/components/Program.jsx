function Program() {
  const programs = [
    {
      title: 'PAUD & TK',
      desc: 'Pondasi karakter dan kemandirian sejak dini melalui permainan edukatif.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'SD',
      desc: 'Fokus pada literasi, numerasi, dan pembentukan sikap positif.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'SMP',
      desc: 'Penguatan konsep, eksplorasi minat, dan kesiapan akademik.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'SMA',
      desc: 'Pengembangan bakat, riset, dan persiapan ke perguruan tinggi.',
      color: 'from-violet-500 to-purple-500',
    },
  ]

  return (
    <section id="program" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Program Pendidikan</h2>
          <p className="mt-2 text-slate-600">Pilihan jenjang yang fleksibel dan terintegrasi</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="group rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-tr ${p.color} text-white grid place-items-center font-bold shadow`}>{p.title.split(' ').pop()}</div>
              <h3 className="mt-4 font-bold text-lg text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <a href="#daftar" className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700">Pelajari lebih lanjut →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Program
