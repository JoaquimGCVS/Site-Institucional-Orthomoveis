import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Marquee from "../components/Marquee/Marquee";
import Produtos from "../components/Produtos/Produtos";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";

import stillo1 from "../assets/travesseiros/stillo/1.webp";
import stillo2 from "../assets/travesseiros/stillo/2.webp";
import stillo3 from "../assets/travesseiros/stillo/3.webp";
import stillo4 from "../assets/travesseiros/stillo/4.webp";
import stillo5 from "../assets/travesseiros/stillo/5.webp";

import visco1 from "../assets/travesseiros/viscopillow/1.webp";
import visco2 from "../assets/travesseiros/viscopillow/2.webp";
import visco3 from "../assets/travesseiros/viscopillow/3.webp";
import visco4 from "../assets/travesseiros/viscopillow/4.webp";

import nasa1 from "../assets/travesseiros/nasa/1.png";
import nasa2 from "../assets/travesseiros/nasa/2.png";
import nasa3 from "../assets/travesseiros/nasa/3.png";

import fiber1 from "../assets/travesseiros/fiberpillow/1.webp";
import fiber2 from "../assets/travesseiros/fiberpillow/2.webp";
import fiber3 from "../assets/travesseiros/fiberpillow/3.webp";

import fiberesp1 from "../assets/travesseiros/fiberpillowesp/1.webp";
import fiberesp2 from "../assets/travesseiros/fiberpillowesp/2.webp";
import fiberesp3 from "../assets/travesseiros/fiberpillowesp/3.webp";

import meu1 from "../assets/travesseiros/meu/1.webp";
import meu2 from "../assets/travesseiros/meu/2.webp";
import meu3 from "../assets/travesseiros/meu/3.webp";
import meu4 from "../assets/travesseiros/meu/4.webp";

const imagensStillo = [
    {
        src: stillo1,
        alt: "Freshpillow",
        title: "Freshpillow",
        desc: "Bolhas de gel que oferecem conforto e sensação de frescor. Altura de 12 cm, para fronha 50x70."
    },
    {
        src: stillo2,
        alt: "Stillo Látex Alto",
        title: "Stillo Látex Alto",
        desc: "Travesseiro com 15 cm de altura, indicado para quem prefere suporte elevado. Para fronha 50x70."
    },
    {
        src: stillo3,
        alt: "Stillo Látex Médio",
        title: "Stillo Látex Médio",
        desc: "Travesseiro com 12 cm de altura, ideal para quem busca conforto intermediário. Para fronha 50x70."
    },
    {
        src: stillo4,
        alt: "Stillo Látex Basic",
        title: "Stillo Látex Basic",
        desc: "Travesseiro básico de 10 cm de altura, com sustentação firme e confortável. Para fronha 50x70."
    },
    {
        src: stillo5,
        alt: "Stillo Látex Kids",
        title: "Stillo Látex Kids",
        desc: "Travesseiro infantil com flocos de espuma HR. Ideal para crianças de até 2 anos. Medida: 28x35 cm, altura 10 cm."
    }
];

const imagensViscopillow = [
    {
        src: visco1,
        alt: "Viscopillow Anatômico",
        title: "Viscopillow Anatômico",
        desc: "Apoio cervical com 15 cm de altura. Oferece sustentação anatômica ideal. Para fronha 50x70."
    },
    {
        src: visco2,
        alt: "Viscopillow Alto",
        title: "Viscopillow Alto",
        desc: "Travesseiro de 15 cm de altura, com toque macio e suporte elevado. Para fronha 50x70."
    },
    {
        src: visco3,
        alt: "Viscopillow Médio",
        title: "Viscopillow Médio",
        desc: "Travesseiro com 12 cm de altura. Suporte intermediário com conforto e frescor. Para fronha 50x70."
    },
    {
        src: visco4,
        alt: "Viscopillow Basic",
        title: "Viscopillow Basic",
        desc: "Travesseiro de 10 cm de altura. Macio, com alívio de pressão e toque suave. Para fronha 50x70."
    }
];

const imagensNasaViscoSoft = [
    {
        src: nasa1,
        alt: "Nasa Visco Soft Basic",
        title: "Nasa Visco Soft Basic",
        desc: "Travesseiro de 10 cm de altura. Firme e confortável, para quem prefere menor volume. Para fronha 50x70."
    },
    {
        src: nasa2,
        alt: "Nasa Visco Soft Médio",
        title: "Nasa Visco Soft Médio",
        desc: "Travesseiro com 12 cm de altura. Proporciona suporte intermediário e alívio anatômico. Para fronha 50x70."
    },
    {
        src: nasa3,
        alt: "Nasa Visco Soft Alto",
        title: "Nasa Visco Soft Alto",
        desc: "Travesseiro de 15 cm de altura. Sustentação máxima e conforto para quem dorme de lado. Para fronha 50x70."
    }
];

