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



import p1 from "../assets/colchoes/plus/p1.webp";
import p2 from "../assets/colchoes/plus/p2.webp";
import p3 from "../assets/colchoes/plus/p3.webp";
import p4 from "../assets/colchoes/plus/p4.webp";

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

const imagensPlus = [
    { src: p1, alt: "Premium Visco", title: "Premium Visco", desc: "Fios de seda e espuma viscoelástica garantem noites de descanso profundo e de relaxamento absoluto." },
    { src: p2, alt: "Privilége Gel", title: "Privilége Gel", desc: "Dupla camada de conforto com espuma hipersoft e toque macio, perfeita para noites de sono renovador." },
    { src: p3, alt: "Eternitá Gel", title: "Eternitá Gel", desc: "Adapta-se ao corpo com frescor e elasticidade, oferecendo suporte ideal e conforto térmico constante." },
    { src: p4, alt: "Serenity Visco", title: "Serenity Visco", desc: "Viscose de bambu e espuma NASA abraçam o corpo, aliviando as pressões e melhorando a circulação." },
];

const Home = () => {
    return (
        <div>
            <ScrollToTop/>
            <Header/>
            <Carousel slides={slides1}/>
            <Marquee/>
            <Categorias/>
            <Produtos titulo={"O Que Todo Mundo Está Comprando!"} descCategoria={""} backgroundColor={"#FFFFFF"} color={"#80002D"} images={imagensPlus}/>
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