
import Database from "better-sqlite3";
import path from "path";

// Configurar la ruta de SQLite para local y Render
const dbPath = process.env.RENDER
  ? "/tmp/seo.db"
  : path.join(process.cwd(), "seo.db");

const db = new Database(dbPath);

// Crear tabla de páginas
db.prepare(`
  CREATE TABLE IF NOT EXISTS paginas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ruta TEXT NOT NULL UNIQUE,
    titulo TEXT NOT NULL,
    fecha_actualizacion TEXT NOT NULL
  )
`).run();

// Registrar páginas iniciales
const insertar = db.prepare(`
  INSERT OR IGNORE INTO paginas
  (ruta, titulo, fecha_actualizacion)
  VALUES (?, ?, ?)
`);

const fecha = new Date().toISOString();

insertar.run("/", "Inicio", fecha);
insertar.run("/blog", "Blog", fecha);
insertar.run("/contacto", "Contacto", fecha);

// Obtener rutas desde SQLite
export function obtenerPaginas() {
  return db.prepare("SELECT * FROM paginas").all();
}

export default db;
