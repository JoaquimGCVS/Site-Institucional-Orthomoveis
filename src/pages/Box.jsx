import Marquee from "../components/Marquee/Marquee";
import Produtos from "../components/Produtos/Produtos";

import box1 from "../assets/box/1.webp";
import box2 from "../assets/box/2.webp";
import box3 from "../assets/box/3.webp";
import box4 from "../assets/box/4.webp";
import box5 from "../assets/box/5.webp";
import box6 from "../assets/box/6.webp";

import BB1 from "../assets/modais/box/BB1.webp";
import BB2 from "../assets/modais/box/BB2.webp";
import BB3 from "../assets/modais/box/BB3.webp";
import BB4 from "../assets/modais/box/BB4.webp";
import BB5 from "../assets/modais/box/BB5.webp";
import BB6 from "../assets/modais/box/BB6.webp";

import Seo from "../components/Seo/Seo";

const imagensBox = [
    {
        src: box1,
        alt: "Box Baú",
        title: "Box Baú",
        desc: "Base com acabamento em couro ecológico e mecanismo a gás. Ideal para armazenar e suportar grande peso com segurança.",
        srcModal: BB1,
        descModal: ""
    },
    {
        src: box2,
        alt: "Bibox Spring",
        title: "Bibox Spring",
        desc: "Produto 2 em 1 com cama auxiliar de molas ensacadas, ideal para quem busca conforto e praticidade sem abrir mão da qualidade no descanso diário.",
        srcModal: BB2,
        descModal: ""
    },
    {
        src: box3,
        alt: "Bibox Orthocrin",
        title: "Bibox Orthocrin",
        desc: "Cama auxiliar com espuma D28 e estrutura em madeira reflorestada. Solução prática e confortável para o dia a dia.",
        srcModal: BB3,
        descModal: ""
    },
    {
        src: box4,
        alt: "Bibox Eco",
        title: "Bibox Eco",
        desc: "Produto 2 em 1 com espuma D28, estrutura resistente em madeira reflorestada e acabamento em couro ecológico.",
        srcModal: BB4,
        descModal: ""
    },
    {
        src: box5,
        alt: "Box Eco",
        title: "Box Eco",
        desc: "Base fixa resistente com estrutura em madeira reflorestada e acabamento em couro ecológico.",
        srcModal: BB5,
        descModal: ""
    },
    {
        src: box6,
        alt: "Box Sommier Plus Decor",
        title: "Box Sommier Plus Decor",
        desc: "Base decorativa com estrutura em madeira reflorestada e tecido de decoração. Durável, segura e resistente.",
        srcModal: BB6,
        descModal: ""
    }
];

const Box = () => {
    return (
        <div>
            <Seo title="Box | Orthomóveis Colchões Orthocrin" 
                seoImage="/LogoLoja.webp"
                socialImage="/logocomfundo2.webp"/>
            <Marquee/>
            <Produtos
                titulo="Linha Box"
                descCategoria="Bases e camas auxiliares com estrutura reforçada, acabamento sofisticado e soluções inteligentes para otimizar seu espaço."
                backgroundColor="#FFFFFF"
                color="#80002D"
                images={imagensBox}
            />
        </div>
    );
};

export default Box;