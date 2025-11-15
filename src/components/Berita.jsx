import { useEffect, useState } from 'react'

function Berita() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'PPDB 2025 Telah Dibuka', date: '12 Nov 2025', excerpt: 'Segera daftarkan putra-putri Anda melalui jalur reguler dan prestasi.' },
    { id: 2, title: 'Workshop Guru Inovatif', date: '5 Nov 2025', excerpt: 'Pelatihan metode pembelajaran berbasis proyek untuk peningkatan kompetensi.' },
    { id: 3, title: 'Festival Seni Siswa', date: '28 Okt 2025', excerpt: 'Ajang unjuk bakat di bidang musik, tari, dan teater tingkat kota.' },
  ])

  useEffect(() => {
    // Placeholder for future backend fetch
  }, [])

  return (
    <section id="berita" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Berita Terbaru</h2>
          <p className="mt-2 text-slate-600">Informasi dan aktivitas terbaru dari sekolah</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.id} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="h-36 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200" />
              <div className="mt-4 text-xs text-slate-500">{p.date}</div>
              <h3 className="mt-1 font-bold text-lg text-slate-900">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.excerpt}</p>
              <a href="#" className="mt-3 inline-block text-sm font-semibold text-blue-600">Baca selengkapnya →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Berita
