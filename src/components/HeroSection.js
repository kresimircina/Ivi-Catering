const HeroSection = ({ stranica, fallback, size="full" }) => {

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
        </div>
      </div>
    </>
  );
};

export default HeroSection;