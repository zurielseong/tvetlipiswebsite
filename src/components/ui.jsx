import Link from 'next/link'
import Icon from './Icon'

/* ---------------- Pelekat (stickers) ---------------- */

function starPoints(n = 16, outer = 50, inner = 40) {
  const pts = []
  for (let i = 0; i < n * 2; i++) {
    const r = i % 2 === 0 ? outer : inner
    const a = (Math.PI * i) / n - Math.PI / 2
    pts.push(`${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`)
  }
  return pts.join(' ')
}
const STAR = starPoints()

const FILL = { coral: '#fd4b38', sun: '#ffd80c', violet: '#8a53ff', lime: '#3ccb09', white: '#ffffff' }
const TEXT = { coral: 'text-ink', sun: 'text-ink', violet: 'text-white', lime: 'text-ink', white: 'text-ink' }

export function Starburst({ children, color = 'coral', size = 160, rotate = -8, className = '' }) {
  return (
    <div className={`${/\b(absolute|fixed)\b/.test(className) ? '' : 'relative'} inline-flex shrink-0 items-center justify-center ${className}`} style={{ width: size, height: size, transform: `rotate(${rotate}deg)` }}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true"><polygon points={STAR} fill={FILL[color]} /></svg>
      <span className={`relative px-4 text-center font-bold uppercase leading-[1] ${TEXT[color]}`}>{children}</span>
    </div>
  )
}

export function Badge({ children, color = 'violet', size = 130, rotate = 6, className = '' }) {
  return (
    <div
      className={`inline-flex shrink-0 items-center justify-center rounded-full text-center font-bold leading-tight ${TEXT[color]} ${className}`}
      style={{ width: size, height: size, background: FILL[color], transform: `rotate(${rotate}deg)` }}
    >
      <span className="px-3">{children}</span>
    </div>
  )
}

export function Bubble({ children, rotate = 3, tail = 'left', className = '' }) {
  return (
    <div className={`relative inline-block rounded-card bg-white px-6 py-4 text-ink ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 30 24"
        className={`absolute -bottom-[18px] h-6 w-8 ${tail === 'left' ? 'left-8' : 'right-8 -scale-x-100'}`}
      >
        <path d="M0 0h30L6 24z" fill="#fff" />
      </svg>
    </div>
  )
}

export function Label({ children, color = 'coral', rotate = -12, className = '' }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-btn px-6 py-2 text-lg font-bold ${TEXT[color]} ${className}`}
      style={{ background: FILL[color], transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  )
}

/* ---------------- Struktur ---------------- */

export function SectionHead({ eyebrow, title, lead, center = false, light = false, ink = false, tagColor = 'bg-coral' }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <span className={`tag ${tagColor} ${tagColor === 'bg-ink' ? '!text-white' : ''}`}>{eyebrow}</span>}
      <h2 className={`h2 ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {lead && <p className={`lead ${light ? '!text-white' : ink ? '!text-ink' : ''}`}>{lead}</p>}
    </div>
  )
}

export function PageHero({ crumb, title, lead, children, stickers }) {
  return (
    <section className="relative overflow-hidden bg-violet text-white">
      <div className="container-x relative grid items-center gap-10 py-16 md:py-24 lg:grid-cols-[1.4fr_.6fr]">
        <div>
          <nav className="text-sm text-white/90" aria-label="Breadcrumb">
            <Link href="/" className="border-b border-white/60 hover:border-white">Utama</Link> <span className="mx-1.5">/</span> <span>{crumb}</span>
          </nav>
          <h1 className="mt-5 text-5xl font-bold leading-[0.95] md:text-7xl">{title}</h1>
          {lead && <p className="mt-6 max-w-2xl text-lg leading-snug md:text-xl">{lead}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>
        {stickers && <div className="relative hidden h-64 lg:block">{stickers}</div>}
      </div>
    </section>
  )
}

export function Faq({ items }) {
  return (
    <div className="space-y-3">
      {items.map(([q, a]) => (
        <details key={q} className="group rounded-card bg-white p-5 md:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
            {q}
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sun text-xl font-bold transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-lg leading-snug text-slate">{a}</p>
        </details>
      ))}
    </div>
  )
}

export function KeyTable({ rows }) {
  return (
    <dl className="overflow-hidden rounded-card bg-white">
      {rows.map(([k, v], i) => (
        <div key={k} className={`grid grid-cols-1 gap-1 px-6 py-4 sm:grid-cols-[190px_1fr] sm:gap-4 ${i ? 'border-t-2 border-cream' : ''}`}>
          <dt className="font-bold">{k}</dt>
          <dd className="text-slate">{v}</dd>
        </div>
      ))}
    </dl>
  )
}

export function CheckList({ items, className = '', dark = false }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-lg leading-snug">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-ink"><Icon name="check" className="h-4 w-4" /></span>
          <span className={dark ? 'text-white' : ''}>{t}</span>
        </li>
      ))}
    </ul>
  )
}

const STEP_COLORS = ['bg-violet text-white', 'bg-sun text-ink', 'bg-lime text-ink', 'bg-coral text-ink', 'bg-indigo text-white', 'bg-ink text-white']

export function Steps({ steps }) {
  return (
    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.title} className="card relative p-7">
          <div className="flex items-start justify-between gap-3">
            <span className={`flex h-14 w-14 items-center justify-center rounded-full text-2xl font-bold ${STEP_COLORS[i % STEP_COLORS.length]}`} style={{ transform: `rotate(${i % 2 ? 6 : -6}deg)` }}>{i + 1}</span>
            <span className="rotate-2 rounded-tag bg-cream px-3 py-1 text-sm font-semibold">{s.tag}</span>
          </div>
          <h3 className="mt-5 text-2xl font-bold leading-tight">{s.title}</h3>
          <ul className="mt-2 space-y-1.5 leading-snug text-slate">
            {s.items.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </li>
      ))}
    </ol>
  )
}
