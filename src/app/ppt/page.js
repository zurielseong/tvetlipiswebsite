import { CONTACT, PPT } from '@/lib/site'
import Icon, { WhatsAppGlyph } from '@/components/Icon'
import { PageHero, SectionHead, Faq, KeyTable, CheckList, Steps, Starburst, Badge, Label } from '@/components/ui'

export const metadata = {
  title: 'Program PPT (Golongan Kerja): Diploma Pra-Sekolah DKM Tahap 4',
  description:
    'DKM Tahap 4 Pengajaran Prasekolah melalui PPT (NOSS P851-002-4:2025). Untuk guru tadika yang bekerja: 5 hari bersemuka, bimbingan WhatsApp, penilaian amali oleh PPL JPK. RM3,800.',
  alternates: { canonical: 'https://tvetlipis.my/ppt/' },
}

export default function PPTPage() {
  return (
    <>
      <PageHero
        crumb="Program PPT (Golongan Kerja)"
        title={<>PPT Diploma Pra-Sekolah <span className="text-sun">DKM Tahap 4</span></>}
        lead="Untuk guru tadika / prasekolah yang sedang bekerja tetapi belum ada diploma. Kemahiran anda dinilai secara amali oleh Pegawai Penilai (PPL) yang dilantik JPK."
        stickers={
          <>
            <Starburst color="sun" size={190} rotate={-10} className="absolute left-0 top-0 text-2xl">Golongan<br />kerja!</Starburst>
            <Badge color="lime" size={130} rotate={8} className="absolute bottom-0 right-4 text-2xl">{PPT.price}</Badge>
          </>
        }
      >
        <a href={CONTACT.waPPT} target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-4">
          <WhatsAppGlyph /> Semak kelayakan · {CONTACT.whatsappDisplay}
        </a>
        <a href="#yuran" className="btn-ring px-7 py-4">Yuran {PPT.price}</a>
      </PageHero>

      {/* Ringkasan */}
      <section className="py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHead eyebrow="Apa itu PPT?" title="Pengiktirafan Pencapaian Terdahulu" lead={PPT.whatIs} />
            <div className="mt-8 -rotate-1 rounded-card bg-sun p-6">
              <p className="text-lg font-bold">Bentuk penilaian</p>
              <p className="mt-1 text-lg leading-snug">{PPT.assessment}</p>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Ringkasan program</h2>
            <KeyTable rows={[...PPT.summary, ['Yuran', `${PPT.price} (harga biasa ${PPT.priceWas})`]]} />
          </div>
        </div>
      </section>

      {/* Kenapa sekarang */}
      <section className="bg-sun py-20 md:py-24">
        <div className="container-x">
          <SectionHead eyebrow="Kenapa sekarang?" tagColor="bg-ink" title="KPM tegaskan semula keperluan diploma untuk guru prasekolah" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PPT.whyNow.map((w, i) => (
              <div key={w.stat} className="rounded-card bg-white p-7" style={{ transform: `rotate(${[-1.5, 1, -1][i]}deg)` }}>
                <p className={`text-4xl font-bold ${['text-coral', 'text-indigo', 'text-violet'][i]}`}>{w.stat}</p>
                <p className="mt-3 text-lg leading-snug text-slate">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proses */}
      <section id="proses" className="scroll-mt-24 bg-coral py-20 md:py-24">
        <div className="container-x">
          <SectionHead ink eyebrow="Aliran program" tagColor="bg-sun" title="Bagaimana program berjalan" lead="Hanya 5 hari bersemuka di Kuala Lipis. Selebihnya dari rumah, dengan bimbingan group WhatsApp." />
          <div className="mt-12"><Steps steps={PPT.steps} /></div>
        </div>
      </section>

      {/* Unit kompetensi */}
      <section className="py-20 md:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="NOSS P851-002-4:2025" title="Unit Kompetensi yang dinilai" lead="Semuanya kerja yang anda sudah buat setiap hari di tadika." />
            <Label color="violet" rotate={-8}>Tiada exam bertulis</Label>
          </div>
          <div className="mt-12 space-y-3">
            {PPT.units.map(([cu, title, act], i) => (
              <div key={cu} className="card grid gap-3 p-6 md:grid-cols-[90px_1fr_1.3fr] md:items-center md:gap-6">
                <span className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold ${['bg-violet text-white', 'bg-coral', 'bg-sun', 'bg-lime', 'bg-indigo text-white'][i]}`} style={{ transform: `rotate(${i % 2 ? 6 : -6}deg)` }}>{cu}</span>
                <p className="text-xl font-bold leading-tight">{title}</p>
                <p className="leading-snug text-slate">{act}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dokumen + kelebihan */}
      <section className="bg-violet py-20 md:py-24">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div className="-rotate-1 rounded-card bg-white p-8 md:p-10">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sun"><Icon name="doc" /></span>
              <h2 className="text-3xl font-bold">Dokumen diperlukan</h2>
            </div>
            <CheckList className="mt-6" items={PPT.documents} />
          </div>
          <div className="rotate-1 rounded-card bg-white p-8 md:p-10">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-coral"><Icon name="badge" /></span>
              <h2 className="text-3xl font-bold">Kenapa pilih kami</h2>
            </div>
            <CheckList className="mt-6" items={PPT.benefits.map((b) => b.title)} />
          </div>
        </div>
      </section>

      {/* Yuran */}
      <section id="yuran" className="scroll-mt-24 overflow-x-clip py-20 md:py-24">
        <div className="container-x">
          <div className="relative mx-auto max-w-xl rounded-card bg-indigo p-7 text-center text-white sm:p-10">
            <Starburst color="coral" size={120} rotate={14} className="absolute -right-3 -top-10 text-lg sm:-right-6">Jimat<br />RM700</Starburst>
            <p className="text-lg">Yuran PPT Diploma Pra-Sekolah</p>
            <p className="mt-2 text-lg line-through opacity-90">{PPT.priceWas}</p>
            <p className="text-6xl font-bold leading-none text-sun sm:text-8xl">{PPT.price}</p>
            <p className="mt-5 text-lg">Saiz batch minimum 4 calon. Batch bermula apabila cukup calon.</p>
            <a href={CONTACT.waPPT} target="_blank" rel="noopener noreferrer" className="btn-cta mt-7 w-full">
              <WhatsAppGlyph /> Semak kelayakan · {CONTACT.whatsappDisplay}
            </a>
            <p className="mt-3 text-sm text-white/85">*Tertakluk semakan kelayakan JPK.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sun py-20 md:py-24">
        <div className="container-x max-w-3xl">
          <SectionHead center eyebrow="Soalan lazim" tagColor="bg-ink" title="Soalan cikgu tentang PPT" />
          <div className="mt-10"><Faq items={PPT.faqs} /></div>
        </div>
      </section>
    </>
  )
}
