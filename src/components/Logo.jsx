// Placeholder untuk logo rasmi (bulatan hitam, teks putih). Gantikan dengan /public/logo.png apabila tersedia.
export default function Logo({ size = 44 }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full bg-black text-white font-extrabold leading-none"
      style={{ width: size, height: size, fontSize: size * 0.26 }}
      aria-hidden="true"
    >
      <span className="text-center">TVET<br /><span style={{ fontSize: size * 0.2 }}>LIPIS</span></span>
    </span>
  )
}
