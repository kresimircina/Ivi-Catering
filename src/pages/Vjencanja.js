import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
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
            
            <div dangerouslySetInnerHTML={{ __html:page.content.rendered }}></div>
            <div className="container usluge-feature-grid d-flex gap-3 align-items-center justify-content-center">
                <div className="row">
                    <div className="col-md-6 gap-3 ps-4 max-466">
                        <h3 className="mb-3">Kontaktirajte nas</h3>
                        <p className="mb-4">Rado ćemo saslušati vaše ideje i kreirati ponudu koja savršeno odgovara vašim potrebama. 
                            </p>
                    </div>


                    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div className="text-center mb-2">
                             <Link to="/kontakt" className="btn-contact-main">Kontaktirajte nas</Link>
                        </div>
                    </div>
                </div>

                
            </div>
            
        </>
    
  );
};

export default Vjencanja