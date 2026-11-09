import { CONTACT, FULLTIME, PROGRAMS } from '@/lib/site'
import Icon, { WhatsAppGlyph } from '@/components/Icon'
import { PageHero, SectionHead, KeyTable, CheckList, Starburst, Badge } from '@/components/ui'

export const metadata = {
  title: 'Program Sepenuh Masa (Lepasan SPM)',
  description:
    'Program DKM sepenuh masa 2 tahun di TVET Lipis untuk belia 16–30 tahun. Tidak perlu SPM, tiada temu duga. Dibiayai PTPK, elaun RM400 sebulan. PAKK, Pra-Sekolah, Multimedia Kreatif.',
  alternates: { canonical: 'https://tvetlipis.my/program/' },
}

export default function ProgramPage() {
  return (
    <>
      <PageHero
        crumb="Program Sepenuh Masa (Lepasan SPM)"
        title={<>Program diploma <span className="text-sun">sepenuh masa</span></>}
        lead="Untuk lepasan sekolah / belia umur 16–30 tahun, warganegara Malaysia. Tidak perlu SPM. Tiada temu duga. Dibiayai PTPK."
        stickers={
          <>
            <Starburst color="coral" size={190} rotate={10} className="absolute right-0 top-0 text-2xl">Tak perlu<br />SPM!</Starburst>
            <Badge color="sun" size={140} rotate={-8} className="absolute bottom-0 left-4 text-xl">Elaun<br />RM400/bln</Badge>
          </>
        }
      >
        <a href={CONTACT.waFullTime} target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-4">
          <WhatsAppGlyph /> WhatsApp {CONTACT.whatsappDisplay}
        </a>
        <a href={CONTACT.upTvet} target="_blank" rel="noopener noreferrer" className="btn-ring px-7 py-4">Mohon melalui UP_TVET</a>
      </PageHero>

      {/* Program */}
      <section className="py-20 md:py-24">
        <div className="container-x">
          <SectionHead eyebrow="Pilih bidang anda" title="Program ditawarkan" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PROGRAMS.map((p, i) => (
              <article key={p.slug} id={p.slug} className="card scroll-mt-28 overflow-hidden" style={{ transform: `rotate(${[-0.8, 0.8, 0.6, -0.6][i]}deg)` }}>
                <div className={`flex items-center gap-4 p-6 ${p.color}`}>
                  <Icon name={p.icon} className="h-12 w-12 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide opacity-90">Diploma Kemahiran Malaysia</p>
                    <h3 className="text-2xl font-bold leading-tight">{p.name}</h3>
                  </div>
                  {p.status === 'soon' && <span className="ml-auto rotate-3 rounded-tag bg-white px-3 py-1 text-sm font-bold text-ink">Akan datang</span>}
                </div>
                <div className="grid gap-5 p-6 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-slate">Yuran</p>
                    <p className="text-2xl font-bold">{p.fee}</p>
                    <p className="text-sm text-slate">{p.feeNote}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate">Pengambilan</p>
                    <p className="text-lg font-semibold leading-snug">{p.intake}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-sm text-slate">Kerjaya</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.careers.map((c) => <span key={c} className="rounded-full bg-cream px-3 py-1 font-medium">{c}</span>)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ringkasan & kos */}
      <section className="bg-sun py-20 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-5 text-3xl font-bold">Ringkasan program</h2>
            <KeyTable rows={FULLTIME.summary} />
          </div>
          <div>
            <h2 className="mb-5 text-3xl font-bold">Kos sendiri</h2>
            <KeyTable rows={FULLTIME.costs} />
            <h2 className="mb-5 mt-10 text-3xl font-bold">Bantuan lain</h2>
            <div className="card p-6"><CheckList items={FULLTIME.aid} /></div>
          </div>
        </div>
      </section>

      {/* Asrama */}
      <section className="bg-coral py-20 md:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <SectionHead ink eyebrow="Asrama" tagColor="bg-sun" title="Tinggal dalam bangunan yang sama dengan kolej" lead="RM150 sebulan + utiliti (wajib kecuali penduduk Lipis). Percuma untuk pelajar Multimedia." />
          <ul className="grid gap-3 sm:grid-cols-2">
            {FULLTIME.hostel.map((h, i) => (
              <li key={h} className="flex items-center gap-3 rounded-card bg-white p-5 text-lg font-semibold" style={{ transform: `rotate(${i % 2 ? 1 : -1}deg)` }}>
                <Icon name="shield" className="h-6 w-6 shrink-0 text-violet" />{h}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
