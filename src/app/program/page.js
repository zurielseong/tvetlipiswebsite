import { CONTACT, FULLTIME, PROGRAMS } from '@/lib/site'
import Icon, { WhatsAppGlyph } from '@/components/Icon'
import { PageHero, SectionHead, KeyTable, CheckList, Deco } from '@/components/ui'

export const metadata = {
  title: 'Program Diploma Sepenuh Masa (Lepasan SPM)',
  description:
    'Program DKM sepenuh masa 2 tahun di TVET Lipis untuk belia 16–30 tahun. Tidak perlu SPM, tiada temu duga. Dibiayai PTPK, elaun RM400 sebulan. PAKK, Pra-Sekolah, Multimedia Kreatif.',
  alternates: { canonical: 'https://tvetlipis.my/program/' },
}

export default function ProgramPage() {
  return (
    <>
      <PageHero
        crumb="Program Sepenuh Masa"
        title={<>Program diploma <span className="text-brand-yellow">sepenuh masa</span></>}
        lead="Untuk lepasan sekolah / belia umur 16–30 tahun, warganegara Malaysia. Tidak perlu SPM. Tiada temu duga. Dibiayai PTPK."
      >
        <a href={CONTACT.waFullTime} target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
          <WhatsAppGlyph /> WhatsApp {CONTACT.whatsappDisplay}
        </a>
        <a href={CONTACT.upTvet} target="_blank" rel="noopener noreferrer" className="btn-ghost px-7 py-3.5">Mohon melalui UP_TVET</a>
      </PageHero>

      {/* Programs */}
      <section className="bg-sunny py-16 md:py-20">
        <div className="container-x">
          <SectionHead eyebrow="Pilih bidang anda" title="Program ditawarkan" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {PROGRAMS.map((p) => (
              <article key={p.slug} id={p.slug} className="card scroll-mt-24 overflow-hidden">
                <div className={`flex items-center gap-4 bg-gradient-to-br p-6 text-white ${p.color}`}>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20"><Icon name={p.icon} className="h-8 w-8" /></span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Diploma Kemahiran Malaysia</p>
                    <h3 className="text-xl font-bold leading-snug">{p.name}</h3>
                  </div>
                  {p.status === 'soon' && <span className="ml-auto rounded-full bg-white/25 px-3 py-1 text-xs font-semibold">Akan datang</span>}
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs text-slate-500">Yuran</p>
                    <p className="font-bold text-brand-navy">{p.fee}</p>
                    <p className="text-xs text-slate-500">{p.feeNote}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Pengambilan</p>
                    <p className="font-semibold text-slate-800">{p.intake}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-xs text-slate-500">Kerjaya</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.careers.map((c) => <span key={c} className="rounded-full bg-brand-sky px-3 py-1 text-xs font-medium text-brand-navy">{c}</span>)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ringkasan & kos */}
      <section className="py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-bold text-brand-navy">Ringkasan program</h2>
            <KeyTable rows={FULLTIME.summary} />
          </div>
          <div>
            <h2 className="mb-4 text-xl font-bold text-brand-navy">Kos sendiri</h2>
            <KeyTable rows={FULLTIME.costs} />
            <h2 className="mb-4 mt-10 text-xl font-bold text-brand-navy">Bantuan lain</h2>
            <div className="card p-6"><CheckList items={FULLTIME.aid} /></div>
          </div>
        </div>
      </section>

      {/* Asrama */}
      <section className="bg-hero relative overflow-hidden py-16 md:py-20">
        <Deco />
        <div className="container-x relative grid items-center gap-10 lg:grid-cols-2">
          <SectionHead light eyebrow="Asrama" title="Tinggal dalam bangunan yang sama dengan kolej" lead="RM150 sebulan + utiliti (wajib kecuali penduduk Lipis). Percuma untuk pelajar Multimedia." />
          <ul className="grid gap-3 sm:grid-cols-2">
            {FULLTIME.hostel.map((h) => (
              <li key={h} className="flex items-center gap-3 rounded-2xl bg-white/15 p-4 font-medium text-white backdrop-blur-sm">
                <Icon name="shield" className="h-5 w-5 shrink-0 text-brand-yellow" />{h}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
