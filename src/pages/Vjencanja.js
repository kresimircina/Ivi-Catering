import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import { Helmet } from "react-helmet-async";
import { API_BASE_URL } from "../api";

//const BASE_URL = process.env.REACT_APP_API_URL;

const Vjencanja = () => {
 
    const {slug} = useParams();
    const [page, setPage] = useState(null);
    
    const extractHeroBlock = (html) => {
      if (!html) return { hero: "", body: "" };
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const heroBlock = doc.querySelector(".hero-section-title");
      const hero = heroBlock ? heroBlock.outerHTML : "";
      if (heroBlock) heroBlock.remove();
      return { hero, body: doc.body.innerHTML };
    };

        useEffect(() => {
            const fetchPage = async() => {
                try{
                    const response = await fetch(`${API_BASE_URL}/v2/eventi?slug=${slug}&_embed`);
                    if(!response.ok){
                        throw new Error("Ne mogu povući podatke");
                    }
                    const data = await response.json();
                    setPage(data[0]);
                    
                } catch(err) {
                console.log(err.message);
                
                }
            }

            fetchPage();
        }, [slug]
    );

    if(!page) return <p>Učitavanje</p>;

    const { hero, body } = extractHeroBlock(page.content.rendered);

    return (
        <>
            <Helmet>
                <title>{page.title.rendered}</title>
            </Helmet>
                <HeroSection 
                stranica={page} 
                fallback="https://placehold.co/600x400" 
                size="full"
                title={page.title.rendered}
                content={hero}
                />
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
            <div className="usluge-feature-grid">
                <div className="wp-block-column">
                    <h3 className="mb-3">ZATRAŽITE PONUDU</h3>
                    <p className="mb-4">
                        Imate upit ili želite znati više?
                        Predlažemo da nas kontaktirate.
                        Na svaki vaš upit odgovorit ćemo u najbržem mogućem roku.
                    </p>
                    <div className="text-center mb-2">
                        <Link to="/kontakt" className="btn-contact-main">Kontaktirajte nas</Link>
                    </div>
                </div>
            </div>
            
        </>
    
  );
};

export default Vjencanja