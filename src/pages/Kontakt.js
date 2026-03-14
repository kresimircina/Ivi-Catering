import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./kontakt.css"
import { faInstagram, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";


import Yoast from './../components/Yoast';

const Kontakt = () => {

  const form = useRef();
 
  const [isSent, setISSent] = useState (false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ow0pthg', 'template_hhj1pow', form.current, {
        publicKey: 'woiCIcQsBiWzesjbt',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setISSent(true); // Dodano da se button stvarno ažurira nakon slanja
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    {/*<Yoast yoastHeadJson={page.yoast_head_json} />*/}
    <div className='container' style={{ paddingBottom: '80px' }}>
  <div className='row my-5'>
    
    <div style={{ marginBottom: '50px' }}>
      <h1 className='text-center' style={{ color: '#2d5a2d', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>Kontakt</h1>
      <p className='text-center' style={{ color: '#4a5d4a', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
        Imate pitanje, organizirate ručak za obitelj, prijatelje ili poslovne partnere? Obratite nam se s povjerenjem!
      </p>
    </div>

    {/* Lijeva strana */}
    <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
      <div className="contact-left h-100">
        <div className="circle1"></div>
        <div className="circle2"></div>
        
        <div style={{ zIndex: 2 }}>
          <h2>Kontakt Informacije</h2>
          <p>Dostupni smo za sve vaše upite.</p>
        </div>
        
        <div className="contact-info">
          <a href="tel:+385992050990">
            <FontAwesomeIcon icon={faPhone} className="me-3" /> +385 99 205 0990
          </a>
          
          <a href="https://wa.me/385911611999" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="me-3" style={{ color: '#25D366' }} /> Pošaljite nam poruku
          </a>

          <a href="mailto:info@cateringivi.com">
            <FontAwesomeIcon icon={faEnvelope} className="me-3" /> info@cateringivi.com
          </a>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', color: '#333', fontWeight: 500 }}>
            <a href="https://maps.google.com/?q=Tvoja+Adresa+123"target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLocationDot} className="me-3 mt-1" style={{ color: '#a38558' }} /> 
              <span>Berak, Orolička 25</span>
            </a>
          </div>
        </div>

        <div className="socials">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className="me-3" size="2x" /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="me-3" size="2x" /></a>
        </div>
      </div>
    </div>
      
    {/* Desna strana - Forma */}
    <div className="col-lg-7 col-md-12">
      <div className="contact-right h-100">
        <div className="contact-inputs">
          <form 
            ref={form}
            onSubmit={sendEmail} 
            className='d-flex flex-column'
          >
            <label>Ime i prezime</label>
            <input type="text" name="user_name" className='inputform' placeholder="Vaše ime" required/>
            
            <label>Email adresa</label>
            <input type="email" name="user_email" className='inputform' placeholder="vaš@email.com" required/>
            
            <label>Vaša poruka</label>
            <textarea rows={5} name="message" className='inputform' placeholder="Kako vam možemo pomoći?" required/>
            
            <button 
              type="submit"
              value="Send"
              className='contact-button mt-2'
              disabled={isSent}>
              {isSent ? "✓ Poruka poslana" : "Pošalji poruku"}
            </button>
          </form>
        </div>
      </div>
    </div>

  </div>
</div>

    </>
  )
}

export default Kontakt
