import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPaw } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";
import "./navbar.scss";

export default function NavbarComponent() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScrollToTop = () => {
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  interface NavLink {
    label?: string;
    url?: string;
  }

  const navLinks: NavLink[] = [
    { label: "Nosotros", url: "/nosotros" },
    { label: "Adopciones", url: "/adopciones" },
    { label: "Donaciones", url: "/donaciones" },
    { label: "Contacto", url: "/contacto" },
  ];

  return (
    <header className={`sticky-top ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-0">
        <div className="container">
          <a className="navbar-brand me-2" href="/">
            <FaPaw className="me-2 mb-1" color="#fbece5" />
            <span>Perritos del Palomar</span>
          </a>
          <a
            className={`btn-toggler btn btn-outline-dark p-2 d-flex d-lg-none ${
              scrolled ? "scrolled" : ""
            }`}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasPets"
            aria-controls="offcanvasPets"
          >
            <RiMenuFill size={20} />
          </a>

          <div
            className="offcanvas-start offcanvas-lg"
            data-bs-scroll="true"
            tabIndex={-1}
            id="offcanvasPets"
            aria-labelledby="offcanvasPetsLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasPetsLabel">
                <span>Menu</span>
                <FaPaw className="ms-2 mb-1" />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasPets"
                aria-label="Cerrar"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-pills gap-4 gap-lg-3">
                {navLinks.map(({ label, url }) => (
                  <li
                    className="nav-item"
                    key={label}
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#offcanvasPets"
                  >
                    <Link
                      type="button"
                      href={url || "/"}
                      className={`${
                        pathname == url ? "nav-link active" : "nav-link"
                      }`.trim()}
                      onClick={handleScrollToTop}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
