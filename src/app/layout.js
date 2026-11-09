import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFAB from '@/components/WhatsAppFAB'
import JsonLd from '@/components/JsonLd'

export const metadata = {
  metadataBase: new URL('https://tvetlipis.my'),
  title: { default: 'TVET Lipis | PPT Diploma Pra-Sekolah (DKM Tahap 4)', template: '%s | TVET Lipis' },
  description:
    'Guru tadika tanpa diploma? Dapatkan Diploma Kemahiran Malaysia (DKM) Tahap 4 Pengajaran Prasekolah melalui PPT di TVET Lipis. 5 hari bersemuka, tiada peperiksaan bertulis. RM3,800.',
  keywords: ['PPT prasekolah', 'DKM Tahap 4 Pengajaran Prasekolah', 'diploma guru tadika', 'Pengiktirafan Pencapaian Terdahulu', 'TVET Lipis', 'Kuala Lipis', 'JPK', 'P851-002-4:2025'],
  openGraph: {
    type: 'website',
    locale: 'ms_MY',
    url: 'https://tvetlipis.my',
    siteName: 'TVET Lipis',
    title: 'Pengalaman anda → Diploma | TVET Lipis',
    description: 'PPT Diploma Pra-Sekolah (DKM Tahap 4). 5 hari bersemuka, bimbingan WhatsApp, penilaian amali oleh JPK.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://tvetlipis.my' },
}

export const viewport = { themeColor: '#063E87' }

export default function RootLayout({ children }) {
  return (
    <html lang="ms">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  )
}
