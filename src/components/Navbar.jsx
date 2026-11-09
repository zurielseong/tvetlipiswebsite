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
      {/* Top info bar */}
      <div className="hidden md:block bg-brand-navyink text-white/80 text-xs whitespace-nowrap">
        <div className="container-x flex h-10 items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="hidden items-center gap-1.5 lg:flex"><Icon name="pin" className="w-3.5 h-3.5 text-brand-yellow" />{CONTACT.address}</span>
            <a href={CONTACT.waGeneral} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
              <Icon name="phone" className="w-3.5 h-3.5 text-brand-yellow" />WhatsApp {CONTACT.whatsappDisplay}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden text-white/60 xl:inline">Pusat Penilaian Amali bertauliah JPK</span>
            <span className="hidden h-4 w-px bg-white/20 xl:block" />
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">Facebook</a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">Instagram</a>
            <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow">TikTok</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="container-x flex h-[72px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Logo />
            <div className="leading-tight">
              <div className="font-extrabold text-brand-navy tracking-wide">TVET LIPIS</div>
              <div className="whitespace-nowrap text-[11px] font-medium text-slate-500 lg:hidden xl:block">Kolej UIA · Akademi USIM</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigasi utama">
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative flex flex-col items-center whitespace-nowrap px-2.5 py-2 text-sm xl:px-3.5 font-medium leading-tight transition-colors ${isActive(l.href) ? 'text-brand-navy' : 'text-slate-600 hover:text-brand-navy'}`}
              >
                <span>{l.label}</span>
                {l.sub && <span className="text-[11px] font-normal text-slate-400">({l.sub})</span>}
                {isActive(l.href) && <span className={`absolute inset-x-2.5 h-[3px] xl:inset-x-3.5 rounded-full bg-brand-red ${l.sub ? '-bottom-[10px]' : '-bottom-[17px]'}`} />}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={CONTACT.waPPT} target="_blank" rel="noopener noreferrer" className="btn-cta hidden whitespace-nowrap px-5 py-2.5 text-sm sm:inline-flex">
              <WhatsAppGlyph className="w-4 h-4" /> Semak kelayakan
            </a>
            <button
              className="lg:hidden rounded-lg p-2 text-brand-navy hover:bg-brand-sky"
              onClick={() => setOpen(!open)}
              aria-label="Buka menu"
              aria-expanded={open}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {open ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <div className="container-x py-3">
              {NAV.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 font-medium ${isActive(l.href) ? 'bg-brand-sky text-brand-navy' : 'text-slate-700'}`}
                >
                  {l.label}
                  {l.sub && <span className="ml-1.5 text-sm font-normal text-slate-400">({l.sub})</span>}
                </Link>
              ))}
              <a href={CONTACT.waPPT} target="_blank" rel="noopener noreferrer" className="btn-cta mt-3 w-full">
                <WhatsAppGlyph className="w-4 h-4" /> Semak kelayakan · {CONTACT.whatsappDisplay}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
