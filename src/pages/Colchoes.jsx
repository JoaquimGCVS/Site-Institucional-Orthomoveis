import Header from "../components/Header/Header";
import Marquee from "../components/Marquee/Marquee";
import Produtos from "../components/Produtos/Produtos";

import p1 from "../assets/colchoes/plus/p1.webp";
import p2 from "../assets/colchoes/plus/p2.webp";
import p3 from "../assets/colchoes/plus/p3.webp";
import p4 from "../assets/colchoes/plus/p4.webp";

import c1 from "../assets/colchoes/classica/1.webp";
import c2 from "../assets/colchoes/classica/2.webp";
import c3 from "../assets/colchoes/classica/3.webp";
import c4 from "../assets/colchoes/classica/4.webp";
import c5 from "../assets/colchoes/classica/5.webp";
import c6 from "../assets/colchoes/classica/6.webp";
import c7 from "../assets/colchoes/classica/7.webp";

import b1 from "../assets/colchoes/basic/1.webp";
import b2 from "../assets/colchoes/basic/2.webp";
import b3 from "../assets/colchoes/basic/3.webp";
import b4 from "../assets/colchoes/basic/4.webp";
import b5 from "../assets/colchoes/basic/5.webp";

import ce1 from "../assets/colchoes/cespuma/1.webp";
import ce2 from "../assets/colchoes/cespuma/2.webp";
import ce3 from "../assets/colchoes/cespuma/3.webp";
import ce4 from "../assets/colchoes/cespuma/4.webp";

import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const imagensPlus = [
    { src: p1, alt: "Premium Visco", title: "Premium Visco", desc: "Fios de seda e espuma viscoelástica garantem noites de descanso profundo e de relaxamento absoluto." },
    { src: p2, alt: "Privilége Gel", title: "Privilége Gel", desc: "Dupla camada de conforto com espuma hipersoft e toque macio, perfeita para noites de sono renovador." },
    { src: p3, alt: "Eternitá Gel", title: "Eternitá Gel", desc: "Adapta-se ao corpo com frescor e elasticidade, oferecendo suporte ideal e conforto térmico constante." },
    { src: p4, alt: "Serenity Visco", title: "Serenity Visco", desc: "Viscose de bambu e espuma NASA abraçam o corpo, aliviando as pressões e melhorando a circulação." },
];

const imagensClassica = [
    { src: c1, alt: "Exception plus", title: "Exception plus", desc: "Molas ergonômicas e espumas confortáveis que garantem elasticidade, suporte ideal e noites revigorantes e tranquilas." },
    { src: c2, alt: "Supreme visco", title: "Supreme visco", desc: "Pillow Top com espuma viscoelástica que alivia pressões e oferece suporte ideal para um sono profundo e revigorante." },
    { src: c3, alt: "Bellagio gel", title: "Bellagio gel", desc: "Espuma HR Gel que proporciona frescor e conforto para a coluna, com leveza e noites agradáveis para todos os dias." },
    { src: c4, alt: "Sense", title: "Sense", desc: "Espuma hipermacia e tecido sustentável 2nd Life que alinham a coluna e garantem conforto suave e prolongado." },
    { src: c5, alt: "Splendor top", title: "Splendor top", desc: "Pillow Top com molas ensacadas que oferecem alinhamento perfeito e suporte extra para um descanso equilibrado." },
    { src: c6, alt: "Splendor", title: "Splendor", desc: "Espuma convencional e molas ensacadas com tecnologia Purotex®, para conforto firme e frescor natural prolongado." },
    { src: c7, alt: "Royal saúde anatomic power", title: "Royal saúde anatomic power", desc: "Molas ensacadas e espuma de alta densidade que proporcionam firmeza, alinhamento corporal e noites sem desconforto." },
];

