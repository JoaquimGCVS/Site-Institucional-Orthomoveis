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
        desc1: "Colchão confortável, resistente e prático, desenvolvido especialmente para pets. Seu design adapta-se facilmente a qualquer ambiente, oferecendo aconchego e facilidade de limpeza.",
        desc2: "Possui estofamento em espuma de alta durabilidade produzida pela própria Orthocrin, tecido resistente e antialérgico, e capa impermeável higiênica. A estrutura é feita com madeira reflorestada de eucalipto, com pés reguladores para estabilidade.",
        desc3: "Disponível em dois tamanhos: grande (80x100 cm) e pequena (60x80 cm), com altura total de 22 cm incluindo 6 cm dos pés."
    },
    {
        src: pets1,
        alt: "Colchão Cama Pet Comfort",
        title: "Colchão Cama Pet Comfort",
        desc: "Espuma macia com capa lavável e tecido resistente. Conforto, praticidade e durabilidade para o descanso de cães e gatos em qualquer ambiente.",
        srcModal: pets1,
        desc1: "Cama pet com design retangular e contorno acolchoado, aproveitando melhor o espaço. É leve, fácil de transportar e ideal para oferecer um local aconchegante em qualquer ambiente.",
        desc2: "Fabricada em tecido durável e de fácil limpeza, com preenchimento em fibra siliconada, é macia, respirável e mantém a temperatura ideal em qualquer estação. O tecido cluster de microfibra possui textura suave, garantindo conforto extra.",
        desc3: "Disponível em dois tamanhos: grande (80x65 cm) e pequena (55x45 cm). Ajuda a prevenir alergias, alivia o estresse do pet e é lavável para fácil manutenção."
    }
];

const Pets = () => {
    return (
        <div>
            <Seo title="Pets | Orthomóveis Colchões Orthocrin"
                seoImage="/LogoLoja.webp"
                socialImage="/logocomfundo2.webp" />
            <Marquee />
            <Produtos titulo={"Categoria Pets"} descCategoria={"Conforto e praticidade para os pets. Estrutura em madeira, espumas firmes e capa higiênica garantem descanso seguro e resistente."} backgroundColor={"#FFFFFF"} color={"#80002D"} images={imagensPets} />
        </div>
    );
};

export default Pets;