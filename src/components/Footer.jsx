import Link from 'next/link'
import { CONTACT, NAV } from '@/lib/site'
import Icon, { WhatsAppGlyph } from './Icon'
import Logo from './Logo'
import { Starburst } from './ui'

export default function Footer() {
  return (
    <footer>
      {/* Blok CTA */}
      <div className="relative overflow-hidden bg-coral">
        <div className="container-x relative flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
          <div>
            <p className="text-4xl font-bold leading-[0.95] md:text-6xl">Pengalaman anda<br />→ Diploma.</p>
            <p className="mt-3 text-lg md:text-xl">Semak kelayakan PPT Diploma Pra-Sekolah anda hari ini.</p>
          </div>
          <div className="flex items-center gap-6">
            <Starburst color="sun" size={120} rotate={10} className="hidden text-lg md:inline-flex">Tanya je!</Starburst>
            <a href={CONTACT.waPPT} target="_blank" rel="noopener noreferrer" className="btn-ink px-7 py-4">
              <WhatsAppGlyph /> WhatsApp {CONTACT.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="bg-ink text-white">
        <div className="container-x grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="rounded-full shadow-ring"><Logo /></span>
              <div>
                <div className="text-xl font-bold">TVET Lipis</div>
                <div className="text-sm text-sun">Hab pendidikan kemahiran · Kuala Lipis</div>
              </div>
            </div>
            <p className="mt-4 max-w-md leading-snug text-white/85">
              Mengurus program TVET bagi Kolej Islam Antarabangsa (Kolej UIA) dan Akademi USIM. Pusat Penilaian Amali (PPA-PPT) bertauliah
              Jabatan Pembangunan Kemahiran (JPK). DKM dan SKM dikeluarkan oleh JPK, Kementerian Sumber Manusia.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                ['FB', CONTACT.facebook, 'Facebook TVET Lipis', 'bg-violet text-white'],
                ['IG', CONTACT.instagram, 'Instagram @tvet_lipis', 'bg-coral text-ink'],
                ['TT', CONTACT.tiktok, 'TikTok @tvet_lipis', 'bg-sun text-ink'],
              ].map(([t, href, label, c]) => (
                <a key={t} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition-transform hover:-rotate-12 ${c}`}>
                  {t}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-sun">Pautan</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((l) => (
                <li key={l.href}><Link href={l.href} className="border-b border-white/30 hover:border-sun hover:text-sun">{l.label}{l.sub ? ` (${l.sub})` : ''}</Link></li>
              ))}
              <li><a href={CONTACT.upTvet} target="_blank" rel="noopener noreferrer" className="border-b border-white/30 hover:border-sun hover:text-sun">UP_TVET (mohon.tvet.gov.my)</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-sun">Hubungi</h3>
            <ul className="mt-4 space-y-3 leading-snug">
              <li className="flex gap-2.5"><Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-sun" /><a href={CONTACT.maps} target="_blank" rel="noopener noreferrer" className="hover:text-sun">{CONTACT.address}</a></li>
              <li className="flex gap-2.5"><Icon name="train" className="mt-0.5 h-5 w-5 shrink-0 text-sun" /><span>{CONTACT.addressNote}</span></li>
              <li className="flex gap-2.5"><Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-sun" /><a href={CONTACT.waGeneral} target="_blank" rel="noopener noreferrer" className="hover:text-sun">WhatsApp {CONTACT.whatsappDisplay}</a></li>
            </ul>
          </div>
        </div>
        <div className="container-x flex flex-col gap-2 border-t-2 border-white/10 py-5 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 TVET Lipis. Hak cipta terpelihara.</span>
          <span>*Tertakluk semakan kelayakan JPK.</span>
        </div>
      </div>
    </footer>
  )
}