const imagensBasic = [
    {src: b1, alt: "Basic Pillow Top", title: "Pillow Top", desc: "Pillow top com conforto extra e molas ensacadas, garantindo suporte e maciez no descanso diário."
    },
    {src: b2, alt: "Basic Real Black", title: "Real Black", desc: "Versão elegante com pillow top e molas ensacadas, oferecendo maciez e sustentação."
    },
    {src: b3, alt: "Basic Millenium", title: "Millenium", desc: "Molas superlastic e espuma flexível que alinham a coluna, proporcionando noites mais confortáveis."
    },
    {src: b4, alt: "Basic Moush", title: "Moush", desc: "Espuma certificada com alta densidade, mais flexível e firme, ideal para conforto e alinhamento postural."
    },
    {src: b5, alt: "Basic Diamante", title: "Diamante", desc: "Espuma de alta densidade com dupla face e tecido resistente, para sustentar a coluna com durabilidade."
    }
];

const imagensClassicaEspuma = [
    {
        src: ce1,
        alt: "Royal Saúde Plush",
        title: "Royal Saúde Plush",
        desc: "Espuma certificada D33, toque aveludado e conforto intermediário, com tecido malha soft e altura de 25 cm para um sono equilibrado."
    },
    {
        src: ce2,
        alt: "Royal Saúde Ultra",
        title: "Royal Saúde Ultra",
        desc: "Espuma certificada com tecido malha bamboo e conforto firme, oferecendo altura de até 25 cm para suporte e frescor ideal."
    },
    {
        src: ce3,
        alt: "Royal Saúde Plus Pillow Top",
        title: "Royal Saúde Plus Pillow Top",
        desc: "Modelo com Pillow Top, espumas certificadas e tecido Jacquard bamboo. Proporciona firmeza com altura de até 28 cm e dupla face."
    },
    {
        src: ce4,
        alt: "Royal Saúde Plus",
        title: "Royal Saúde Plus",
        desc: "Espuma 100% certificada, conforto firme, dupla face e tecido Jacquard bamboo, com alturas variadas para máxima adaptação."
    }
];


const Colchoes = () => {
    return (
        <div>
            <ScrollToTop/>
            <Header/>
            <Marquee/>
            <Produtos titulo={"Categoria Clássica Plus"} descCategoria={"Conforto premium com tecnologia belga, espuma hipersoft e toque macio para um sono profundo e renovador."} backgroundColor={"#FFFFFF"} color={"#80002D"} images={imagensPlus}/>
            <Produtos titulo={"Categoria Clássica"} descCategoria={"Conforto, tecnologia e design para noites tranquilas, com modelos que se adaptam ao corpo e garantem suporte ideal."} backgroundColor={"#FFFFFF"} color={"#80002D"} images={imagensClassicaEspuma}/>
            <Produtos titulo={"Categoria Clássica de Espuma"} descCategoria={"Modelos com estrutura 100% em espuma certificada, combinando suporte firme e conforto contínuo. Ideal para quem busca qualidade, durabilidade e um sono restaurador com ótimo custo-benefício."} backgroundColor={"#FFFFFF"} color={"#80002D"} images={imagensPlus}/>
            <Produtos titulo={"Categoria Basic"} descCategoria={"Design essencial com conforto e praticidade para o dia a dia, unindo qualidade e suporte ideal ao corpo."} backgroundColor={"#FFFFFF"} color={"#80002D"} images={imagensBasic}/>
            <Produtos titulo={"Categoria Sllip"} descCategoria={"Conforto premium com tecnologia belga, espuma hipersoft e toque macio para um sono profundo e renovador."} backgroundColor={"#FFFFFF"} color={"#80002D"} images={imagensPlus}/>
            <Produtos titulo={"Categoria Ortopédica"} descCategoria={"Conforto premium com tecnologia belga, espuma hipersoft e toque macio para um sono profundo e renovador."} backgroundColor={"#FFFFFF"} color={"#80002D"} images={imagensPlus}/>

            <Footer/>
        </div>
    );
};

export default Colchoes;