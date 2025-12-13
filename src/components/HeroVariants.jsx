import "./HeroVariants.css";
import banner1 from "../assets/banners/banner1.jpg";

export default function HeroVariants() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="inicio">
        <img src={banner1} alt="CNEL EP" />
        <div className="hero-overlay"></div>
      </section>

      {/* SERVICIOS */}
      <section className="services" id="servicios">
        <h2>Servicios en Línea</h2>

        <div className="services-grid">
          <div className="card">
            <span>⚡</span>
            <h3>Consulta de Planillas</h3>
            <p>Consulta tus consumos y valores pendientes.</p>
            <button>Consultar</button>
          </div>

          <div className="card">
            <span>🔧</span>
            <h3>Cambio de Medidor</h3>
            <p>Solicita inspección o reemplazo del medidor.</p>
            <button>Solicitar</button>
          </div>

          <div className="card">
            <span>📡</span>
            <h3>Reportar Novedad</h3>
            <p>Notifica fallas de energía en tu sector.</p>
            <button>Reportar</button>
          </div>

          <div className="card">
            <span>💳</span>
            <h3>Pagos en Línea</h3>
            <p>Paga tus planillas de forma rápida y segura.</p>
            <button>Pagar</button>
          </div>
        </div>
      </section>
    </>
  );
}
