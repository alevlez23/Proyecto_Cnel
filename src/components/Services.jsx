import "./Services.css";

export default function Services() {
  return (
    <section className="services">
      <h2 className="services-title">Servicios en Línea</h2>

      <div className="services-grid">
        <div className="service-card">
          <span>⚡</span>
          <h3>Consulta de Planillas</h3>
          <p>Consulta tus consumos y valores pendientes.</p>
        </div>

        <div className="service-card">
          <span>🔧</span>
          <h3>Cambio de Medidor</h3>
          <p>Solicita inspección o reemplazo del medidor.</p>
        </div>

        <div className="service-card">
          <span>📡</span>
          <h3>Reportar Novedad</h3>
          <p>Notifica fallas de energía en tu sector.</p>
        </div>

        <div className="service-card">
          <span>💳</span>
          <h3>Pagos en Línea</h3>
          <p>Paga tus planillas de forma rápida y segura.</p>
        </div>
      </div>
    </section>
  );
}
