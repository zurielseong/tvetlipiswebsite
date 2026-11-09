import { CONTACT } from '@/lib/site'
import Icon, { WhatsAppGlyph } from '@/components/Icon'
import { PageHero } from '@/components/ui'

export const metadata = {
  title: 'Hubungi Kami',
  description: `Hubungi TVET Lipis melalui WhatsApp ${CONTACT.whatsappDisplay}. ${CONTACT.address}.`,
  alternates: { canonical: 'https://tvetlipis.my/hubungi/' },
}

export default function HubungiPage() {
  const cards = [
    { icon: 'diploma', title: 'PPT Diploma Pra-Sekolah', text: 'Saya berminat Diploma Pra-Sekolah (PPT)', href: CONTACT.waPPT },
    { icon: 'school', title: 'Program sepenuh masa', text: 'Saya berminat program diploma sepenuh masa', href: CONTACT.waFullTime },
  ]
  return (
    <>
      <PageHero crumb="Hubungi" title="Hubungi kami" lead="Cara paling cepat: WhatsApp. Pilih program dan mesej anda akan diisi secara automatik." />
      <section className="bg-grid py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-5">
            {cards.map((c) => (
              <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" className="card group flex items-center gap-5 p-6 transition-transform hover:-translate-y-1">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-green text-white"><WhatsAppGlyph className="h-7 w-7" /></span>
                <div className="flex-1">
                  <p className="font-bold text-brand-navy">{c.title}</p>
                  <p className="text-sm text-slate-500">“{c.text}”</p>
                </div>
                <Icon name="arrow" className="h-5 w-5 text-brand-red transition-transform group-hover:translate-x-1" />
              </a>
            ))}
            <div className="card divide-y divide-slate-200">
              {[
                ['phone', 'WhatsApp', CONTACT.whatsappDisplay],
                ['pin', 'Alamat', CONTACT.address],
                ['train', 'Pengangkutan', CONTACT.addressNote],
              ].map(([i, k, v]) => (
                <div key={k} className="flex gap-4 p-5">
                  <Icon name={i} className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                  <div><p className="text-xs text-slate-500">{k}</p><p className="font-medium text-slate-800">{v}</p></div>
                </div>
              ))}
              <div className="flex flex-wrap gap-2 p-5">
                <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="btn-outline px-4 py-2 text-sm">Facebook “TVET Lipis”</a>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="btn-outline px-4 py-2 text-sm">Instagram @tvet_lipis</a>
                <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer" className="btn-outline px-4 py-2 text-sm">TikTok @tvet_lipis</a>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden">
            <iframe
              title="Peta lokasi TVET Lipis"
              src="https://www.google.com/maps?q=Lipis+Centrepoint,+Kuala+Lipis,+Pahang&output=embed"
              className="h-[420px] w-full lg:h-full lg:min-h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
