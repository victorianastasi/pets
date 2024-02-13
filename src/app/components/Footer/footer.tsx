import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import "./footer.scss";

export default function Footer () {
  return (
    <footer className={`footer`}>
      <div className="footer-container">
        <a href="#" title="Facebook"><FaFacebook /></a>
        <a href="#" title="Instagram"><RiInstagramFill /></a>
        <a href="#" title="Whatsapp"><IoLogoWhatsapp /></a>
      </div>
      <small>2024</small>
    </footer>
  );
};
