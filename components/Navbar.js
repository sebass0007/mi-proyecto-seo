
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        padding: "20px",
        backgroundColor: "#0f172a",
      }}
    >
      <Link href="/" style={{ color: "white", textDecoration: "none" }}>
        Inicio
      </Link>

      <Link href="/blog" style={{ color: "white", textDecoration: "none" }}>
        Blog
      </Link>

      <Link href="/contacto" style={{ color: "white", textDecoration: "none" }}>
        Contacto
      </Link>
    </nav>
  );
}
