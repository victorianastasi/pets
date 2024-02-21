"use client";

import { PiDogDuotone } from "react-icons/pi";
import { PiCatDuotone } from "react-icons/pi";
import { IoIosCopy } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { MdLabel } from "react-icons/md";
import Image from "next/image";
import MPLogo from "../../../public/images/Mercado-Pago-Logo.png";
import Donation from "../../../public/images/donation.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import "react-toastify/scss/main.scss";
import "./donaciones.scss";

export default function Donaciones() {
  const ALIAS_MP = "XXXXX.XXXXX.XXXXX";
  const CVU_MP = "000000000000000";
  const [isCopiedAlias, setIsCopiedAlias] = useState(false);
  const [isCopiedCvu, setIsCopiedCvu] = useState(false);

  const handleToast = (text: string) => {
    toast.success(`${text} copiado!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const handleIsCopied = (
    text: string,
    setIsCopied: (arg0: boolean) => void
  ) => {
    handleToast(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 5100);
  };

  return (
    <section className="container">
      <div className="text-center pb-4">
        <h1>Donaciones</h1>
        <p className="mb-1 fs-4 text-white fw-bold font-comfortaa">
          ¡Cada granito de ayuda hace una gran diferencia!
        </p>
        <p className="fs-1 mb-5">
          {" "}
          <PiDogDuotone size={52} /> <PiCatDuotone size={52} />{" "}
        </p>
        <p className="mb-1 fs-4 text-white fw-bold font-comfortaa d-flex gap-2 justify-content-center">
          <a className="btn btn-dark btn-donation-nav" href="#aportes"><span>Aportes económicos</span></a>
          <a className="btn btn-dark btn-donation-nav" href="#insumos"><span>Insumos</span></a>
        </p>
      </div>
      <article className="mb-5 article-donation" id="aportes">
        <h2 className="fw-bold">Aportes económicos</h2>

        <p className="mb-1">
          Los aportes económicos desempeñan un papel crucial al respaldar costos
          relacionados con tratamientos, chequeos médicos, y visitas al
          veterinario.
        </p>
        <p className="mb-1">
          Además, son fundamentales para adquirir suministros y alimentos.
        </p>
        <div className="d-flex gap-2 gap-lg-5 flex-wrap flex-md-nowrap bg-white rounded shadow-lg mp-container mt-5">
          <div style={{ maxWidth: '250px', maxHeight: '141px' }}>
            <Image src={MPLogo} alt="" width={250} height={141} layout="responsive" objectFit="cover"></Image>
          </div>
          <div className="w-500 text-center">
            <p className="d-flex gap-2 align-items-center justify-content-between flex-wrap flex-column flex-md-row flex-md-nowrap bg-light rounded p-2 w-500">
              <span>
                <span>ALIAS: </span>
                <span className="fw-bold">{ALIAS_MP}</span>
              </span>
              <CopyToClipboard text={ALIAS_MP}>
                <button
                  onClick={() => handleIsCopied("Alias", setIsCopiedAlias)}
                  className={`btn d-flex align-items-center ${
                    isCopiedAlias ? "btn-outline-success" : "btn-dark"
                  }`}
                >
                  {isCopiedAlias ? (
                    <>
                      <FaCheck className="me-2" /> <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <IoIosCopy className="me-2" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </CopyToClipboard>
            </p>
            <p className="d-flex gap-2 align-items-center justify-content-between flex-wrap flex-column flex-md-row flex-md-nowrap bg-light rounded p-2 w-500 mb-5">
              <span>
                <span>CVU: </span>
                <span className="fw-bold">{CVU_MP}</span>
              </span>
              <CopyToClipboard text={CVU_MP}>
                <button
                  onClick={() => handleIsCopied("CVU", setIsCopiedCvu)}
                  className={`btn d-flex align-items-center ${
                    isCopiedCvu ? "btn-outline-success" : "btn-dark"
                  }`}
                >
                  {isCopiedCvu ? (
                    <>
                      <FaCheck className="me-2" /> <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <IoIosCopy className="me-2" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </CopyToClipboard>
            </p>

            <a href="#" className="btn btn-donate d-block mb-4 shadow">
              Doná $500
            </a>
            <a href="#" className="btn btn-donate d-block mb-4 shadow">
              Doná $1000
            </a>
            <a href="#" className="btn btn-donate d-block mb-4 shadow">
              Doná $1500
            </a>
            <a href="#" className="btn btn-donate d-block mb-4 shadow">
              Doná $2000
            </a>
          </div>
        </div>
        <ToastContainer />
      </article>
      <article className="mb-5 article-donation pb-5" id="insumos">
        <h2 className="fw-bold">Insumos</h2>
        <div className="d-flex gap-4 gap-lg-5 flex-wrap flex-md-nowrap bg-white rounded shadow-lg mp-container mt-5 pb-5">
          <div style={{ width: '250px', height: '174px' }}>
            <Image src={Donation} alt="" width={250} height={174} layout="responsive" objectFit="cover"></Image>
          </div>
          <div className="w-500 text-center">
            <p className="bg-light rounded p-2 w-500">
              <span>
                <strong>¿Qué puedo donar?</strong>
              </span>
            </p>
            <p className="d-flex gap-2 align-items-center flex-wrap flex-md-nowrap bg-light rounded p-2 w-500">
              <MdLabel color="#587291" />
              <span>Artículos de limpieza </span>
            </p>
            <p className="d-flex gap-2 align-items-center flex-wrap flex-md-nowrap bg-light rounded p-2 w-500">
              <MdLabel color="#587291" />
              <span>Tapitas de plástico </span>
            </p>
            <p className="d-flex gap-2 align-items-center flex-wrap flex-md-nowrap bg-light rounded p-2 w-500">
              <MdLabel color="#587291" />
              <span>Paté, picadillo</span>
            </p>
            <p className="d-flex gap-2 align-items-center flex-wrap flex-md-nowrap bg-light rounded p-2 w-500">
              <MdLabel color="#587291" />
              <span>Arroz</span>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
