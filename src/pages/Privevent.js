import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from "../components/Loader";
import HeroSection from "../components/HeroSection";
import Yoast from './../components/Yoast';
import { API_BASE_URL } from '../api';

import "./Blog.css"

//const BASE_URL = process.env.REACT_APP_API_URL;

const Privevent = () => {

    const [posts, setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect (() => {
        setLoading(true);
    
        
        fetch(`${API_BASE_URL}/v2/eventi?_embed`)
            .then(response => response.json())
            .then(
                (data) => {
                    setPosts(data);
                })
                .finally(() => setLoading (false));

        }, []
    );

    






    return (
    <>
      <Yoast yoastHeadJson={page.yoast_head_json} />
      <HeroSection 
        stranica={{_embedded: {"wp:featuredmedia": [{media_details: {sizes: {full: {source_url: "https://placehold.co/1200x600"}}}}]}}}
        fallback="https://placehold.co/600x400" 
        size="full"
        title="Privatni Eventi"
        content="<h1>Privatni Eventi</h1><p>Stvořite nezaboravne privatne događaje zajedno s nama</p>"
      />
      {loading && <Loader />}
      <div className="blog-page">
        <div className="container">
          <h1>Blog</h1>
          <div className="row">
            {posts.map((post) => {
              const image =
                post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes
                  ?.full?.source_url;
              return (
                <div key={post.id} className="col-md-4 mb-4 blog-post">
                  {image && (
                    <Link to={'/usluga/' + post.slug}>
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
                  <HeroSection 
                    stranica={page} 
                    fallback="https://placehold.co/600x400" 
                    size="full" 
                    />
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

export default Privevent;
