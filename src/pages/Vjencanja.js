import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import { Helmet } from "react-helmet-async";

//const BASE_URL = process.env.REACT_APP_API_URL;

const Vjencanja = () => {
 
    const {slug} = useParams();
    const [page, setPage] = useState(null);
    

        useEffect(() => {
            const fetchPage = async() => {
                try{
                    const response = await fetch(`https://front2.edukacija.online/backend/wp-json/wp/v2/eventi?slug=${slug}&_embed`);
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

    return (
        <>
            <Helmet>
                <title>{page.title.rendered}</title>
            </Helmet>
                <HeroSection 
                stranica={page} 
                fallback="https://placehold.co/600x400" 
                size="full" 
                />
            <div dangerouslySetInnerHTML={{ __html:page.content.rendered }}></div>
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