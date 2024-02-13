"use client";
import Image from "next/image";
import usImage from "../../../public/images/dogs.jpg";
import { FaHeart } from "react-icons/fa";
import "../box.scss";

export default function Nosotros() {
  return (
    <section className="container section-container">
      <h1>Nosotros</h1>
      <div className="d-flex gap-5 box-container">
        <div className="box-img">
          <Image src={usImage} alt="" width={256} height={170}></Image>
        </div>
        <div className="box-text">
          <p>Nos enorgullece ser un refugio comprometido con la protección y el bienestar de perros y gatos que han enfrentado situaciones difíciles en sus vidas.</p>
          <p className="h5 fw-bold">Equipo Apasionado</p>
          <p>Desde los cuidadores hasta los voluntarios, creamos un ambiente cálido y acogedor donde cada animal se siente amado y valorado.</p>
          <p className="h5 fw-bold">Historias de Éxito</p>
          <p>Cada adopción exitosa es un recordatorio de que, con amor y paciencia, podemos cambiar vidas, una pata a la vez.</p>
          <p className="h5 fw-bold">Únete a Nosotros</p>
          <p>Ya sea adoptando, donando, o dedicando tu tiempo como voluntario, hay muchas maneras de contribuir. Juntos, podemos hacer una diferencia significativa en sus vidas.</p>
          <p className="h5 fw-bold text-roselyn-dark font-comfortaa text-center mt-5">Gracias por ser parte y apoyar al Refugio. Juntos, construimos un futuro más brillante para cada huella que toca nuestro corazón. <FaHeart /></p>
        </div>
      </div>
    </section>
  );
}
