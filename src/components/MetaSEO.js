import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const MetaSEO = ({ 
  title, 
  description, 
  image, 
  fallbackTitle = 'Catering IVi',
  fallbackDesc = 'Profesionalne catering usluge za svadbe, private i poslovne događaje.'
}) => {
  const location = useLocation();
  const siteUrl = 'https://cateringivi.com';

  const finalTitle = title || fallbackTitle;
  const finalDesc = (description || fallbackDesc).substring(0, 155);
  const finalImage = image || `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={`${siteUrl}${location.pathname}`} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={finalImage} />
    </Helmet>
  );
};

export default MetaSEO;
