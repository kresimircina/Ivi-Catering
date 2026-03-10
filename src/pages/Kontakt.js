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
    <div className='container'>
      <div className='row my-4'>
        <h1 className='text-center mt-3'> Kontakt</h1>
        <p className='text-center'>
          Any question or remarks? Just write us a message!
        </p>
        <div className="col-md-5 contact-left">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div>
              <h2>Contact Information</h2>
              <p>Say something to start a live chat!</p>
            </div>
            <div className="contact-info">
              {/* OVO JE TELEFONSKI LINK */}
              <a href="tel:+385912345678" style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faPhone} className="me-3" /> +385 91 234 5678
              </a>
              {/* OVO JE WHATSAPP LINK */}
              <a href="https://wa.me/385912345678" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faWhatsapp} className="me-3" style={{ color: '#25D366', fontSize: '1.2em' }} /> Pošaljite nam WhatsApp poruku
              </a>
              <a href="">
                <FontAwesomeIcon icon={faEnvelope} className="me-3" /> demo@gmail.com{" "}
              </a>
              <a href="">
                 <FontAwesomeIcon icon={faLocationDot} className="me-2" size="2x" /> 132 Dartmouth Street Boston, Massachusetts 02156
                United States{" "}
              </a>
            </div>
            <div className="socials">
              <a href="www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
             
            </div>
            
              
            
          </div>
          
        
        <div className="col-md-7 d-flex flex-column gap-5">
          <div className="d-flex flex-column contact-inputs">

            <form 
              ref={form}
              onSubmit={sendEmail} 
              className='d-flex flex-column'
            >
              <label>Name</label>
              <input type="text" name="user_name" className='inputform'/>
              <label>Email</label>
              <input type="email" name="user_email" className='inputform' />
              <label>Message</label>
              <textarea rows={2} name="message" className='inputform' />
              <button 
                type="submit"
                value="Send"
                className='contact-button mt-5'
                disabled={isSent}>
                {isSent ? "Message Sent" : "Send Message"}
              </button>
            </form>
          </div>
         
        </div>
      </div>
     
    </div>
    </>
  )
}

export default Kontakt
