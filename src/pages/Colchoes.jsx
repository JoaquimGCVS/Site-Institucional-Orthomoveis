import Header from "../components/Header/Header";
import Marquee from "../components/Marquee/Marquee";
import Produtos from "../components/Produtos/Produtos";
import Titulo from "../components/Titulo/Titulo";

import p1 from "../assets/colchoes/plus/p1.webp";
import p2 from "../assets/colchoes/plus/p2.webp";
import p3 from "../assets/colchoes/plus/p3.webp";

const imagensPlus = [
    { src: p1, alt: "Colchão Plus 1", title: "Colchão Plus 1", desc: "Descrição do Colchão Plus 1" },
    { src: p2, alt: "Colchão Plus 2", title: "Colchão Plus 2", desc: "Descrição do Colchão Plus 2" },
    { src: p3, alt: "Colchão Plus 3", title: "Colchão Plus 3", desc: "Descrição do Colchão Plus 3" },
];

const Colchoes = () => {
    return (
        <div>
            <Header/>
            <Marquee/>
            <Titulo titulo="Categoria Clássica Plus" backgroundColor={"#000000"} color={"#FFFFFF"}/>
            <Produtos backgroundColor={"#000000"} color={"#FFFFFF"} images={imagensPlus}/>
        </div>
    );
};

export default Colchoes;