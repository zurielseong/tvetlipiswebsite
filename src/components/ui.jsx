import Link from 'next/link'
import Icon from './Icon'

export function SectionHead({ eyebrow, title, lead, center = false, light = false }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <div className={`eyebrow ${center ? 'justify-center' : ''} ${light ? '!text-brand-yellow before:!bg-brand-yellow' : ''}`}>{eyebrow}</div>}
      <h2 className={`h2 ${light ? '!text-white' : ''}`}>{title}</h2>
      {lead && <p className={`lead ${light ? '!text-white/75' : ''}`}>{lead}</p>}
    </div>
  )
}

/* Bentuk hiasan terapung (bulatan, cincin, titik) */
export function Deco({ variant = 'light' }) {
  const ring = variant === 'light' ? 'border-white/25' : 'border-brand-navy/10'
  const dot = variant === 'light' ? 'bg-white/30' : 'bg-brand-red/20'
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className={`animate-floaty absolute -right-10 top-10 hidden h-40 sm:block w-40 rounded-full border-[14px] ${ring}`} />
      <span className="animate-floaty absolute right-[44%] top-[7%] hidden h-5 w-5 lg:block rounded-full bg-brand-yellow [animation-delay:1.5s]" />
      <span className={`animate-floaty absolute bottom-[24%] right-[34%] h-3 w-3 rounded-full ${dot} [animation-delay:3s]`} />
      <span className="animate-floaty absolute bottom-[20%] right-[4%] hidden h-8 w-8 md:block rotate-12 rounded-lg bg-brand-red/40 [animation-delay:2s]" />
      <svg className="absolute right-[14%] top-[5%] hidden h-16 w-28 text-brand-yellow/70 lg:block" viewBox="0 0 120 40" fill="none">
        <path d="M2 20c12-18 24-18 36 0s24 18 36 0 24-18 36 0" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      </svg>
    </div>
  )
}

/* Pemisah gelombang di bawah seksyen berwarna */
export function Wave({ fill = '#ffffff', className = '' }) {
  return (
    <svg aria-hidden="true" className={`block h-12 w-full md:h-20 ${className}`} viewBox="0 0 1440 80" preserveAspectRatio="none">
      <path fill={fill} d="M0 48c160-32 320-40 480-24s320 48 480 40 320-48 480-48v64H0z" />
    </svg>
  )
}

export function PageHero({ crumb, title, lead, children, waveFill = '#FFFBEF' }) {
  return (
    <section className="bg-hero relative overflow-hidden">
      <Deco />
      <div className="container-x relative py-14 md:py-20">
        <nav className="text-xs text-white/70" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">Utama</Link> <span className="mx-1.5">/</span> <span className="text-white">{crumb}</span>
        </nav>
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl">{title}</h1>
        {lead && <p className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">{lead}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
      <Wave fill={waveFill} className="relative -mb-px" />
    </section>
  )
}

export function Faq({ items }) {
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-card">
      {items.map(([q, a]) => (
        <details key={q} className="group p-5 md:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-navy">
            {q}
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-sky text-brand-navy transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 leading-relaxed text-slate-600">{a}</p>
        </details>
      ))}
    </div>
  )
}

export function KeyTable({ rows }) {
  return (
    <dl className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      {rows.map(([k, v]) => (
        <div key={k} className="grid grid-cols-1 gap-1 px-5 py-3.5 sm:grid-cols-[180px_1fr] sm:gap-4">
          <dt className="text-sm font-semibold text-brand-navy">{k}</dt>
          <dd className="text-sm text-slate-700">{v}</dd>
        </div>
      ))}
    </dl>
  )
}

export function CheckList({ items, className = '' }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green"><Icon name="check" className="h-3.5 w-3.5" /></span>
          <span className="text-slate-700">{t}</span>
        </li>
      ))}
    </ul>
  )
}

export function Steps({ steps }) {
  return (
    <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.title} className="card relative p-6">
          <div className="flex items-center justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-lg font-extrabold text-white">{i + 1}</span>
            <span className="rounded-full bg-brand-yellow/20 px-3 py-1 text-xs font-semibold text-[#8A6A00]">{s.tag}</span>
          </div>
          <h3 className="mt-4 text-lg font-bold text-brand-navy">{s.title}</h3>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate-600">
            {s.items.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </li>
      ))}
    </ol>
  )
}
