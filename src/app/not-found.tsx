import React from "react";
import { FaSadTear } from "react-icons/fa";
import "./box.scss";

export default function Custom404() {
  return (
    <section className="container section-container d-flex align-items-center">
      <div className="w-100 text-center d-flex gap-4 justify-content-center fs-2 flex-wrap">
        <span className="text-secondary fw-bold">404</span>
        <span>
          {" "}
          <span className="text-secondary fw-bold d-inline-block mx-3">|</span>
          Página no encontrada
          <FaSadTear size={32} className="ms-3" />
        </span>
      </div>
    </section>
  );
}
