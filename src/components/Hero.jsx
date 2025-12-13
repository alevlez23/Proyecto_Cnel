import "./Hero.css";
import banner1 from "../assets/banners/banner1.jpg";
import banner2 from "../assets/banners/banner2.jpg";
import banner3 from "../assets/banners/banner3.jpg";
import { useEffect, useState } from "react";

export default function Hero() {
  const banners = [banner1, banner2, banner3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="hero" id="inicio">
      <img
        src={banners[index]}
        className="hero-banner"
        alt="CNEL EP"
      />
      <div className="hero-overlay"></div>

      <div className="hero-text">
        <h1>CNEL EP · Servicios Eléctricos</h1>
        <p>
          Consulta, paga y gestiona tus servicios eléctricos de forma rápida y segura.
        </p>
      </div>
    </header>
  );
}
