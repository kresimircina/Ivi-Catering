import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { API_BASE_URL } from "../api";

import Yoast from './../components/Yoast';

const Onama = () => {

  const [page, setPage] = useState(null);
  const [yoastHeadJson, setYoastHeadJson] = useState(null);

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
    const fetchPage = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/v2/stranica?slug=onama&_embed`);
        if (!response.ok) {
          throw new Error('Ne mogu povući podatke');
        }
        const data = await response.json();
        if (data.length === 0) {
          throw new Error('Stranica nije pronađena');
        }
        setPage(data[0]);
        setYoastHeadJson(data[0]?.yoast_head_json);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchPage();
  }, []);

  if (!page) return <p>Učitavanje...</p>;

  const { hero, body } = extractHeroBlock(page.content.rendered);

  return (
    <>
      <Yoast yoastHeadJson={yoastHeadJson} />
      <HeroSection
        stranica={page}
        fallback="https://placehold.co/600x400"
        size="full"
        title={page.title.rendered}
        content={hero}
      />
      <div className="page-content onama-wp-content" dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
};

export default Onama