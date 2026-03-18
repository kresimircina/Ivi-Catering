const HeroSection = ({ stranica, fallback, size="full", title, content }) => {

  const selectedImg =
    stranica?._embedded["wp:featuredmedia"]?.[0]?.media_details.sizes?.[size]
      .source_url || fallback;

  return (
    <>
      <div
      className="hero-section"
      style={{backgroundImage: `url(${selectedImg})`}}
      >
        <div className="hero-overlay">
          <div className="hero-overlay-inner">
            {content ? (
              <div className="hero-content" dangerouslySetInnerHTML={{__html: content}} />
            ) : (
              <>
                {title && <h1 className="hero-title">{title}</h1>}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;