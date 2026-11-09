import { CONTACT, PPT } from '@/lib/site'

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://tvetlipis.my/#organization',
        name: 'TVET Lipis',
        url: 'https://tvetlipis.my',
        telephone: '+60108086630',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Tingkat 4, Bangunan Lipis Centrepoint',
          addressLocality: 'Kuala Lipis',
          addressRegion: 'Pahang',
          postalCode: '27200',
          addressCountry: 'MY',
        },
        sameAs: [CONTACT.instagram, CONTACT.tiktok],
        description:
          'Hab pendidikan kemahiran di Kuala Lipis yang mengurus program TVET bagi Kolej Islam Antarabangsa (Kolej UIA) dan Akademi USIM. Pusat Penilaian Amali (PPA-PPT) bertauliah JPK.',
      },
      {
        '@type': 'Course',
        name: PPT.name,
        description: PPT.whatIs,
        courseCode: 'P851-002-4:2025',
        provider: { '@id': 'https://tvetlipis.my/#organization' },
        offers: { '@type': 'Offer', price: '3800', priceCurrency: 'MYR' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: PPT.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
