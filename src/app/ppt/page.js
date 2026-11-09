import { CONTACT, PPT } from '@/lib/site'
import Icon, { WhatsAppGlyph } from '@/components/Icon'
import { PageHero, SectionHead, Faq, KeyTable, CheckList, Steps } from '@/components/ui'

export const metadata = {
  title: 'PPT Diploma Pra-Sekolah (DKM Tahap 4 Pengajaran Prasekolah)',
  description:
    'DKM Tahap 4 Pengajaran Prasekolah melalui PPT (NOSS P851-002-4:2025). Untuk guru tadika yang bekerja: 5 hari bersemuka, bimbingan WhatsApp, penilaian amali oleh PPL JPK. RM3,800.',
  alternates: { canonical: 'https://tvetlipis.my/ppt/' },
}

export default function PPTPage() {
  return (
    <>
      <PageHero
        crumb="PPT Diploma Pra-Sekolah"
        title={<>PPT Diploma Pra-Sekolah <span className="text-brand-yellow">DKM Tahap 4</span></>}
        lead="Untuk guru tadika / prasekolah yang sedang bekerja tetapi belum ada diploma. Kemahiran anda dinilai secara amali oleh Pegawai Penilai (PPL) yang dilantik JPK."
      >
        <a href={CONTACT.waPPT} target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
          <WhatsAppGlyph /> Semak kelayakan · WhatsApp {CONTACT.whatsappDisplay}
        </a>
        <a href="#yuran" className="btn-ghost px-7 py-3.5">Yuran {PPT.price}</a>
      </PageHero>

      {/* Ringkasan */}
      <section className="bg-grid py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHead eyebrow="Apa itu PPT?" title="Pengiktirafan Pencapaian Terdahulu" lead={PPT.whatIs} />
            <div className="mt-6 rounded-2xl border-l-4 border-brand-yellow bg-white p-5 shadow-card">
              <p className="text-sm font-semibold text-brand-navy">Bentuk penilaian</p>
              <p className="mt-1 text-sm text-slate-600">{PPT.assessment}</p>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-bold text-brand-navy">Ringkasan program</h2>
            <KeyTable rows={[...PPT.summary, ['Yuran', `${PPT.price} (harga biasa ${PPT.priceWas})`]]} />
          </div>
        </div>
      </section>

      {/* Kenapa sekarang */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <SectionHead eyebrow="Kenapa sekarang?" title="KPM tegaskan semula keperluan diploma untuk guru prasekolah" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {PPT.whyNow.map((w) => (
              <div key={w.stat} className="card p-6">
                <p className="text-2xl font-extrabold text-brand-red">{w.stat}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proses */}
      <section id="proses" className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-16 md:py-20">
        <div className="container-x">
          <SectionHead eyebrow="Aliran program" title="Bagaimana program berjalan" lead="Hanya 5 hari bersemuka di Kuala Lipis. Selebihnya dari rumah, dengan bimbingan group WhatsApp." />
          <div className="mt-10"><Steps steps={PPT.steps} /></div>
        </div>
      </section>

      {/* Unit kompetensi */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <SectionHead eyebrow="NOSS P851-002-4:2025" title="Unit Kompetensi yang dinilai" lead="Semuanya kerja yang anda sudah buat setiap hari di tadika." />
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 shadow-card">
            <table className="w-full text-left text-sm">
              <thead className="hidden bg-brand-navy text-white md:table-header-group">
                <tr><th className="px-5 py-3.5 font-semibold">CU</th><th className="px-5 py-3.5 font-semibold">Tajuk</th><th className="px-5 py-3.5 font-semibold">Aktiviti kerja</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {PPT.units.map(([cu, title, act]) => (
                  <tr key={cu} className="block p-5 md:table-row md:p-0">
                    <td className="block md:table-cell md:px-5 md:py-4"><span className="inline-flex rounded-lg bg-brand-red px-2.5 py-1 text-xs font-bold text-white">{cu}</span></td>
                    <td className="mt-2 block font-semibold text-brand-navy md:mt-0 md:table-cell md:px-5 md:py-4">{title}</td>
                    <td className="mt-1 block text-slate-600 md:mt-0 md:table-cell md:px-5 md:py-4">{act}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Dokumen + kelebihan */}
      <section className="bg-grid border-y border-slate-200 py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div className="card p-7 md:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-white"><Icon name="doc" /></span>
              <h2 className="text-xl font-bold text-brand-navy">Dokumen diperlukan</h2>
            </div>
            <CheckList className="mt-6" items={PPT.documents} />
          </div>
          <div className="card p-7 md:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red text-white"><Icon name="badge" /></span>
              <h2 className="text-xl font-bold text-brand-navy">Kenapa pilih kami</h2>
            </div>
            <CheckList className="mt-6" items={PPT.benefits.map((b) => b.title)} />
          </div>
        </div>
      </section>

      {/* Yuran */}
      <section id="yuran" className="scroll-mt-24 py-16 md:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-xl overflow-hidden rounded-3xl border border-slate-200 bg-white text-center shadow-card">
            <div className="bg-brand-navy px-8 py-8 text-white">
              <p className="text-sm text-white/70">Yuran PPT Diploma Pra-Sekolah</p>
              <p className="mt-2 text-sm text-white/60 line-through">{PPT.priceWas}</p>
              <p className="text-6xl font-extrabold">{PPT.price}</p>
            </div>
            <div className="p-8">
              <p className="text-sm text-slate-600">Saiz batch minimum 4 calon. Batch bermula apabila cukup calon.</p>
              <a href={CONTACT.waPPT} target="_blank" rel="noopener noreferrer" className="btn-cta mt-6 w-full">
                <WhatsAppGlyph /> Semak kelayakan · WhatsApp {CONTACT.whatsappDisplay}
              </a>
              <p className="mt-3 text-xs text-slate-500">*Tertakluk semakan kelayakan JPK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container-x max-w-3xl">
          <SectionHead center eyebrow="Soalan lazim" title="Soalan cikgu tentang PPT" />
          <div className="mt-10"><Faq items={PPT.faqs} /></div>
        </div>
      </section>
    </>
  )
}
