import Link from 'next/link'
import { ABOUT, CONTACT } from '@/lib/site'
import Icon from '@/components/Icon'
import { PageHero, SectionHead, Starburst } from '@/components/ui'

export const metadata = {
  title: 'Tentang Kami',
  description: ABOUT.intro,
  alternates: { canonical: 'https://tvetlipis.my/tentang/' },
}

const ICONS = ['badge', 'diploma', 'users']
const COLORS = ['bg-violet text-white', 'bg-coral', 'bg-lime']

export default function TentangPage() {
  return (
    <>
      <PageHero
        crumb="Tentang Kami"
        title="Tentang TVET Lipis"
        lead={ABOUT.intro}
        stickers={<Starburst color="sun" size={200} rotate={-8} className="absolute right-6 top-4 text-2xl">Bertauliah<br />JPK</Starburst>}
      />
      <section className="py-20 md:py-24">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {ABOUT.points.map((p, i) => (
            <div key={p.title} className="card p-8" style={{ transform: `rotate(${[-1, 1, -0.5][i]}deg)` }}>
              <span className={`flex h-14 w-14 items-center justify-center rounded-full ${COLORS[i]}`}><Icon name={ICONS[i]} className="h-7 w-7" /></span>
              <h2 className="mt-5 text-2xl font-bold">{p.title}</h2>
              <p className="mt-2 text-lg leading-snug text-slate">{p.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-sun py-20 md:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <SectionHead ink eyebrow="Lokasi" tagColor="bg-ink" title="Di tengah bandar Kuala Lipis" lead={`${CONTACT.address}. ${CONTACT.addressNote}.`} />
          <div className="grid gap-5 sm:grid-cols-2">
            <Link href="/program/" className="block -rotate-1 rounded-card bg-violet p-7 text-white transition-transform hover:rotate-0">
              <p className="text-sm font-semibold uppercase tracking-wide">Lepasan SPM</p>
              <p className="mt-2 text-2xl font-bold leading-tight">Program Sepenuh Masa</p>
              <p className="mt-1">2 tahun, dibiayai PTPK.</p>
            </Link>
            <Link href="/ppt/" className="block rotate-1 rounded-card bg-coral p-7 transition-transform hover:rotate-0">
              <p className="text-sm font-semibold uppercase tracking-wide">Golongan Kerja</p>
              <p className="mt-2 text-2xl font-bold leading-tight">Program PPT</p>
              <p className="mt-1">DKM Tahap 4 untuk guru tadika yang bekerja.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
