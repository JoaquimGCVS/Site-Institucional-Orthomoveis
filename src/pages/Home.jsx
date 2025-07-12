import Avaliacao from "../components/Avaliacao/Avaliacao";
import Carousel from "../components/Carousel/Carousel";
import Produtos from "../components/Produtos/Produtos";
import Categorias from "../components/Categorias/Categorias";
import Header from "../components/Header/Header";
import Marquee from "../components/Marquee/Marquee";
import Pagamento from "../components/Pagamento/Pagamento";
import Sobre from "../components/Sobre/Sobre";
import Titulo from "../components/Titulo/Titulo";
import Footer from "../components/Footer/Footer";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

import CC11 from "../assets/carousel1/CC1.1.webp";
import CC1 from "../assets/carousel1/CC1.webp";
import CC21 from "../assets/carousel1/CC2.1.webp";
import CC2 from "../assets/carousel1/CC2.webp";
import CC31 from "../assets/carousel1/CC3.1.webp";
import CC3 from "../assets/carousel1/CC3.webp";
import CC41 from "../assets/carousel1/CC4.1.webp";
import CC4 from "../assets/carousel1/CC4.webp";
import CC51 from "../assets/carousel1/CC5.1.webp";
import CC5 from "../assets/carousel1/CC5.webp";
import CC61 from "../assets/carousel1/CC6.1.webp";
import CC6 from "../assets/carousel1/CC6.webp";

import DD11 from "../assets/carousel2/DD1.1.webp";
import DD1 from "../assets/carousel2/DD1.webp";
import DD21 from "../assets/carousel2/DD2.1.webp";
import DD2 from "../assets/carousel2/DD2.webp";
import DD31 from "../assets/carousel2/DD3.1.webp";
import DD3 from "../assets/carousel2/DD3.webp";
import DD41 from "../assets/carousel2/DD4.1.webp";
import DD4 from "../assets/carousel2/DD4.webp";
import DD51 from "../assets/carousel2/DD5.1.webp";
import DD5 from "../assets/carousel2/DD5.webp";
import DD61 from "../assets/carousel2/DD6.1.webp";
import DD6 from "../assets/carousel2/DD6.webp";



import box1 from "../assets/box/1.webp";
import p2 from "../assets/colchoes/plus/p2.webp";
import ce3 from "../assets/colchoes/cespuma/3.webp";
import visco2 from "../assets/travesseiros/viscopillow/1.webp";
import Faixa from "../components/Faixa/Faixa";
import Seo from "../components/Seo/Seo";

const slides1 = [
  [CC11, CC1],
  [CC2, CC21],
  [CC31, CC3],
  [CC4, CC41],
  [CC51, CC5],
  [CC6, CC61],
];

const slides2 = [
  [DD11, DD1],
  [DD2, DD21],
  [DD31, DD3],
  [DD4, DD41],
  [DD51, DD5],
  [DD6, DD61],
];

const imagensMaisVendidos = [
    {       src: p2, 
            alt: "Privilége Gel", 
            title: "Privilége Gel", 
            desc: "Dupla camada de conforto com espuma hipersoft e toque macio, perfeita para noites de sono renovador e descanso profundo com frescor ideal." 
    },
    {
            src: box1,
            alt: "Box Baú",
            title: "Box Baú",
            desc: "Base com acabamento em couro ecológico e mecanismo a gás. Ideal para armazenar e suportar grande peso com segurança."
    },
    {
            src: ce3,
            alt: "Royal Saúde Plus Pillow Top",
            title: "Royal Saúde Plus Pillow Top",
            desc: "Modelo com Pillow Top, espumas certificadas e tecido Jacquard bamboo. Proporciona firmeza com altura de até 28 cm e dupla face."
    },
    {
            src: visco2,
            alt: "Viscopillow Alto",
            title: "Viscopillow Alto",
            desc: "Travesseiro de 15 cm de altura, com toque macio e suporte elevado, ideal para alinhamento postural e conforto contínuo. Para fronha 50x70."
    }
];

const Home = () => {
    return (
        <div>
            <Seo title="Home | Orthomóveis Colchões Orthocrin" />
            <ScrollToTop/>
            <Header/>
            <Carousel slides={slides1}/>
            <Marquee/>
            <Categorias/>
            <Produtos titulo={"O Que Todo Mundo Está Comprando!"} descCategoria={""} backgroundColor={"#FFFFFF"} color={"#80002D"} images={imagensMaisVendidos}/>
            <Avaliacao/>
            <Pagamento/>
            <Sobre/>
            <Titulo titulo="Descubra o Orthocrin perfeito para você." backgroundColor={"#80002D"} color={"#FFFFFF"}/>
            <Carousel slides={slides2}/>
            <Footer/>
            <WhatsappButton/>
        </div>
    );
};

export default Home;