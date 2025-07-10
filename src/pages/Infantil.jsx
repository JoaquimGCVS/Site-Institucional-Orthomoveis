import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Marquee from "../components/Marquee/Marquee";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";

import kids1 from "../assets/colchoes/kids/1.webp";
import kids2 from "../assets/colchoes/kids/2.webp";


import stillo5 from "../assets/travesseiros/stillo/5.webp";
import meu1 from "../assets/travesseiros/meu/1.webp";
import meu2 from "../assets/travesseiros/meu/2.webp";
import meu3 from "../assets/travesseiros/meu/3.webp";
import meu4 from "../assets/travesseiros/meu/4.webp";
import Produtos from "../components/Produtos/Produtos";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const imagensColchoesKids = [
    {
        src: kids1,
        alt: "Royal Saúde Berço",
        title: "Royal Saúde Berço",
        desc: "Clássico colchão de berço com espuma ideal para o bebê. Dupla face e tecido delicado para conforto e segurança."
    },
    {
        src: kids2,
        alt: "Junior Luxo",
        title: "Junior Luxo",
        desc: "Colchão de berço tradicional em espuma D18, dupla face com um lado liso. Conforto firme e durável para o bebê."
    }
];

const imagensTravesseirosKids = [
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
    },
    {
            src: stillo5,
            alt: "Stillo Látex Kids",
            title: "Stillo Látex Kids",
            desc: "Travesseiro infantil com flocos de espuma HR. Ideal para crianças de até 2 anos. Medida: 28x35 cm, altura 10 cm."
    }
];

const Infantil = () => {
    return (
        <div>
            <ScrollToTop/>
            <Header/>
            <Marquee/>
            <WhatsappButton/>
            <Produtos titulo={"Colchões Kids"} descCategoria={"Espumas seguras e certificadas para proporcionar conforto ideal ao bebê. Modelos com dupla face e tecidos delicados."} backgroundColor={"#FFFFFF"} color={"#80002D"} images={imagensColchoesKids}/>
            <Produtos
                titulo="Travesseiros Kids"
                descCategoria="Acessórios exclusivos para crianças, desde o nascimento até a adolescência. Desenvolvidos com tecido antialérgico e Malha Belga Camomille, que possui fragrância natural para acalmar e relaxar. Respeitam a anatomia infantil e oferecem conforto seguro em todas as fases da infância."
                backgroundColor="#FFFFFF"
                color="#80002D"
                images={imagensTravesseirosKids}
            />
            <Footer/>
        </div>
    );
};

export default Infantil;