import Link from 'next/link'
import { ABOUT, CONTACT } from '@/lib/site'
import Icon from '@/components/Icon'
import { PageHero, SectionHead } from '@/components/ui'

export const metadata = {
  title: 'Tentang Kami',
  description: ABOUT.intro,
  alternates: { canonical: 'https://tvetlipis.my/tentang/' },
}

const ICONS = ['badge', 'diploma', 'users']

export default function TentangPage() {
  return (
    <>
      <PageHero crumb="Tentang Kami" title="Tentang TVET Lipis" lead={ABOUT.intro} />
      <section className="bg-grid py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-3">
            {ABOUT.points.map((p, i) => (
              <div key={p.title} className="card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white"><Icon name={ICONS[i]} /></span>
                <h2 className="mt-5 text-lg font-bold text-brand-navy">{p.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <SectionHead eyebrow="Lokasi" title="Di tengah bandar Kuala Lipis" lead={`${CONTACT.address}. ${CONTACT.addressNote}.`} />
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/ppt/" className="card group p-6 hover:-translate-y-1 transition-transform">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">Produk utama</p>
              <p className="mt-2 font-bold text-brand-navy">PPT Diploma Pra-Sekolah</p>
              <p className="mt-1 text-sm text-slate-600">DKM Tahap 4 untuk guru tadika yang bekerja.</p>
            </Link>
            <Link href="/program/" className="card group p-6 hover:-translate-y-1 transition-transform">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">Lepasan sekolah</p>
              <p className="mt-2 font-bold text-brand-navy">Program Sepenuh Masa</p>
              <p className="mt-1 text-sm text-slate-600">2 tahun, dibiayai PTPK.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
