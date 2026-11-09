import { CONTACT } from '@/lib/site'
import { WhatsAppGlyph } from './Icon'

export default function WhatsAppFAB() {
  return (
    <a
      href={CONTACT.waPPT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp TVET Lipis"
      className="fixed bottom-5 right-5 z-50 flex -rotate-3 items-center gap-2 rounded-full bg-lime py-3 pl-3 pr-3 text-ink shadow-ring transition-transform hover:rotate-0 sm:pr-5"
    >
      <WhatsAppGlyph className="h-7 w-7" />
      <span className="hidden text-base font-bold sm:inline">Tanya kami</span>
    </a>
  )
}
