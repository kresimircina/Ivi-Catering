

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from "../components/Loader";

import "./Blog.css"

//const BASE_URL = process.env.REACT_APP_API_URL;

const Usluge = () => {

    const [posts, setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [eventi, setEventi] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState("")
    

    useEffect (() => {
        setLoading(true);
    
        
            fetch("https://front2.edukacija.online/backend/wp-json/wp/v2/eventi")
            .then(response => response.json())
            .then(
                (data) => {
                    setEventi(data);
                })
                .finally(() => setLoading (false));

        }, []
    );

    useEffect (() => {
        setLoading(true);
    
        
            let url ="https://front2.edukacija.online/backend/wp-json/wp/v2/eventi?_embed";

            if(selectedEvent) url +="&eventi" + selectedEvent;
            



            fetch(url)
            .then(response => response.json())
            .then(
                (data) => {
                    setEventi(data);
                })
                .finally(() => setLoading (false));

        }, [selectedEvent]
    );
    






    return (
    <>
      {loading && <Loader />}
      <div className="blog-page">
        <div className="container">
          <h1>Usluge</h1>
          <div className="row">
            {posts.map((post) => {
              const image =
                post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes
                  ?.full?.source_url;
              return (
                <div key={post.id} className="col-md-4 mb-4 blog-post">
                  {image && (
                    <Link to={'/usluge/' + post.slug}>
                  <img
                      src={image}
                      className="mb-3"
                      alt={post.title.rendered}
                    />
                    </Link>
                  )}
                  <Link to={'/usluga/' + post.slug}>
                    <h2>{post.title.rendered}</h2>
                  </Link>
                  <div
                    dangerouslySetInnerHTML={{__html: post.excerpt.rendered }}
                  />
                  <p>
                    {post._embedded?.author?.[0]?.name}|{" "}
                    {new Date(post.date).toLocaleDateString("hr-HR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
    



export default Usluge
