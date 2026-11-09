import { CONTACT } from '@/lib/site'
import Icon, { WhatsAppGlyph } from '@/components/Icon'
import { PageHero, Bubble } from '@/components/ui'

export const metadata = {
  title: 'Hubungi Kami',
  description: `Hubungi TVET Lipis melalui WhatsApp ${CONTACT.whatsappDisplay}. ${CONTACT.address}.`,
  alternates: { canonical: 'https://tvetlipis.my/hubungi/' },
}

export default function HubungiPage() {
  const cards = [
    { title: 'Program Sepenuh Masa', sub: 'Lepasan SPM', text: 'Saya berminat program diploma sepenuh masa', href: CONTACT.waFullTime, c: 'bg-violet text-white', r: -1 },
    { title: 'Program PPT', sub: 'Golongan Kerja', text: 'Saya berminat Diploma Pra-Sekolah (PPT)', href: CONTACT.waPPT, c: 'bg-coral', r: 1 },
  ]
  return (
    <>
      <PageHero
        crumb="Hubungi"
        title="Hubungi kami"
        lead="Cara paling cepat: WhatsApp. Pilih program dan mesej anda akan diisi secara automatik."
        stickers={<Bubble rotate={-4} className="absolute right-4 top-10 max-w-[240px] text-xl font-semibold">Hai! Nak tanya pasal program?</Bubble>}
      />
      <section className="py-20 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-5">
            {cards.map((c) => (
              <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer"
                className={`group flex items-center gap-5 rounded-card p-6 transition-transform hover:rotate-0 ${c.c}`} style={{ transform: `rotate(${c.r}deg)` }}>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-lime text-ink"><WhatsAppGlyph className="h-7 w-7" /></span>
                <div className="flex-1">
                  <p className="text-sm font-semibold uppercase tracking-wide">{c.sub}</p>
                  <p className="text-2xl font-bold leading-tight">{c.title}</p>
                  <p className="mt-1">“{c.text}”</p>
                </div>
                <Icon name="arrow" className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
            <div className="card">
              {[
                ['phone', 'WhatsApp', CONTACT.whatsappDisplay],
                ['pin', 'Alamat', CONTACT.address],
                ['train', 'Pengangkutan', CONTACT.addressNote],
              ].map(([i, k, v], idx) => (
                <div key={k} className={`flex gap-4 p-5 ${idx ? 'border-t-2 border-cream' : ''}`}>
                  <Icon name={i} className="mt-0.5 h-6 w-6 shrink-0 text-violet" />
                  <div><p className="text-sm text-slate">{k}</p><p className="text-lg font-semibold leading-snug">{v}</p></div>
                </div>
              ))}
              <div className="flex flex-wrap gap-3 border-t-2 border-cream p-5">
                <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="btn-ring px-4 py-2 text-base">Facebook</a>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="btn-ring px-4 py-2 text-base">Instagram</a>
                <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer" className="btn-ring px-4 py-2 text-base">TikTok</a>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-card bg-white">
            <iframe
              title="Peta lokasi TVET Lipis"
              src="https://www.google.com/maps?q=Lipis+Centrepoint,+Kuala+Lipis,+Pahang&output=embed"
              className="h-[420px] w-full lg:h-full lg:min-h-[560px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