const imagensFiberpillow = [
    {
        src: fiber1,
        alt: "Fiberpillow Special",
        title: "Fiberpillow Special",
        desc: "Travesseiro de 15 cm de altura. Sustentação firme e sensação de conforto extremo. Para fronha 50x70."
    },
    {
        src: fiber2,
        alt: "Fiberpillow Classic",
        title: "Fiberpillow Classic",
        desc: "Travesseiro de 15 cm de altura. Conforto médio e toque suave. Para fronha 50x70."
    },
    {
        src: fiber3,
        alt: "Fiberpillow Basic",
        title: "Fiberpillow Basic",
        desc: "Travesseiro de 10 cm de altura. Compacto e confortável. Para fronha 60x40."
    }
];

const imagensFiberpillowEspeciais = [
    {
        src: fiberesp1,
        alt: "Fiberpillow King",
        title: "Fiberpillow King",
        desc: "Travesseiro de 15 cm de altura. Conforto firme com enchimento 100% fibra siliconada. Para fronha 50x90."
    },
    {
        src: fiberesp2,
        alt: "Softpillow",
        title: "Softpillow",
        desc: "Travesseiro com sensação de conforto firme e tecido com alto teor de algodão. Para fronha 50x70."
    },
    {
        src: fiberesp3,
        alt: "Travesseiro de Corpo",
        title: "Travesseiro de Corpo",
        desc: "Travesseiro de 40 cm de altura. Conforto firme com enchimento em flocos de espuma. Para fronha 130x40."
    }
]

const imagensMeuPrimeiroOrthocrin = [
    {
        src: meu1,
        alt: "Meu Primeiro Orthocrin Látex",
        title: "Meu Primeiro Orthocrin Látex",
        desc: "Travesseiro de 3 cm de altura. Ideal para o primeiro ano de vida. Medida: 30x40 cm."
    },
    {
        src: meu2,
        alt: "Meu Primeiro Orthocrin Visco",
        title: "Meu Primeiro Orthocrin Visco",
        desc: "Travesseiro de 4 cm de altura. Ideal para os primeiros 4 anos da criança. Medida: 35x55 cm."
    },
    {
        src: meu3,
        alt: "Meu Primeiro Orthocrin Fibra",
        title: "Meu Primeiro Orthocrin Fibra",
        desc: "Travesseiro de 10 cm de altura. Tecido 200 fios. Ideal para crianças de 3 a 7 anos. Medida: 40x60 cm."
    },
    {
        src: meu4,
        alt: "Meu Orthocrin Visco",
        title: "Meu Orthocrin Visco",
        desc: "Travesseiro de 7 cm de altura. Indicado para crianças de 7 a 12 anos. Medida: 48x68 cm."
    }
];

const Travesseiros = () => {
    return (
        <div>
            <Header/>
            <Marquee/>
            <Produtos
                titulo="Linha Stillo"
                descCategoria="Travesseiros de alta qualidade para todos os perfis, com opções de altura, conforto e tecnologia para noites perfeitas."
                backgroundColor="#FFFFFF"
                color="#80002D"
                images={imagensStillo}
            />
            <Produtos
                titulo="Linha Viscopillow"
                descCategoria="Travesseiros com espuma viscoelástica que proporcionam alívio de pressão e acomodam ombros e pescoço. Ideais para conforto anatômico, frescor e toque macio com fronha lavável."
                backgroundColor="#FFFFFF"
                color="#80002D"
                images={imagensViscopillow}
            />
            <Produtos
                titulo="Linha Nasa Visco Soft"
                descCategoria="Travesseiros ergonômicos com espuma viscoelástica de alta densidade (D24), que se molda ao formato da cabeça e pescoço."
                backgroundColor="#FFFFFF"
                color="#80002D"
                images={imagensNasaViscoSoft}
            />
            <Produtos
                titulo="Linha Fiberpillow"
                descCategoria="Travesseiros com enchimento em fibra siliconada, ideais para quem busca conforto extremo. Possuem toque macio, são laváveis e evitam a sensação de umidade por meio do tecido Malha Dry."
                backgroundColor="#FFFFFF"
                color="#80002D"
                images={imagensFiberpillow}
            />
            <Produtos
                titulo="Fiberpillow Especiais"
                descCategoria="Acessórios que auxiliam na ergonomia do sono. Confeccionados com tecido 200 fios ou algodão com alto teor, oferecem sensação de conforto firme e toque suave. Modelos laváveis com enchimento em fibra siliconada ou flocos de espuma."
                backgroundColor="#FFFFFF"
                color="#80002D"
                images={imagensFiberpillowEspeciais}
            />
            <Produtos
                titulo="Meu Primeiro Orthocrin"
                descCategoria="Acessórios exclusivos para crianças, desde o nascimento até a adolescência. Desenvolvidos com tecido antialérgico e Malha Belga Camomille, que possui fragrância natural para acalmar e relaxar. Respeitam a anatomia infantil e oferecem conforto seguro em todas as fases da infância."
                backgroundColor="#FFFFFF"
                color="#80002D"
                images={imagensMeuPrimeiroOrthocrin}
            />
            <WhatsappButton/>
            <Footer/>
        </div>
    );
};

export default Travesseiros;