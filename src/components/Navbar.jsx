'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV, CONTACT } from '@/lib/site'
import Icon, { WhatsAppGlyph } from './Icon'
import Logo from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const path = usePathname()
  const isActive = (href) => (href === '/' ? path === '/' : path?.startsWith(href.replace(/\/$/, '')))

  return (
    <>
      {/* Bar maklumat atas */}
      <div className="hidden whitespace-nowrap bg-ink text-sm text-white md:block">
        <div className="container-x flex h-10 items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="hidden items-center gap-1.5 lg:flex"><Icon name="pin" className="h-4 w-4 text-sun" />{CONTACT.address}</span>
            <a href={CONTACT.waGeneral} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-sun">
              <Icon name="phone" className="h-4 w-4 text-sun" />WhatsApp {CONTACT.whatsappDisplay}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden text-white/80 xl:inline">Pusat Penilaian Amali bertauliah JPK</span>
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-sun">Facebook</a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-sun">Instagram</a>
            <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-sun">TikTok</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-cream">
        <div className="container-x flex h-[76px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Logo />
            <div className="leading-tight">
              <div className="text-xl font-bold tracking-wide">TVET LIPIS</div>
              <div className="whitespace-nowrap text-xs text-slate lg:hidden xl:block">Kolej UIA · Akademi USIM</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`flex flex-col items-center whitespace-nowrap rounded-btn px-3 py-1.5 text-base font-semibold leading-tight transition-colors xl:px-4 ${isActive(l.href) ? 'bg-sun' : 'hover:bg-white'}`}
              >
                <span>{l.label}</span>
                {l.sub && <span className="text-xs font-normal text-slate">({l.sub})</span>}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={CONTACT.waPPT} target="_blank" rel="noopener noreferrer" className="btn-cta hidden whitespace-nowrap px-5 py-2.5 text-base sm:inline-flex">
              <WhatsAppGlyph className="h-5 w-5" /> Semak kelayakan
            </a>
            <button className="rounded-btn p-2 hover:bg-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Buka menu" aria-expanded={open}>
              <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                {open ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="bg-cream lg:hidden">
            <div className="container-x pb-5">
              {NAV.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className={`block rounded-btn px-3 py-3 text-lg font-semibold ${isActive(l.href) ? 'bg-sun' : ''}`}>
                  {l.label}
                  {l.sub && <span className="ml-1.5 text-sm font-normal text-slate">({l.sub})</span>}
                </Link>
              ))}
              <a href={CONTACT.waPPT} target="_blank" rel="noopener noreferrer" className="btn-cta mt-3 w-full">
                <WhatsAppGlyph className="h-5 w-5" /> Semak kelayakan · {CONTACT.whatsappDisplay}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
