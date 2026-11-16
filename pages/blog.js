import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Descubre artículos sobre SEO, Next.js y optimización web."
        />
        <meta property="og:title" content="Blog de Optimización Web" />
        <meta
          property="og:description"
          content="Aprende técnicas para mejorar el rendimiento y posicionamiento de sitios web."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main style={{ padding: "40px", textAlign: "center" }}>
        <h1>Blog de Optimización Web</h1>

        <p>
          Bienvenido a nuestro blog sobre SEO y desarrollo web.
        </p>

        <Link href="/">Volver al inicio</Link>
      </main>
    </>
  );
}