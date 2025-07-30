import Marquee from "../components/Marquee/Marquee";
import Produtos from "../components/Produtos/Produtos";

import pets3 from "../assets/colchoes/pets/3.webp";
import pets1 from "../assets/colchoes/pets/1.webp";
import Seo from "../components/Seo/Seo";

import P1 from "../assets/modais/colchoes/pets/P1.webp";

const imagensPets = [
    {
        src: pets3,
        alt: "Orthocrin Pet",
        title: "Orthocrin Pet",
        desc: "Espuma firme com capa impermeável e estrutura em madeira de reflorestamento. Ideal para conforto e higiene dos pets.",
        srcModal: P1,
        descModal: ""
    },
    {
        src: pets1,
        alt: "Colchão Cama Pet Comfort",
        title: "Colchão Cama Pet Comfort",
        desc: "Espuma macia com capa lavável e tecido resistente. Conforto, praticidade e durabilidade para o descanso de cães e gatos em qualquer ambiente.",
        srcModal: pets1,
        descModal: ""
    }
];

const Pets = () => {
    return (
        <div>
            <Seo title="Pets | Orthomóveis Colchões Orthocrin" 
                seoImage="/LogoLoja.webp"
                socialImage="/logocomfundo2.webp"/>
            <Marquee/>
            <Produtos titulo={"Categoria Pets"} descCategoria={"Conforto e praticidade para os pets. Estrutura em madeira, espumas firmes e capa higiênica garantem descanso seguro e resistente."} backgroundColor={"#FFFFFF"} color={"#80002D"} images={imagensPets}/>
        </div>
    );
};

export default Pets;