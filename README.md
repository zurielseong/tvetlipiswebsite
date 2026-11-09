# tvetlipis.my

Laman web TVET Lipis (Next.js 14, static export, Tailwind). Fokus utama: **PPT Diploma Pra-Sekolah (DKM Tahap 4)**.
Program sepenuh masa disertakan sebagai bahagian sampingan.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # output statik dalam ./out
```

## Struktur

| Laluan | Kandungan |
|---|---|
| `/` | Hero PPT, akses pantas, apa itu PPT, kenapa sekarang, kelebihan, aliran 6 langkah, yuran, program sepenuh masa, tentang, FAQ |
| `/ppt/` | Butiran penuh PPT: ringkasan, aliran, unit kompetensi (NOSS P851-002-4:2025), dokumen, yuran, FAQ |
| `/program/` | Program sepenuh masa, kos sendiri, bantuan, asrama |
| `/tentang/` | Tentang TVET Lipis |
| `/hubungi/` | WhatsApp (mesej pra-isi), alamat, peta |

**Semua kandungan ada dalam `src/lib/site.js`.** Kemas kini fakta di situ sahaja.

Jenama: biru tua `#063E87`, merah `#D11F48`, kuning `#FFC400`, hijau CTA `#1F9D55`, latar putih bergrid, fon Poppins.

## Belum diterbitkan (menunggu [SAHKAN])

Perkara berikut sengaja TIDAK dipaparkan sehingga disahkan:

1. Pengalaman minimum untuk DKM melalui PPT (2 tahun vs 5 / 2½ tahun)
2. Pengiktirafan DKM oleh KPM/JPN untuk permit mengajar
3. Yuran JPK termasuk dalam RM3,800 atau tidak
4. Deposit, polisi bayaran balik, ansuran / HRD Corp / KWSP
5. Tarikh batch PPT seterusnya
6. Penginapan untuk calon PPT dan kadarnya
7. Tempoh siap "dalam 6 bulan"
8. SKM Tahap 3 Sokongan Pengajaran Prasekolah, dan PAKK PPT
9. Tarikh pengambilan sepenuh masa 2027 (PAKK); yuran Pengurusan Halal

## Aset untuk ditambah

- Logo rasmi: kini guna placeholder dalam `src/components/Logo.jsx`; letak fail dalam `public/` dan gantikan.
- Poster PPT (1:1, 4:5, 9:16, 1.91:1) boleh dimasukkan ke hero atau galeri.
- Pautan Facebook dalam `site.js` kini pautan carian; gantikan dengan URL halaman sebenar.

## Deploy (Cloudflare Workers)

Cloudflare Workers Builds, production branch `main`:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy` (reads `wrangler.jsonc`, uploads `./out`)

Preview: `baru.tvetlipis.my` (noindex via `public/_headers`). Go live by adding `tvetlipis.my` under the Worker's Domains tab.
