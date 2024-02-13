"use client";

import { Card } from "../components/Card/card";
import Image from "next/image";
import contactImage from "../../../public/images/cat.jpg";
import instagramLogo from "../../../public/images/instagram-logo.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import "../box.scss";

export default function Contacto() {
  return (
    <section className="container section-container">
      <h1>Contacto</h1>
      <div className="d-flex gap-xl-5 gap-4 box-container">
        <div className="box-img">
          <Image src={contactImage} alt="" width={256} height={170}></Image>
        </div>
        <div className="box-text">
          <p className="text-open-sans mb-4 mb-lg-5">Nos podes contactar a través de los siguientes canales:</p>
          <div className="ps-lg-5">
            <Card
              icon={<FaFacebookSquare />}
              iconColor="#0866FF"
              text="Facebook"
              url="#"
              classname="mb-4 mb-xl-5 mx-auto mx-xl-0"
            ></Card>
            <Card
              icon={
                <Image
                  src={instagramLogo}
                  alt=""
                  width={24}
                  height={24}
                ></Image>
              }
              /* color="#353635" */
              text="Instagram"
              url="#"
              classname="mb-4 mb-xl-5 mx-auto mx-xl-0"
            ></Card>
            <Card
              icon={<SiWhatsapp />}
              iconColor="#25D366"
              text="Whatsapp"
              url="#"
              classname="mx-auto mx-xl-0"
            ></Card>
          </div>
        </div>
      </div>
    </section>
  );
}
