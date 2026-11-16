
import { obtenerPaginas } from "../../lib/db";

const BASE_URL = "https://mi-proyecto-seo-sog1.onrender.com";

export default function handler(req, res) {
  try {
    // Obtener las páginas desde SQLite
    const paginas = obtenerPaginas();

    // Generar el Sitemap dinámicamente
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paginas
  .map(
    (pagina) => `
  <url>
    <loc>${BASE_URL}${pagina.ruta}</loc>
    <lastmod>${pagina.fecha_actualizacion.split("T")[0]}</lastmod>
  </url>`
  )
  .join("")}
</urlset>`;

    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(sitemap);
  } catch (error) {
    console.error("Error al generar sitemap:", error);
    res.status(500).json({
      error: "No se pudo generar el sitemap",
    });
  }
}
