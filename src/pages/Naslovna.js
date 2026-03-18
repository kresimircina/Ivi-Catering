import { useState, useEffect } from "react";
import FeaturedImg from "../components/FeaturedImg";
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";
import { Link } from "react-router-dom"

import Yoast from './../components/Yoast';

//const BASE_URL = process.env.REACT_APP_API_URL

const Naslovna = () => {

  const[page, setPage] = useState(null);
  const [yoastHeadJson, setYoastHeadJson] = useState(null);

  useEffect(() => {
    const fetchPage = async() => {
      try{
        const response = await fetch("https://front2.edukacija.online/backend/wp-json/wp/v2/pages/178?_embed");
        if(!response.ok){
          throw new Error('Ne mogu povući podatke');
        }
        const data = await response.json();
        setPage(data);
        setYoastHeadJson(data?.yoast_head_json)
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchPage();
  }, []);

  if(!page) return <p>Učitavanje...</p>;

  return (
    <>
      <Yoast yoastHeadJson={yoastHeadJson} />
      <Nav />
      <HeroSection 
      stranica={page} 
      fallback="https://placehold.co/600x400" 
      size="full" 
      />
      {/*<FeaturedImg page={page} fallback="https://placehold.co/600x400" size="full"  />*/}
      <div dangerouslySetInnerHTML={{ __html:page.content.rendered }} />
      <div className="row">
        <div className="col-md-12 map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6048.142158441964!2d19.001158779587325!3d45.226966727294915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c878313858ab3%3A0x419bbae0cd816d7!2sOroli%C4%8Dka%20ul.%2025%2C%2032242%2C%20Berak!5e1!3m2!1sen!2shr!4v1772559855008!5m2!1sen!2shr"
           width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade" title="mapa lokacije IVi-Catering"></iframe>
        </div>
      </div>

      <div className="usluge-feature-grid">
        <div className="wp-block-column">
          <h3 className="mb-3">Kontaktirajte nas</h3>
          <p className="mb-4">
            Rado ćemo saslušati vaše ideje i kreirati ponudu koja savršeno odgovara vašim potrebama.
          </p>
          <div className="text-center mb-2">
            <Link to="/kontakt" className="btn-contact-main">Kontaktirajte nas</Link>
          </div>
        </div>
      </div>
    </>
      
      
  );
};

export default Naslovna