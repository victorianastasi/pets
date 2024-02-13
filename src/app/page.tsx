"use client";

import Link from "next/link";
import { FaPaw } from "react-icons/fa";
import "./page.scss";

export default function Home() {
  const handleScrollToTop = () => {
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="main-page">
      <div className="home">
        <div className="home-cover"> </div>
        <Link
          className="home-btn"
          type="button"
          href="/donaciones"
          onClick={handleScrollToTop}
        >
          <span className="home-btn__icon">
            <FaPaw size={24} />
          </span>
          <span className="home-btn__text">Donaciones</span>
        </Link>
        <div className="home-text">
          <h1>Bienvenidos a Los Perritos del Palomar Refugio</h1>
        </div>
      </div>
    </section>
  );
}
