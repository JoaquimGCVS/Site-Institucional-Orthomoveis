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
        desc1: "Base resistente para colchão com amplo espaço de armazenamento, unindo organização e sofisticação. Seu design elegante oferece solução prática para guardar roupas de cama, travesseiros, cobertores e outros itens.",
        desc2: "Possui mecanismo de abertura com mola a gás para praticidade e segurança, estrutura de madeira reflorestada de eucalipto e couro ecológico com costura dupla para durabilidade. É desenvolvido para suportar grandes cargas, garantindo estabilidade e conforto.",
        desc3: "Tem altura total de 37 cm, profundidade interna de 24 cm e está disponível nos tamanhos solteiro, solteiro plus, casal, queen e king bipartido."
    },
    {
        src: box2,
        alt: "Bibox Spring",
        title: "Bibox Spring",
        desc: "Produto 2 em 1 com cama auxiliar de molas ensacadas, ideal para quem busca conforto e praticidade sem abrir mão da qualidade no descanso diário.",
        srcModal: BB2,
        desc1: "A Base Box com Cama Auxiliar Bibox Orthocrin é um produto 2 em 1 com estrutura de molas ensacadas que garante estabilidade de movimentos. A parte inferior se transforma em um novo colchão, ideal para espaços pequenos ou visitas.",
        desc2: "A estrutura superior é feita com madeira reflorestada de eucalipto, oferecendo resistência e sustentabilidade. A cama auxiliar possui molas ensacadas com tecnologia suíça, tampo em Malha Soft importada e espuma D26, suportando até 90 kg.",
        desc3: "Está disponível nos tamanhos Solteiro, Solteiro King e Solteiro Plus (Viúva), cada um com medidas específicas. O box tem 32 cm de altura mais pés, e o colchão auxiliar possui certificação Selo Inmetro."
    },
    {
        src: box3,
        alt: "Bibox Orthocrin",
        title: "Bibox Orthocrin",
        desc: "Cama auxiliar com espuma D28 e estrutura em madeira reflorestada. Solução prática e confortável para o dia a dia.",
        srcModal: BB3,
        desc1: "Substitui as camas de madeira tradicionais de forma moderna e sofisticada, ajudando a otimizar o espaço. Necessita de colchão apenas na parte superior, adquirido separadamente.",
        desc2: "Possui estrutura de madeira reflorestada com tratamento anticupim e tecido bordado resistente e macio. A cama auxiliar tem estrutura de madeira com camada de espuma D28 de 7 cm de altura.",
        desc3: "O box mede 26 cm de altura mais 13 cm dos pés, totalizando 39 cm. Está disponível em tamanhos Solteiro, Solteiro King e Solteiro Plus, fazendo parte da linha Bibox da Orthocrin, que une conforto, praticidade e estética."
    },
    {
        src: box4,
        alt: "Bibox Eco",
        title: "Bibox Eco",
        desc: "Produto 2 em 1 com espuma D28, estrutura resistente em madeira reflorestada e acabamento em couro ecológico.",
        srcModal: BB4,
        desc1: "Substitui as camas de madeira tradicionais de forma moderna e sofisticada, ajudando a otimizar o espaço. Requer colchão apenas na parte superior, que deve ser adquirido separadamente.",
        desc2: "Possui estrutura de madeira reflorestada com revestimento em courino. A cama auxiliar conta com estrutura de madeira e camada de espuma D28 de 7 cm de altura.",
        desc3: "O box mede 26 cm de altura mais 13 cm dos pés, totalizando 39 cm. Está disponível nos tamanhos Solteiro, Solteiro King e Solteiro Plus, com medidas específicas para a cama auxiliar."
    },
    {
        src: box5,
        alt: "Box Eco",
        title: "Box Eco",
        desc: "Base fixa resistente com estrutura em madeira reflorestada e acabamento em couro ecológico.",
        srcModal: BB5,
        desc1: "Base fixa robusta construída inteiramente com madeira de reflorestamento certificada para máxima resistência estrutural.",
        desc2: "Acabamento premium em couro ecológico de alta qualidade resiste ao desgaste diário mantendo aparência original.",
        desc3: "A cama box tem 24 cm de altura mais 13 cm dos pés, totalizando 37 cm. Está disponível nos tamanhos Solteiro, Solteiro Plus, Casal, Queen e King, com medidas específicas para cada modelo."
    },
    {
        src: box6,
        alt: "Box Sommier Plus Decor",
        title: "Box Sommier Plus Decor",
        desc: "Base decorativa com estrutura em madeira reflorestada e tecido de decoração. Durável, segura e resistente.",
        srcModal: BB6,
        desc1: "O box Orthocrin é produzido com matérias-primas nobres e substitui as camas de madeira de forma moderna e sofisticada. Está disponível nas variações tradicional, alta e baixa, sendo ideal para otimizar espaço.",
        desc2: "Possui estrutura em madeira reflorestada com revestimento em tecido de decoração. Conta com faixa lisa, lateral estofada, pés de madeira e selo Pet Friendly, garantindo resistência às patinhas e unhas de cães e gatos.",
        desc3: "A altura total é de 37 cm, sendo 24 cm da cama box mais 13 cm dos pés."
    }
];

const Box = () => {
    return (
        <div>
            <Seo title="Box | Orthomóveis Colchões Orthocrin"
                seoImage="/LogoLoja.webp"
                socialImage="/logocomfundo2.webp" />
            <Marquee />
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