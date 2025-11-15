function Tentang() {
  return (
    <section id="tentang" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900">Tentang Sekolah</h2>
        <p className="mt-4 text-slate-600 text-lg">
          Sekolah Bintang adalah lembaga pendidikan modern yang berkomitmen membentuk generasi unggul, berkarakter, dan adaptif terhadap perkembangan zaman.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Fasilitas Lengkap', desc: 'Laboratorium sains, perpustakaan digital, studio seni, lapangan olahraga, dan kelas ber-AC.' },
            { title: 'Kurikum Terkini', desc: 'Berbasis proyek, kolaborasi, dan literasi digital untuk menyiapkan siswa menghadapi masa depan.' },
            { title: 'Bimbingan Holistik', desc: 'Pembinaan karakter, konseling, dan pengembangan minat bakat secara menyeluruh.' },
          ].map((i) => (
            <div key={i.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-bold text-lg text-slate-900">{i.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tentang
