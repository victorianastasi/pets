"use client";

import Image from "next/image";
import adoptionImage from "../../../public/images/adoption.jpg";
import "../box.scss";

export default function Adopciones() {
  return (
    <section className="container section-container">
      <h1>Adopciones</h1>
      <div className="d-flex gap-5 box-container">
        <div className="box-img">
          <Image src={adoptionImage} alt="" width={256} height={170} layout="responsive" objectFit="cover"></Image>
        </div>
        <div className="box-text">
          <p className="text-highlighted">Nuestras mascotas esperan ansiosas una segunda oportunidad. Cada uno tiene una historia única y está listo para llenar tu vida de amor incondicional.</p>
          <p className="h5 fw-bold">¿Por qué Adoptar?</p>
          <p>Al adoptar, no solo estás cambiando la vida de un animal, sino que también estás construyendo una conexión duradera. Nuestras mascotas son compañeros leales y afectuosos, listos para formar parte de tu familia y compartir momentos inolvidables.</p>
          <p className="h5 fw-bold">Proceso de Adopción</p>
          <p>Nuestro proceso de adopción es simple y lleno de amor. Visítanos, conoce a nuestros adorables residentes y encuentra a tu compañero perfecto.</p>
          <p className="h5 fw-bold">Únete a la Familia</p>
          <p>¡Tu nuevo mejor amigo te está esperando! Juntos, creamos historias de amor que duran toda la vida.</p>
        </div>
      </div>
    </section>
  );
}
