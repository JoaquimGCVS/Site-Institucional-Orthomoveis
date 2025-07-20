import { useEffect } from "react";

const Seo = ({
  title = "Orthomóveis Colchões Orthocrin",
  description = "Distribuidor autorizado Orthocrin desde 1972! Encontre os melhores preços em colchões de Belo Horizonte. Conforto e qualidade para noites de sono perfeitas. Compre já o seu!",
  seoImage = "/LogoLoja.webp", // Imagem para Google/SEO
  socialImage = "/logocomfundo2.webp", // Imagem para redes sociais
  url = "https://www.orthomoveiscolchoes.com.br"
}) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name, content, property = false) => {
      let meta = document.querySelector(
        property ? `meta[property='${name}']` : `meta[name='${name}']`
      );
      if (!meta) {
        meta = document.createElement("meta");
        if (property) meta.setAttribute("property", name);
        else meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:image", socialImage, true); 
    setMeta("og:url", url, true);
    setMeta("og:type", "website", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", socialImage);
    setMeta("geo.region", "BR-MG");
    setMeta("geo.placename", "Belo Horizonte");
    
    setMeta("image", seoImage);
  }, [title, description, seoImage, socialImage, url]);

  return null;
};

export default Seo;