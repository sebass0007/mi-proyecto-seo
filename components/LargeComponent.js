export default function LargeComponent() {
  return (
    <section
      style={{
        margin: "30px auto",
        padding: "25px",
        maxWidth: "600px",
        backgroundColor: "#e0f2fe",
        color: "#075985",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <h2>Componente cargado dinámicamente</h2>
      <p>
        Este componente utiliza Lazy Loading con Next.js
        para mejorar el rendimiento de la aplicación.
      </p>
    </section>
  );
}