// Sumber tunggal kandungan laman. Semua fakta diambil daripada "TVET Lipis: Maklumat Produk"
// (kemas kini 9 Nov 2026). Perkara bertanda [SAHKAN] dalam dokumen itu SENGAJA tidak diterbitkan
// di sini. Lihat README untuk senarai perkara yang menunggu pengesahan.

const WA_NUMBER = '60108086630'
export const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`

export const CONTACT = {
  name: 'TVET Lipis',
  tagline: 'Pengalaman anda → Diploma',
  address: 'Tingkat 4, Bangunan Lipis Centrepoint, 27200 Kuala Lipis, Pahang',
  addressNote: 'Berdekatan Stesen KTM Kuala Lipis · lebih kurang 3 jam dari Kuala Lumpur',
  whatsappDisplay: '010-808 6630',
  waPPT: waLink('Saya berminat Diploma Pra-Sekolah (PPT)'),
  waFullTime: waLink('Saya berminat program diploma sepenuh masa'),
  waGeneral: waLink('Saya nak tahu lebih tentang TVET Lipis'),
  facebook: 'https://www.facebook.com/search/top?q=TVET%20Lipis',
  instagram: 'https://www.instagram.com/tvet_lipis',
  tiktok: 'https://www.tiktok.com/@tvet_lipis',
  maps: 'https://www.google.com/maps/search/?api=1&query=Lipis+Centrepoint+Kuala+Lipis',
  upTvet: 'https://mohon.tvet.gov.my',
  website: 'https://tvetlipis.my',
}

export const ABOUT = {
  intro:
    'TVET Lipis ialah hab pendidikan kemahiran di Kuala Lipis yang mengurus program TVET bagi Kolej Islam Antarabangsa (Kolej UIA) dan Akademi USIM, kedua-duanya badan berkanun (separa kerajaan).',
  points: [
    { title: 'Pusat Penilaian Amali', text: 'PPA-PPT bertauliah Jabatan Pembangunan Kemahiran (JPK).' },
    { title: 'Sijil JPK', text: 'DKM dan SKM dikeluarkan oleh JPK, Kementerian Sumber Manusia.' },
    { title: 'Rakan institusi', text: 'Kolej Islam Antarabangsa (Kolej UIA) dan Akademi USIM.' },
  ],
}

// ---------------- PRODUK UTAMA: PPT Diploma Pra-Sekolah ----------------
export const PPT = {
  name: 'Diploma Kemahiran Malaysia (DKM) Tahap 4, Pengajaran Prasekolah',
  short: 'PPT Diploma Pra-Sekolah',
  noss: 'P851-002-4:2025 Preschool Teaching',
  price: 'RM3,800',
  priceWas: 'RM4,500',
  summary: [
    ['Program', 'DKM Tahap 4, Pengajaran Prasekolah'],
    ['Kod NOSS', 'P851-002-4:2025 Preschool Teaching (NOSS terkini)'],
    ['Kaedah', 'PPT melalui penilaian amali'],
    ['Untuk siapa', 'Guru tadika / prasekolah yang sedang bekerja tetapi belum ada diploma'],
    ['Umur minimum', '21 tahun'],
    ['Sesi bersemuka', '2 sesi di Kuala Lipis (2 hari + 3 hari)'],
    ['Bimbingan', 'Group WhatsApp sepanjang program'],
    ['Penilai', 'Pegawai Penilai (PPL) dilantik oleh JPK'],
    ['Saiz batch', 'Minimum 4 calon'],
    ['Sijil', 'DKM Tahap 4, dikeluarkan oleh JPK'],
  ],
  whatIs:
    'PPT (Pengiktirafan Pencapaian Terdahulu) ialah kaedah JPK mengiktiraf kemahiran yang anda sudah ada hasil pengalaman bekerja. Anda tidak perlu belajar semula selama 2 tahun. Kemahiran anda dinilai secara amali oleh penilai JPK, dan jika kompeten, anda dianugerahkan Diploma Kemahiran Malaysia.',
  whyNow: [
    {
      stat: '13 Okt 2026',
      text: 'Pekeliling KPM (KPM.600-8/1/1 Jld. 21 (86)) menegaskan semula bahawa guru prasekolah, termasuk di tadika swasta, perlu memiliki sekurang-kurangnya diploma dalam bidang pendidikan awal kanak-kanak. Dasar ini berkuat kuasa sejak 2020.',
    },
    {
      stat: 'Berdiploma',
      text: 'Pengusaha tadika digalakkan mengutamakan guru berdiploma untuk pengambilan baharu.',
    },
    {
      stat: '~20%',
      text: 'Menurut NOSS P851-002-4:2025, setakat 28 Februari 2025 hanya kira-kira 20% daripada 31,826 guru tadika di Malaysia memenuhi kelayakan akademik minimum.',
    },
  ],
  steps: [
    { title: 'Daftar & semak kelayakan', tag: 'Online', items: ['Hantar dokumen; kami semak kelayakan anda.'] },
    {
      title: 'Sesi 1: Pencerahan',
      tag: '2 hari · Kuala Lipis',
      items: [
        'Hari 1: apa itu PPT amali, perjalanan program, pengenalan NOSS, contoh soalan amali.',
        'Hari 2: latihan soalan amali, pengenalan LPKC (tajuk & format laporan).',
      ],
    },
    { title: 'Siapkan LPKC', tag: 'Di rumah', items: ['Siapkan laporan di rumah dengan bimbingan melalui group WhatsApp.'] },
    {
      title: 'Permohonan penilaian ke JPK',
      tag: '± 2 minggu',
      items: ['Penilai dilantik dalam lebih kurang 2 minggu; tarikh Sesi 2 ditetapkan bersama penilai.'],
    },
    {
      title: 'Sesi 2: Ulangkaji & Penilaian',
      tag: '3 hari · Kuala Lipis',
      items: [
        'Hari 1–2: ulangkaji, semak & edit LPKC, sediakan slaid pembentangan.',
        'Hari 3: sesi penilaian bersama Pegawai Penilai (PPL) JPK.',
      ],
    },
    { title: 'Sijil DKM Tahap 4', tag: 'JPK', items: ['Sijil DKM Tahap 4 dikeluarkan oleh JPK.'] },
  ],
  units: [
    ['C01', 'Mengendalikan aktiviti rutin harian', 'Ketibaan murid, waktu rehat, ke tandas, waktu pulang'],
    ['C02', 'Melaksanakan aktiviti pengajaran & pembelajaran', 'RPT, RPH, bahan bantu mengajar, laksana RPH, analisis keberkesanan'],
    ['C03', 'Mengurus persekitaran bilik darjah', 'Persekitaran pembelajaran, kehadiran, inventori kelas, tingkah laku murid'],
    ['C04', 'Membangunkan pentaksiran murid', 'Tingkah laku & sikap, aktiviti pentaksiran, pemerhatian, laporan perkembangan, bentang hasil'],
    ['C05', 'Mengendalikan aktiviti ibu bapa & komuniti', 'Aktiviti ibu bapa-komuniti, hubungan dengan keluarga, laporan aktiviti'],
  ],
  assessment: 'Penilaian amali, ujian lisan dan pembentangan laporan (LPKC). Tiada peperiksaan bertulis.',
  documents: [
    'Salinan kad pengenalan',
    'Salinan SKM tertinggi (jika ada)',
    'Surat pengesahan pengalaman kerja daripada majikan',
    'Borang akuan sumpah (bagi yang bekerja sendiri)',
    'Carta organisasi tempat kerja',
    'Komputer riba (untuk sesi)',
  ],
  benefits: [
    { icon: 'diploma', title: 'Terus ke Diploma Tahap 4', text: 'Kelayakan DKM Tahap 4 yang dikeluarkan oleh JPK.' },
    { icon: 'calendar', title: 'Hanya 5 hari bersemuka', text: 'Sesuai untuk guru yang sedang bekerja: 2 hari + 3 hari.' },
    { icon: 'chat', title: 'Bimbingan WhatsApp', text: 'Bimbingan sepanjang program melalui group WhatsApp.' },
    { icon: 'school', title: 'Berdasarkan kerja harian', text: 'Dinilai berdasarkan kerja harian anda di tadika.' },
    { icon: 'badge', title: 'Pusat bertauliah JPK', text: 'Pusat Penilaian Amali (PPA-PPT) bertauliah JPK.' },
    { icon: 'pen', title: 'Tiada peperiksaan bertulis', text: 'Penilaian amali, ujian lisan dan pembentangan laporan.' },
  ],
  faqs: [
    ['Ini diploma betul ke?', 'Ya. DKM Tahap 4 ialah Diploma Kemahiran Malaysia yang dikeluarkan oleh JPK.'],
    ['Perlu belajar 2 tahun?', 'Tidak. Kemahiran anda dinilai berdasarkan pengalaman kerja.'],
    ['Ada peperiksaan bertulis?', 'Tiada. Penilaian amali, ujian lisan dan pembentangan laporan.'],
    ['Berapa kali perlu datang ke Lipis?', '2 kali: 2 hari dan 3 hari.'],
    ['Boleh guna PTPK?', 'Tidak, PTPK tidak menanggung PPT.'],
    ['Bila batch seterusnya?', 'Batch bermula apabila cukup 4 calon. WhatsApp kami untuk menyertai senarai batch seterusnya.'],
  ],
}

// ---------------- PROGRAM SEPENUH MASA ----------------
export const FULLTIME = {
  summary: [
    ['Untuk siapa', 'Lepasan sekolah / belia umur 16–30 tahun, warganegara Malaysia'],
    ['Syarat', 'Boleh membaca, menulis dan mengira. Tidak perlu SPM. Tiada temu duga.'],
    ['Tempoh', '2 tahun (1 tahun 8 bulan di kolej + 4 bulan latihan industri)'],
    ['Mod', 'Sepenuh masa, bersemuka (70% amali, 30% teori). Tiada kelas online / separuh masa.'],
    ['Sijil', 'Diploma Kemahiran Malaysia (DKM), JPK'],
    ['Pembiayaan', 'PTPK: pinjaman tanpa faedah, bayar balik 6 bulan selepas tamat'],
    ['Elaun', 'RM400 sebulan (PTPK)'],
    ['Cara memohon', 'WhatsApp 010-808 6630 atau UP_TVET (mohon.tvet.gov.my)'],
  ],
  costs: [
    ['Yuran pendaftaran', 'RM500 (RM100 pengesahan tempat dahulu, baki boleh ansur)'],
    ['Yuran pentadbiran (2 tahun)', 'RM500 (modul, bahan amali, uniform, peperiksaan akhir)'],
    ['Asrama', 'RM150 sebulan + utiliti (wajib kecuali penduduk Lipis); percuma untuk Multimedia'],
  ],
  aid: [
    'Biasiswa (penuh untuk IC Pahang B40; separa untuk negeri lain), termasuk melalui zakat negeri',
    'Biasiswa pelajar Sabah/Sarawak: RM5,000 termasuk tiket penerbangan + asrama percuma',
  ],
  hostel: [
    'Dalam bangunan yang sama dengan kolej',
    'Lelaki dan perempuan berasingan',
    'CCTV dan kod pintu',
    'Dapur berkongsi',
    'Kedai makan di tingkat bawah',
  ],
}

export const PROGRAMS = [
  {
    slug: 'pendidikan-awal-kanak-kanak',
    name: 'Pendidikan Awal Kanak-Kanak (PAKK)',
    fee: 'RM20,150',
    feeNote: 'Dibiayai PTPK',
    intake: '16 Nov 2026',
    status: 'open',
    color: 'from-brand-red to-[#F0567A]',
    icon: 'child',
    careers: ['Guru taska', 'Pusat jagaan kanak-kanak', 'Tadika swasta', 'KEMAS / Perpaduan'],
  },
  {
    slug: 'pentadbiran-pendidikan-pra-sekolah',
    name: 'Pentadbiran Pendidikan Pra-Sekolah',
    fee: 'RM20,150',
    feeNote: 'Dibiayai PTPK',
    intake: 'Jun 2027',
    status: 'open',
    color: 'from-brand-navy to-[#2A6BC4]',
    icon: 'school',
    careers: ['Guru tadika', 'Guru prasekolah'],
  },
  {
    slug: 'pembangunan-multimedia-kreatif',
    name: 'Pembangunan Multimedia Kreatif',
    fee: 'RM30,000',
    feeNote: 'Dibiayai PTPK · asrama percuma',
    intake: 'Kelas semasa: boleh masuk lewat hingga hujung Nov 2026',
    status: 'open',
    color: 'from-[#5B2BBF] to-[#8C5CF0]',
    icon: 'media',
    careers: ['Pereka grafik', 'Penyunting video', 'Pencipta kandungan', 'Animator', 'Freelancer'],
  },
  {
    slug: 'pengurusan-halal',
    name: 'Pengurusan Halal',
    fee: 'Akan diumumkan',
    feeNote: 'Yuran belum muktamad',
    intake: 'Sekitar Jun 2027',
    status: 'soon',
    color: 'from-brand-green to-[#4CC47F]',
    icon: 'halal',
    careers: ['Eksekutif halal', 'Pematuhan', 'QA/QC', 'Pembantu audit'],
  },
]

export const NAV = [
  { href: '/', label: 'Utama' },
  { href: '/ppt/', label: 'PPT Diploma Pra-Sekolah' },
  { href: '/program/', label: 'Program Sepenuh Masa' },
  { href: '/tentang/', label: 'Tentang Kami' },
  { href: '/hubungi/', label: 'Hubungi' },
]
