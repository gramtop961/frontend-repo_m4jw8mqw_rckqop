import { useState } from 'react'

function Kontak() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulasi submit
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 800)
  }

  return (
    <section id="kontak" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Hubungi Kami</h2>
          <p className="mt-2 text-slate-600">Ada pertanyaan? Silakan kirim pesan melalui formulir di bawah ini.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-600">Nama Lengkap</label>
              <input required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input type="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label className="text-sm text-slate-600">Pesan</label>
            <textarea required rows={5} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-500">Jl. Merdeka No. 123, Kota Harapan • (021) 123-4567</div>
            <button disabled={loading} className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 text-sm font-semibold shadow hover:opacity-95 disabled:opacity-60">
              {loading ? 'Mengirim...' : sent ? 'Terkirim ✓' : 'Kirim Pesan'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Kontak
