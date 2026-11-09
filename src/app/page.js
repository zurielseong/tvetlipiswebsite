import Link from 'next/link'
import { CONTACT, PPT, PROGRAMS, ABOUT } from '@/lib/site'
import Icon, { WhatsAppGlyph } from '@/components/Icon'
import { SectionHead, Faq, Steps, Starburst, Badge, Bubble, Label } from '@/components/ui'

const QUICK = [
  { title: 'Program Sepenuh Masa', sub: 'Lepasan SPM', text: 'Belia 16–30 tahun. Dibiayai PTPK.', href: '/program/', c: 'bg-violet text-white', r: -2 },
  { title: 'Program PPT', sub: 'Golongan Kerja', text: 'Guru tadika: dapatkan DKM Tahap 4.', href: '/ppt/', c: 'bg-coral text-ink', r: 1.5 },
  { title: 'Semak Kelayakan', sub: 'WhatsApp', text: 'Hantar dokumen, kami semak.', href: CONTACT.waPPT, c: 'bg-sun text-ink', r: -1, external: true },
  { title: 'Lokasi Kami', sub: 'Kuala Lipis', text: 'Lipis Centrepoint, dekat KTM.', href: '/hubungi/', c: 'bg-lime text-ink', r: 2 },
]

const STATS = [
  { value: '5', unit: 'hari', label: 'bersemuka sahaja (2 + 3 hari)' },
  { value: '5', unit: 'CU', label: 'unit kompetensi dinilai' },
  { value: '0', unit: '', label: 'peperiksaan bertulis' },
  { value: '4', unit: 'calon', label: 'minimum untuk mula batch' },
]

const BENEFIT_COLORS = ['bg-violet text-white', 'bg-coral text-ink', 'bg-sun text-ink', 'bg-lime text-ink', 'bg-indigo text-white', 'bg-ink text-white']

