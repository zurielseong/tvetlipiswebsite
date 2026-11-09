import Link from 'next/link'
import { CONTACT, PPT, PROGRAMS, ABOUT } from '@/lib/site'
import Icon, { WhatsAppGlyph } from '@/components/Icon'
import { SectionHead, Faq, Steps, Deco, Wave } from '@/components/ui'

const QUICK = [
  { icon: 'diploma', title: 'PPT Diploma Pra-Sekolah', text: 'Guru tadika yang bekerja: dapatkan DKM Tahap 4.', href: '/ppt/', accent: 'bg-brand-red' },
  { icon: 'school', title: 'Program Sepenuh Masa', text: 'Lepasan sekolah 16–30 tahun. Dibiayai PTPK.', href: '/program/', accent: 'bg-brand-navy' },
  { icon: 'doc', title: 'Semak Kelayakan', text: 'Hantar dokumen, kami semak kelayakan anda.', href: CONTACT.waPPT, accent: 'bg-brand-green', external: true },
  { icon: 'pin', title: 'Lokasi Kami', text: 'Lipis Centrepoint, berdekatan KTM Kuala Lipis.', href: '/hubungi/', accent: 'bg-brand-yellow' },
]

const STATS = [
  { value: '5', unit: 'hari', label: 'bersemuka sahaja (2 + 3 hari)' },
  { value: '5', unit: 'CU', label: 'unit kompetensi dinilai' },
  { value: '0', unit: '', label: 'peperiksaan bertulis' },
  { value: '4', unit: 'calon', label: 'minimum untuk mula batch' },
]

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-4 rounded-[2rem] bg-brand-yellow rotate-3 sm:-inset-6" />
      <div className="relative rounded-[1.5rem] bg-white p-6 pb-12 shadow-2xl ring-1 ring-slate-200 sm:p-8 sm:pb-14">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-brand-sky px-3 py-1 text-[11px] font-semibold text-brand-navy">Dikeluarkan oleh JPK</span>
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[.2em] text-slate-400">Diploma Kemahiran Malaysia</p>
        <p className="mt-1 text-2xl font-extrabold text-brand-navy">DKM Tahap 4</p>
        <p className="text-sm font-medium text-slate-600">Pengajaran Prasekolah</p>
        <div className="my-6 h-px bg-[repeating-linear-gradient(90deg,#cbd5e1_0_6px,transparent_6px_12px)]" />
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-slate-50 p-3"><p className="text-[11px] text-slate-500">Kod NOSS</p><p className="font-semibold text-brand-navy">P851-002-4:2025</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><p className="text-[11px] text-slate-500">Kaedah</p><p className="font-semibold text-brand-navy">PPT · Amali</p></div>
        </div>
      </div>
      <div className="absolute -bottom-8 left-6 rounded-2xl bg-brand-red px-4 py-3 text-white shadow-xl sm:-left-10">
        <p className="text-[11px] text-white/80 line-through">{PPT.priceWas}</p>
        <p className="text-xl font-extrabold leading-none">{PPT.price}</p>
      </div>
      <div className="absolute -right-2 -top-5 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-xl ring-1 ring-slate-200 sm:-right-8">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-white"><WhatsAppGlyph className="h-4 w-4" /></span>
        <span className="text-xs font-semibold text-brand-navy">Bimbingan<br />group WhatsApp</span>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero relative overflow-hidden">
        <Deco />
        <div className="container-x relative grid items-center gap-14 pb-28 pt-14 md:pt-20 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20">
              <span className="h-2 w-2 rounded-full bg-brand-yellow" /> Memanggil semua cikgu tadika
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Pengalaman anda <span className="text-brand-yellow">→</span> Diploma.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Dah bertahun mengajar di tadika tetapi belum ada diploma? Dapatkan <strong className="text-white">DKM Tahap 4 Pengajaran Prasekolah</strong> melalui PPT:
              kemahiran anda dinilai secara amali oleh penilai JPK. Tidak perlu belajar semula 2 tahun.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CONTACT.waPPT} target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
                <WhatsAppGlyph /> Semak kelayakan · WhatsApp {CONTACT.whatsappDisplay}
              </a>
              <Link href="/ppt/" className="btn-ghost px-7 py-3.5">Lihat butiran program</Link>
            </div>
            <p className="mt-4 text-xs text-white/55">*Tertakluk semakan kelayakan JPK.</p>
          </div>
          <HeroVisual />
        </div>
        <Wave fill="#FFFBEF" className="relative -mb-px" />
      </section>

      {/* QUICK ACCESS (bertindih dengan hero) */}
      <section className="relative z-10 -mt-24 bg-[linear-gradient(to_bottom,transparent_6rem,#FFFBEF_6rem)] md:-mt-28 md:bg-[linear-gradient(to_bottom,transparent_7rem,#FFFBEF_7rem)]">
        <div className="container-x grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {QUICK.map((q) => {
            const inner = (
              <>
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${q.accent} ${q.accent === 'bg-brand-yellow' ? '!text-brand-navyink' : ''}`}>
                  <Icon name={q.icon} />
                </span>
                <h3 className="mt-4 text-sm font-bold text-brand-navy sm:text-base">{q.title}</h3>
                <p className="mt-1 hidden text-sm text-slate-600 sm:block">{q.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                  Teruskan <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </>
            )
            const cls = 'group card block p-4 transition-transform hover:-translate-y-1 sm:p-6'
            return q.external ? (
              <a key={q.title} href={q.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
            ) : (
              <Link key={q.title} href={q.href} className={cls}>{inner}</Link>
            )
          })}
        </div>
      </section>

      {/* APA ITU PPT */}
      <section className="bg-sunny py-20 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Apa itu PPT?" title="Kemahiran yang anda sudah ada, diiktiraf dengan Diploma" lead={PPT.whatIs} />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/ppt/" className="btn-navy">Ketahui lebih lanjut <Icon name="arrow" className="h-4 w-4" /></Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="card p-6">
                <p className="text-4xl font-extrabold text-brand-navy">{s.value}<span className="ml-1 text-base font-semibold text-brand-red">{s.unit}</span></p>
                <p className="mt-2 text-sm text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KENAPA SEKARANG */}
      <section className="bg-sunshine relative overflow-hidden py-20 md:py-24">
        <Deco variant="dark" />
        <div className="container-x relative">
          <SectionHead eyebrow="Kenapa sekarang?" title="KPM tegaskan: guru prasekolah perlu sekurang-kurangnya diploma" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PPT.whyNow.map((w, i) => (
              <div key={w.stat} className="rounded-3xl bg-white p-7 shadow-xl shadow-[#B38600]/15">
                <p className={`text-3xl font-extrabold ${['text-brand-red', 'text-brand-navy', 'text-[#0B5BC9]'][i]}`}>{w.stat}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KELEBIHAN */}
      <section className="py-20 md:py-24">
        <div className="container-x">
          <SectionHead center eyebrow="Kenapa pilih kami" title="Direka untuk guru yang sedang bekerja" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PPT.benefits.map((b) => (
              <div key={b.title} className="card flex gap-4 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-sky text-brand-navy"><Icon name={b.icon} /></span>
                <div>
                  <h3 className="font-bold text-brand-navy">{b.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROSES */}
      <section className="bg-sky py-20 md:py-24">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHead eyebrow="Bagaimana program berjalan" title="6 langkah, 2 sesi bersemuka" />
            <Link href="/ppt/#proses" className="btn-outline self-start md:self-auto">Lihat aliran penuh</Link>
          </div>
          <div className="mt-12"><Steps steps={PPT.steps} /></div>
        </div>
      </section>

      {/* YURAN */}
      <section className="py-20 md:py-24">
        <div className="container-x">
          <div className="bg-hero relative overflow-hidden rounded-[2rem] shadow-card lg:grid lg:grid-cols-[1.2fr_1fr]">
            <div className="relative p-8 md:p-12">
              <div className="eyebrow !text-brand-yellow before:!bg-brand-yellow">Yuran program</div>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">PPT Diploma Pra-Sekolah</h2>
              <p className="mt-2 text-white/70">{PPT.name}</p>
              <ul className="mt-6 grid gap-2 text-sm text-white/85 sm:grid-cols-2">
                {['2 sesi bersemuka di Kuala Lipis', 'Bimbingan group WhatsApp', 'Penilai PPL dilantik JPK', 'Sijil DKM Tahap 4 oleh JPK'].map((t) => (
                  <li key={t} className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-brand-yellow" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="relative flex flex-col justify-center bg-white/10 p-8 backdrop-blur-sm md:p-12">
              <p className="text-sm text-white/60">Harga biasa <span className="line-through">{PPT.priceWas}</span></p>
              <p className="mt-1 text-5xl font-extrabold text-white md:text-6xl">{PPT.price}</p>
              <p className="mt-2 text-sm text-white/60">Batch bermula apabila cukup 4 calon.</p>
              <a href={CONTACT.waPPT} target="_blank" rel="noopener noreferrer" className="btn-cta mt-6 w-full sm:w-auto">
                <WhatsAppGlyph /> Semak kelayakan
              </a>
              <p className="mt-3 text-xs text-white/50">*Tertakluk semakan kelayakan JPK. PTPK tidak menanggung PPT.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEPENUH MASA */}
      <section className="bg-blush py-20 md:py-24">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHead eyebrow="Lepasan SPM / belia 16–30 tahun" title="Program diploma sepenuh masa" lead="2 tahun, 70% amali. Tidak perlu SPM, tiada temu duga. Dibiayai PTPK dengan elaun RM400 sebulan." />
            <Link href="/program/" className="btn-outline self-start md:self-auto">Semua program</Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((p) => (
              <Link key={p.slug} href={`/program/#${p.slug}`} className="card group overflow-hidden transition-transform hover:-translate-y-1">
                <div className={`flex h-28 items-end justify-between bg-gradient-to-br p-5 text-white ${p.color}`}>
                  <Icon name={p.icon} className="h-10 w-10" />
                  {p.status === 'soon' && <span className="rounded-full bg-white/25 px-2.5 py-1 text-[11px] font-semibold">Akan datang</span>}
                </div>
                <div className="p-5">
                  <h3 className="font-bold leading-snug text-brand-navy">{p.name}</h3>
                  <p className="mt-2 text-xs text-slate-500">Pengambilan</p>
                  <p className="text-sm font-medium text-slate-700">{p.intake}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TENTANG + FAQ */}
      <section className="py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionHead eyebrow="Tentang kami" title="Hab pendidikan kemahiran di Kuala Lipis" lead={ABOUT.intro} />
            <div className="mt-8 space-y-4">
              {ABOUT.points.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <span className="mt-1 h-10 w-1 shrink-0 rounded-full bg-brand-red" />
                  <div>
                    <p className="font-semibold text-brand-navy">{p.title}</p>
                    <p className="text-sm text-slate-600">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="eyebrow">Soalan lazim</div>
            <h2 className="h2 mb-8">Soalan cikgu tentang PPT</h2>
            <Faq items={PPT.faqs} />
          </div>
        </div>
      </section>
    </>
  )
}
