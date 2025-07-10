import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Marquee from "../components/Marquee/Marquee";
import Produtos from "../components/Produtos/Produtos";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";

import box1 from "../assets/box/1.webp";
import box2 from "../assets/box/2.webp";
import box3 from "../assets/box/3.webp";
import box4 from "../assets/box/4.webp";
import box5 from "../assets/box/5.webp";
import box6 from "../assets/box/6.webp";

const imagensBox = [
    {
        src: box1,
        alt: "Box Baú",
        title: "Box Baú",
        desc: "Base com acabamento em couro ecológico e mecanismo a gás. Ideal para armazenar e suportar grande peso com segurança."
    },
    {
        src: box2,
        alt: "Bibox Spring",
        title: "Bibox Spring",
        desc: "Produto 2 em 1 com cama auxiliar de molas ensacadas. Prático e ideal para otimizar espaços."
    },
    {
        src: box3,
        alt: "Bibox Orthocrin",
        title: "Bibox Orthocrin",
        desc: "Cama auxiliar com espuma D28 e estrutura em madeira reflorestada. Solução prática e confortável para o dia a dia."
    },
    {
        src: box4,
        alt: "Bibox Eco",
        title: "Bibox Eco",
        desc: "Produto 2 em 1 com espuma D28, estrutura resistente em madeira reflorestada e acabamento em couro ecológico."
    },
    {
        src: box5,
        alt: "Box Eco",
        title: "Box Eco",
        desc: "Base fixa resistente com estrutura em madeira reflorestada e acabamento em couro ecológico."
    },
    {
        src: box6,
        alt: "Box Sommier Plus Decor",
        title: "Box Sommier Plus Decor",
        desc: "Base decorativa com estrutura em madeira reflorestada e tecido de decoração. Durável, segura e resistente."
    }
];

const Box = () => {
    return (
        <div>
            <Header/>
            <Marquee/>
            <Produtos
                titulo="Linha Box"
                descCategoria="Bases e camas auxiliares com estrutura reforçada, acabamento sofisticado e soluções inteligentes para otimizar seu espaço."
                backgroundColor="#FFFFFF"
                color="#80002D"
                images={imagensBox}
            />
            <WhatsappButton/>
            <Footer/>
        </div>
    );
};

export default Box;