function HeroStickers() {
  return (
    <>
      {/* Telefon: pelekat dalam aliran, tidak bertindih teks */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6 py-4 sm:hidden">
        <Starburst color="coral" size={150} rotate={-8} className="text-xl">Diploma<br />Tahap 4!</Starburst>
        <Badge color="violet" size={120} rotate={8} className="text-xl">
          <span className="block text-xs font-normal line-through opacity-90">{PPT.priceWas}</span>{PPT.price}
        </Badge>
        <Label color="lime" rotate={-6}>5 hari je bersemuka</Label>
        <Label color="sun" rotate={5}>Tiada exam bertulis</Label>
      </div>

      {/* Tablet & desktop: kolaj bebas */}
      <div className="relative mx-auto hidden h-[440px] w-full max-w-[460px] sm:block">
        <Starburst color="coral" size={210} rotate={-8} className="absolute left-0 top-2 text-3xl">Diploma<br />Tahap 4!</Starburst>
        <Bubble rotate={4} className="absolute right-0 top-10 max-w-[230px] text-xl font-semibold leading-snug">
          Dah bertahun mengajar? Masa untuk diiktiraf.
        </Bubble>
        <Badge color="violet" size={150} rotate={-6} className="absolute bottom-10 left-10 text-2xl">
          <span className="block text-sm font-normal line-through opacity-90">{PPT.priceWas}</span>{PPT.price}
        </Badge>
        <Label color="lime" rotate={-10} className="absolute bottom-36 right-10 text-xl">5 hari je bersemuka</Label>
        <Label color="sun" rotate={8} className="absolute bottom-6 right-0 text-xl">Tiada exam bertulis</Label>
      </div>
    </>
  )
}

export default function HomePage() {
  return (
    <>
      {/* HERO: kanvas krim + pelekat */}
      <section className="relative overflow-hidden">
        <div className="container-x grid items-center gap-10 pb-16 pt-10 md:pb-24 md:pt-16 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <span className="tag bg-sun">Memanggil semua cikgu tadika</span>
            <h1 className="mt-6 text-6xl font-bold leading-[0.9] sm:text-7xl lg:text-[104px]">
              Pengalaman anda <span className="inline-block -rotate-3 rounded-card bg-violet px-3 text-white">→ Diploma.</span>
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-snug text-slate">
              Dapatkan <strong className="text-ink">DKM Tahap 4 Pengajaran Prasekolah</strong> melalui PPT. Kemahiran anda dinilai secara amali oleh penilai JPK. Tidak perlu belajar semula 2 tahun.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={CONTACT.waPPT} target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-4">
                <WhatsAppGlyph /> Semak kelayakan · {CONTACT.whatsappDisplay}
              </a>
              <Link href="/ppt/" className="btn-ring px-7 py-4">Lihat butiran program</Link>
            </div>
            <p className="mt-4 text-sm text-slate">*Tertakluk semakan kelayakan JPK.</p>
          </div>
          <HeroStickers />
        </div>

        {/* Akses pantas: blok warna seperti pelekat */}
        <div className="container-x grid grid-cols-2 gap-4 pb-20 lg:grid-cols-4">
          {QUICK.map((q) => {
            const inner = (
              <>
                <span className="text-sm font-semibold uppercase tracking-wide opacity-90">{q.sub}</span>
                <h3 className="mt-1 text-2xl font-bold leading-tight md:text-3xl">{q.title}</h3>
                <p className="mt-2 hidden leading-snug sm:block">{q.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-bold">Teruskan <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
              </>
            )
            const cls = `group block rounded-card p-5 transition-transform hover:rotate-0 md:p-7 ${q.c}`
            const style = { transform: `rotate(${q.r}deg)` }
            return q.external ? (
              <a key={q.title} href={q.href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>{inner}</a>
            ) : (
              <Link key={q.title} href={q.href} className={cls} style={style}>{inner}</Link>
            )
          })}
        </div>
      </section>

      {/* APA ITU PPT: blok ungu */}
      <section className="relative overflow-hidden bg-violet py-20 text-white md:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead light eyebrow="Apa itu PPT?" tagColor="bg-sun" title="Kemahiran yang anda sudah ada, diiktiraf dengan Diploma" lead={PPT.whatIs} />
            <Link href="/ppt/" className="btn-ring mt-8">Ketahui lebih lanjut <Icon name="arrow" className="h-5 w-5" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <div key={s.label} className="rounded-card bg-white p-6 text-ink" style={{ transform: `rotate(${[-2, 2, 1.5, -1.5][i]}deg)` }}>
                <p className="text-6xl font-bold leading-none text-indigo">{s.value}<span className="ml-1 text-xl text-coral">{s.unit}</span></p>
                <p className="mt-3 leading-snug text-slate">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KENAPA SEKARANG: blok kuning */}
      <section className="relative overflow-hidden bg-sun py-20 md:py-28">
        <div className="container-x relative">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="Kenapa sekarang?" tagColor="bg-ink" title="KPM tegaskan: guru prasekolah perlu sekurang-kurangnya diploma" />
            <Starburst color="coral" size={150} rotate={12} className="text-xl">KPM<br />tegaskan!</Starburst>
          </div>
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

      {/* KELEBIHAN: krim */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHead center eyebrow="Kenapa pilih kami" title="Direka untuk guru yang sedang bekerja" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PPT.benefits.map((b, i) => (
              <div key={b.title} className="card flex gap-5 p-7">
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${BENEFIT_COLORS[i]}`} style={{ transform: `rotate(${i % 2 ? 8 : -8}deg)` }}><Icon name={b.icon} className="h-7 w-7" /></span>
                <div>
                  <h3 className="text-xl font-bold leading-tight">{b.title}</h3>
                  <p className="mt-1 leading-snug text-slate">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROSES: blok merah */}
      <section className="bg-coral py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHead eyebrow="Bagaimana program berjalan" tagColor="bg-sun" title="6 langkah, 2 sesi bersemuka" />
            <Link href="/ppt/#proses" className="btn-ink self-start md:self-auto">Lihat aliran penuh</Link>
          </div>
          <div className="mt-12"><Steps steps={PPT.steps} /></div>
        </div>
      </section>

      {/* YURAN: krim, kad ungu */}
      <section className="overflow-x-clip py-20 md:py-28">
        <div className="container-x">
          <div className="relative rounded-card bg-indigo p-8 text-white md:p-14 lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-10">
            <div>
              <span className="tag bg-sun">Yuran program</span>
              <h2 className="mt-4 text-4xl font-bold leading-[1.05] md:text-6xl">PPT Diploma Pra-Sekolah</h2>
              <p className="mt-3 text-lg">{PPT.name}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {['2 sesi bersemuka di Kuala Lipis', 'Bimbingan group WhatsApp', 'Penilai PPL dilantik JPK', 'Sijil DKM Tahap 4 oleh JPK'].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-lg"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-ink"><Icon name="check" className="h-4 w-4" /></span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="mt-10 flex flex-col items-start justify-center lg:mt-0">
              <p className="text-lg">Harga biasa <span className="line-through">{PPT.priceWas}</span></p>
              <p className="text-7xl font-bold leading-none text-sun md:text-8xl">{PPT.price}</p>
              <p className="mt-3 text-lg">Batch bermula apabila cukup 4 calon.</p>
              <a href={CONTACT.waPPT} target="_blank" rel="noopener noreferrer" className="btn-cta mt-6">
                <WhatsAppGlyph /> Semak kelayakan
              </a>
              <p className="mt-3 text-sm text-white/85">*Tertakluk semakan kelayakan JPK. PTPK tidak menanggung PPT.</p>
            </div>
            <Starburst color="sun" size={130} rotate={-12} className="absolute -right-3 -top-10 text-lg md:-right-8">Jimat<br />RM700</Starburst>
          </div>
        </div>
      </section>

      {/* SEPENUH MASA: blok hijau */}
      <section className="bg-lime py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHead ink eyebrow="Lepasan SPM · 16–30 tahun" tagColor="bg-ink" title="Program diploma sepenuh masa" lead="2 tahun, 70% amali. Tidak perlu SPM, tiada temu duga. Dibiayai PTPK dengan elaun RM400 sebulan." />
            <Link href="/program/" className="btn-ink self-start md:self-auto">Semua program</Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((p) => (
              <Link key={p.slug} href={`/program/#${p.slug}`} className="card group overflow-hidden transition-transform hover:-rotate-1">
                <div className={`flex h-28 items-end justify-between p-5 ${p.color}`}>
                  <Icon name={p.icon} className="h-11 w-11" />
                  {p.status === 'soon' && <span className="rotate-3 rounded-tag bg-white px-2.5 py-1 text-xs font-bold text-ink">Akan datang</span>}
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold leading-tight">{p.name}</h3>
                  <p className="mt-3 text-sm text-slate">Pengambilan</p>
                  <p className="font-semibold leading-snug">{p.intake}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TENTANG + FAQ: krim */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionHead eyebrow="Tentang kami" title="Hab pendidikan kemahiran di Kuala Lipis" lead={ABOUT.intro} />
            <div className="mt-8 space-y-4">
              {ABOUT.points.map((p, i) => (
                <div key={p.title} className="flex gap-4">
                  <span className={`mt-1 h-4 w-4 shrink-0 rounded-full ${['bg-coral', 'bg-violet', 'bg-lime'][i]}`} />
                  <div>
                    <p className="text-lg font-bold">{p.title}</p>
                    <p className="leading-snug text-slate">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="tag bg-violet !text-white">Soalan lazim</span>
            <h2 className="h2 mb-8">Soalan cikgu tentang PPT</h2>
            <Faq items={PPT.faqs} />
          </div>
        </div>
      </section>
    </>
  )
}
