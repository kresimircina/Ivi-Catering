import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const location = useLocation();

  if(location.pathname === "/signin") {
    return;
  }
  
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3 mx-auto">
                  <h4>Usluge</h4>
                    <ul>
                      <li>
                        <Link to="/usluga/vjencanja">Vjenčanja</ Link>
                      </li>
                      <li>
                        <Link to="/usluga/privatni-eventi">Privatni eventi</ Link>
                      </li>
                      <li>
                        <Link to="/usluga/poslovni-eventi">Poslovni eventi</ Link>
                      </li>
                    
                    </ul>
                  
                </div>
                <div className="col-md-3 mx-auto">
                  <h4>Informacije</h4>
                    <ul>
                      <li>
                        <Link to="/o-nama">O nama</ Link>
                      </li>
                      <li>
                        <Link to="/kontakt">Kontakt</ Link>
                      </li>
                      
                    </ul>

                </div>
              </div>
            </div> 

            <div className="col-md-6">
                    <h4>Kontaktirajte nas</h4>
                    <ul className="footer-contact">
                      <li>
                        <a href="https://maps.google.com/?q=Tvoja+Adresa+123" target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={faLocationDot} className="me-2" size="2x" /> Tvoja Adresa 123, Grad
                        </a>
                      </li>
                      <li>
                        <a href="tel:+385912345678">
                          <FontAwesomeIcon icon={faPhone} className="me-2" size="2x" /> +385 91 234 5678
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@ivicatering.hr">
                          <FontAwesomeIcon icon={faEnvelope} className="me-2" size="2x" /> info@ivicatering.hr
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/385912345678" target="_blank" rel="noreferrer" className="whatsapp-link">
                          <FontAwesomeIcon icon={faWhatsapp} className="me-2" size="2x"/> Pošaljite WhatsApp poruku
                        </a>
                      </li>
                    </ul>

                    <h4 className="mt-4">Pratite nas</h4>
                    <div className="footer-socials d-flex gap-4 mt-4">
                      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                      </a>
                      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                      </a>
                    </div>
            </div>
          </div>
            {/* Donji red s TOP gumbom skroz desno */}
          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-end">
              <button className="btn btn-danger btn-top" onClick={ScrollToTop}>TOP</button>
            </div>
          </div>
        </div>
        
      </footer>
    </>
  );
};

export default Footer
