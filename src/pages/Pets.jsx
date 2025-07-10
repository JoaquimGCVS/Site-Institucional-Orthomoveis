import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Marquee from "../components/Marquee/Marquee";
import Produtos from "../components/Produtos/Produtos";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";

import pets3 from "../assets/colchoes/pets/3.webp";
import pets1 from "../assets/colchoes/pets/1.webp";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const imagensPets = [
    {
        src: pets3,
        alt: "Orthocrin Pet",
        title: "Orthocrin Pet",
        desc: "Espuma firme com capa impermeável e estrutura em madeira de reflorestamento. Ideal para conforto e higiene dos pets."
    },
    {
        src: pets1,
        alt: "Colchão Cama Pet Comfort",
        title: "Colchão Cama Pet Comfort",
        desc: "Espuma macia com capa lavável e tecido resistente. Conforto, praticidade e durabilidade para o descanso de cães e gatos em qualquer ambiente."
    }
];

const Pets = () => {
    return (
        <div>
            <ScrollToTop/>
            <Header/>
            <Marquee/>
            <Produtos titulo={"Categoria Pets"} descCategoria={"Conforto e praticidade para os pets. Estrutura em madeira, espumas firmes e capa higiênica garantem descanso seguro e resistente."} backgroundColor={"#FFFFFF"} color={"#80002D"} images={imagensPets}/>
            <WhatsappButton/>
            <Footer/>
        </div>
    );
};

export default Pets;