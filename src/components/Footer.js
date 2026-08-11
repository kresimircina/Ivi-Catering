import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Globalne informacije obrta - mijenjaju se ovdje
const ADRESA = "Berak, Orolička 25";
const TELEFON = "+385 99 205 0990";
const EMAIL = "info@cateringivi.com";
const GOOGLE_MAPS_URL = "https://maps.google.com/?q=" + encodeURIComponent(ADRESA);

const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/signin") {
    return null;
  }

  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-4 gx-3 gy-4">
            <div className="col">
              <h4 className="footer-title">Usluge</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/usluga/vjencanja">Vjenčanja</Link>
                </li>
                <li>
                  <Link to="/usluga/privatni-eventi">Privatni eventi</Link>
                </li>
                <li>
                  <Link to="/usluga/poslovni-eventi">Poslovni eventi</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h4 className="footer-title">Informacije</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/onama">O nama</Link>
                </li>
                <li>
                  <Link to="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h4 className="footer-title">Kontaktirajte<br />nas</h4>
              <ul className="footer-contact">
                <li>
                  <div className="d-flex">
                    <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="d-flex align-items-center me-3 mt-1 contact-link">
                      <FontAwesomeIcon icon={faLocationDot} className="me-3 text-gold" size="2x" />
                      <span>{ADRESA}</span>
                    </a>
                  </div>
                </li>

                <li className="mt-3">
                  <a href={`tel:${TELEFON.replace(/\s/g, "")}`} className="d-flex align-items-center contact-link">
                    <FontAwesomeIcon icon={faPhone} className="me-3 text-gold" size="2x" />
                    <span>{TELEFON}</span>
                  </a>
                </li>

                <li className="mt-3">
                  <a href={`mailto:${EMAIL}`} className="d-flex align-items-center contact-link">
                    <FontAwesomeIcon icon={faEnvelope} className="me-3 text-gold" size="2x" />
                    <span>{EMAIL}</span>
                  </a>
                </li>

                <li className="mt-3">
                  <a href={`https://wa.me/${TELEFON.replace(/[\s+]/g, "")}`} target="_blank" rel="noreferrer" className="d-flex align-items-center whatsapp-link">
                    <FontAwesomeIcon icon={faWhatsapp} className="me-3" size="2x" />
                    <span>Pošaljite WhatsApp poruku</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h4 className="footer-title">Pratite nas</h4>
              <div className="footer-socials d-flex gap-3 mt-3">
                <a href="https://www.facebook.com/profile.php?id=61551460577818" target="_blank" rel="noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.instagram.com/catering.ivi" target="_blank" rel="noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-5 pt-4 border-top">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <p style={{ margin: 0, color: "#666", fontSize: "0.9rem" }}>
                © 2026 Ivi Catering. Sva prava pridržana.
              </p>
              <button className="btn-top" onClick={ScrollToTop} title="Povratak na vrh">
                TOP ↑
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer