import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const BASE_URL = process.env.REACT_APP_API_URL


const Footer = () => {
  const location = useLocation();
  const[page, setPage] = useState(null);

  useEffect(() => {
      const fetchPage = async() => {
        try{
          const response = await fetch(BASE_URL + 'v2/pages/178?_embed');
          if(!response.ok){
            throw new Error('Ne mogu povući podatke');
          }
          const data = await response.json();
          setPage(data);
        } catch (err) {
          console.log(err.message);
        }
      }
      fetchPage();
    }, []);
  
    if(!page) return <p style={{textAlign: "center", padding:"20px"}}>Učitavanje...</p>;

  if(location.pathname === "/signin") {
    return null; //React traži da se vrati null, a ne prazan return
  }
  
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            {/*lijeva strana - linkovi */}
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="row">
                <div className="col-md-6 mb-4 mb-md-0"> 
                  <h4 className="footer-title">Usluge</h4>
                    <ul className="footer-links">
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
                <div className="col-md-6">
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
              </div>
            </div> 

           {/* DESNA STRANA - KONTAKT INFO */}
            <div className="col-md-6">
                    <h4 className="footer-title">Kontaktirajte nas</h4>
                    <ul className="footer-contact">
                      <li>
                        <div className="d-flex align-items-start">
                            <a href="https://maps.google.com/?q=132+Dartmouth+Street+Boston" target="_blank" rel="noreferrer" className="d-flex align-items center me-3 mt-1 contact-link text-gold ">
                              <FontAwesomeIcon icon={faLocationDot} size="2x" /> 
                              <span style={{color: "#4a5d4a"}}>
                                {page.acf.adresa ? page.acf.adresa : "Nema adrese"}
                              </span>
                            </a>
                            
                        </div>
                      </li>
                      
                      <li className="mt-3">
                        <a href="tel:+385992050990" className="d-flex align-items-center contact-link">
                          <FontAwesomeIcon icon={faPhone} className="me-3 text-gold" size="2x" /> 
                          <span>+385 99 205 0990</span>
                        </a>
                      </li>
                      
                      <li className="mt-3">
                        <a href="mailto:info@cateringivi.com" className="d-flex align-items-center contact-link">
                          <FontAwesomeIcon icon={faEnvelope} className="me-3 text-gold" size="2x" /> 
                          <span>info@</span>
                        </a>
                      </li>
                      
                      <li className="mt-3">
                        <a href="https://wa.me/385911611999" target="_blank" rel="noreferrer" className="d-flex align-items-center whatsapp-link">
                          <FontAwesomeIcon icon={faWhatsapp} className="me-3" style={{color: "#25D366"}} size="2x"/> 
                          <span>Pošaljite WhatsApp poruku</span>
                        </a>
                      </li>
                    </ul>

                    <h4 className="footer-title mt-5">Pratite nas</h4>
                    <div className="footer-socials d-flex gap-3 mt-3">
                      <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="social-icon">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                      </a>
                      <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="social-icon">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                      </a>
                    </div>
            </div>
          </div>
          
          {/* Donji red s TOP gumbom skroz desno */}
          <div className="row mt-5 pt-4 border-top">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <p style={{margin: 0, color: "#666", fontSize: "0.9rem"}}>© 2026 Ivi Catering. Sva prava pridržana.</p>
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
