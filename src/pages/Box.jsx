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
        desc1: "Sistema de abertura com pistão a gás garante levantamento suave e seguro do estrado superior.",
        desc2: "Acabamento em couro ecológico resistente a riscos e manchas facilita limpeza e manutenção diária.",
        desc3: "Capacidade de armazenamento generosa otimiza espaço do quarto mantendo organização. Estrutura reforçada suporta até 150kg com segurança."
    },
    {
        src: box2,
        alt: "Bibox Spring",
        title: "Bibox Spring",
        desc: "Produto 2 em 1 com cama auxiliar de molas ensacadas, ideal para quem busca conforto e praticidade sem abrir mão da qualidade no descanso diário.",
        srcModal: BB2,
        desc1: "Sistema 2 em 1 inovador combina base principal com cama auxiliar retrátil equipada com molas ensacadas independentes.",
        desc2: "Molas ensacadas na cama auxiliar proporcionam conforto equivalente à cama principal sem comprometer qualidade do sono.",
        desc3: "Solução inteligente para quartos de hóspedes ou crianças que maximiza funcionalidade sem ocupar espaço permanente."
    },
    {
        src: box3,
        alt: "Bibox Orthocrin",
        title: "Bibox Orthocrin",
        desc: "Cama auxiliar com espuma D28 e estrutura em madeira reflorestada. Solução prática e confortável para o dia a dia.",
        srcModal: BB3,
        desc1: "Cama auxiliar equipada com espuma de alta densidade D28 certificada que garante conforto firme e durabilidade.",
        desc2: "Estrutura fabricada com 100% madeira de reflorestamento certificada FSC contribuindo para sustentabilidade ambiental.",
        desc3: "Mecanismo de abertura simplificado permite uso rápido e prático. Ideal para quartos infantis e de visitas."
    },
    {
        src: box4,
        alt: "Bibox Eco",
        title: "Bibox Eco",
        desc: "Produto 2 em 1 com espuma D28, estrutura resistente em madeira reflorestada e acabamento em couro ecológico.",
        srcModal: BB4,
        desc1: "Combinação perfeita entre funcionalidade e sustentabilidade com madeira reflorestada certificada e couro ecológico.",
        desc2: "Espuma D28 na cama auxiliar oferece suporte firme adequado para uso frequente sem deformações.",
        desc3: "Acabamento em couro ecológico resistente facilita limpeza e garante durabilidade em ambientes com uso intenso."
    },
    {
        src: box5,
        alt: "Box Eco",
        title: "Box Eco",
        desc: "Base fixa resistente com estrutura em madeira reflorestada e acabamento em couro ecológico.",
        srcModal: BB5,
        desc1: "Base fixa robusta construída inteiramente com madeira de reflorestamento certificada para máxima resistência estrutural.",
        desc2: "Acabamento premium em couro ecológico de alta qualidade resiste ao desgaste diário mantendo aparência original.",
        desc3: "Design clean e elegante se adapta a qualquer decoração. Sustentabilidade sem comprometer qualidade ou durabilidade."
    },
    {
        src: box6,
        alt: "Box Sommier Plus Decor",
        title: "Box Sommier Plus Decor",
        desc: "Base decorativa com estrutura em madeira reflorestada e tecido de decoração. Durável, segura e resistente.",
        srcModal: BB6,
        desc1: "Base sommier decorativa que combina funcionalidade estrutural com elemento estético para valorização do ambiente.",
        desc2: "Tecido decorativo de alta qualidade oferece variedade de cores e texturas para harmonizar com qualquer estilo.",
        desc3: "Estrutura reforçada em madeira certificada garante estabilidade e segurança por muitos anos. União perfeita entre beleza e resistência."
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