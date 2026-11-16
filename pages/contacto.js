import Head from "next/head";
import Link from "next/link";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Sitio Optimizado</title>

        <meta
          name="description"
          content="Contacta con nuestro equipo para conocer más sobre SEO, Next.js y optimización web."
        />

        <meta
          property="og:title"
          content="Contacto - Mi Sitio Optimizado"
        />

        <meta
          property="og:description"
          content="Comunícate con nosotros y descubre cómo mejorar el rendimiento de tu sitio web."
        />

        <meta property="og:type" content="website" />
      </Head>

      <main style={{ padding: "40px", textAlign: "center" }}>
        <h1>Contáctanos</h1>

        <p>
          ¿Tienes preguntas sobre SEO y optimización web?
        </p>

        <p>
          Estamos aquí para ayudarte a mejorar tu sitio web.
        </p>

        <Link href="/">Volver al inicio</Link>
      </main>
    </>
  );
}