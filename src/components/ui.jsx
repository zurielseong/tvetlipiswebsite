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

export function PageHero({ crumb, title, lead, children }) {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 opacity-[.12] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-red/40 blur-3xl" />
      <div className="absolute -bottom-24 right-1/3 h-56 w-56 rounded-full bg-brand-yellow/25 blur-3xl" />
      <div className="container-x relative py-14 md:py-20">
        <nav className="text-xs text-white/60" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">Utama</Link> <span className="mx-1.5">/</span> <span className="text-white">{crumb}</span>
        </nav>
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl">{title}</h1>
        {lead && <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">{lead}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
      <div className="h-1.5 bg-[linear-gradient(90deg,#063E87_0_33%,#D11F48_33%_66%,#FFC400_66%)]" />
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
