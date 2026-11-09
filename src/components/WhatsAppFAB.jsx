import { CONTACT } from '@/lib/site'
import { WhatsAppGlyph } from './Icon'

export default function WhatsAppFAB() {
  return (
    <a
      href={CONTACT.waPPT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp TVET Lipis"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-brand-green py-3 pl-3 pr-3 text-white shadow-xl shadow-brand-green/30 transition-all hover:bg-brand-greendark sm:pr-5"
    >
      <span className="flex h-8 w-8 items-center justify-center"><WhatsAppGlyph className="h-7 w-7" /></span>
      <span className="hidden text-sm font-semibold sm:inline">Tanya kami</span>
    </a>
  )
}
