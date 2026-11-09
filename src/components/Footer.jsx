import Link from 'next/link'
import { CONTACT, NAV } from '@/lib/site'
import Icon, { WhatsAppGlyph } from './Icon'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-brand-navyink text-white/75">
      {/* CTA band */}
      <div className="bg-hero relative overflow-hidden">
        <div className="container-x relative flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-white">Pengalaman anda <span className="text-brand-yellow">→</span> Diploma.</p>
            <p className="mt-1 text-white/70">Semak kelayakan PPT Diploma Pra-Sekolah anda hari ini.</p>
          </div>
          <a href={CONTACT.waPPT} target="_blank" rel="noopener noreferrer" className="btn-cta px-7 py-3.5">
            <WhatsAppGlyph /> Semak kelayakan · WhatsApp {CONTACT.whatsappDisplay}
          </a>
        </div>
      </div>

      <div className="container-x grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="rounded-full ring-2 ring-white/20"><Logo /></span>
            <div>
              <div className="font-bold text-white">TVET Lipis</div>
              <div className="text-xs text-brand-yellow">Hab pendidikan kemahiran · Kuala Lipis</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed">
            Mengurus program TVET bagi Kolej Islam Antarabangsa (Kolej UIA) dan Akademi USIM. Pusat Penilaian Amali (PPA-PPT) bertauliah
            Jabatan Pembangunan Kemahiran (JPK). DKM dan SKM dikeluarkan oleh JPK, Kementerian Sumber Manusia.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              ['FB', CONTACT.facebook, 'Facebook TVET Lipis'],
              ['IG', CONTACT.instagram, 'Instagram @tvet_lipis'],
              ['TT', CONTACT.tiktok, 'TikTok @tvet_lipis'],
            ].map(([t, href, label]) => (
              <a key={t} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white hover:bg-brand-yellow hover:text-brand-navyink transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Pautan</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-brand-yellow">{l.label}{l.sub ? ` (${l.sub})` : ''}</Link></li>
            ))}
            <li><a href={CONTACT.upTvet} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">UP_TVET (mohon.tvet.gov.my)</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Hubungi</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5"><Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" /><a href={CONTACT.maps} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">{CONTACT.address}</a></li>
            <li className="flex gap-2.5"><Icon name="train" className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" /><span>{CONTACT.addressNote}</span></li>
            <li className="flex gap-2.5"><Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" /><a href={CONTACT.waGeneral} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">WhatsApp {CONTACT.whatsappDisplay}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 TVET Lipis. Hak cipta terpelihara.</span>
          <span>*Tertakluk semakan kelayakan JPK.</span>
        </div>
      </div>
    </footer>
  )
}
