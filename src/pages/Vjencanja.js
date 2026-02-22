import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';


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

    <div dangerouslySetInnerHTML={{ __html:page.content.rendered }}></div>
  );
};

export default Vjencanja