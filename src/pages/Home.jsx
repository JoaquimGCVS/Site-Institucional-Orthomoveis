import Avaliacao from "../components/Avaliacao/Avaliacao";
import Carousel from "../components/Carousel/Carousel";
import Produtos from "../components/Produtos/Produtos";
import Categorias from "../components/Categorias/Categorias";
import Marquee from "../components/Marquee/Marquee";
import Pagamento from "../components/Pagamento/Pagamento";
import Sobre from "../components/Sobre/Sobre";
import Titulo from "../components/Titulo/Titulo";

import CC11 from "../assets/carousel1/CC1.1.webp";
import CC1 from "../assets/carousel1/CC1.webp";
import CC21 from "../assets/carousel1/CC2.1.webp";
import CC2 from "../assets/carousel1/CC2.webp";
import CC31 from "../assets/carousel1/CC3.1.webp";
import CC3 from "../assets/carousel1/CC3.webp";
import CC41 from "../assets/carousel1/CC4.1.webp";
import CC4 from "../assets/carousel1/CC4.webp";
import CC51 from "../assets/carousel1/CC5.1.webp";
import CC5 from "../assets/carousel1/CC5.webp";
import CC61 from "../assets/carousel1/CC6.1.webp";
import CC6 from "../assets/carousel1/CC6.webp";
import CC7 from "../assets/carousel1/CC7.webp";
import CC71 from "../assets/carousel1/CC7.1.webp";

import DD11 from "../assets/carousel2/DD1.1.webp";
import DD1 from "../assets/carousel2/DD1.webp";
import DD21 from "../assets/carousel2/DD2.1.webp";
import DD2 from "../assets/carousel2/DD2.webp";
import DD31 from "../assets/carousel2/DD3.1.webp";
import DD3 from "../assets/carousel2/DD3.webp";
import DD41 from "../assets/carousel2/DD4.1.webp";
import DD4 from "../assets/carousel2/DD4.webp";
import DD51 from "../assets/carousel2/DD5.1.webp";
import DD5 from "../assets/carousel2/DD5.webp";
import DD61 from "../assets/carousel2/DD6.1.webp";
import DD6 from "../assets/carousel2/DD6.webp";



import box1 from "../assets/box/1.webp";
import p2 from "../assets/colchoes/plus/p2.webp";
import ce3 from "../assets/colchoes/cespuma/3.webp";
import visco2 from "../assets/travesseiros/viscopillow/1.webp";
import Seo from "../components/Seo/Seo";

import BB1 from "../assets/modais/box/BB1.webp";
import RE3 from "../assets/modais/colchoes/cespuma/RE3.webp";
import E1 from "../assets/modais/colchoes/plus/E1.webp";

const slides1 = [
  [CC11, CC1],
  [CC2, CC21],
  [CC31, CC3],
  [CC4, CC41],
  [CC51, CC5],
  [CC6, CC61],
  [CC7, CC71]
];

const slides2 = [
  [DD11, DD1],
  [DD2, DD21],
  [DD31, DD3],
  [DD4, DD41],
  [DD51, DD5],
  [DD6, DD61],
];

const imagensMaisVendidos = [
  {
    src: p2, alt: "Privilége Gel", title: "Privilége Gel", desc: "Dupla camada de conforto com espuma hipersoft e toque macio, perfeita para noites de sono renovador.", srcModal: E1, desc1: "O colchão Privillége Gel possui dupla camada de conforto que combina frescor, suporte e elasticidade, proporcionando um sono renovador. Sua malha de alta gramatura, feita no Brasil com tecnologia belga e fios nobres de viscose pura, oferece toque suave, resistência e qualidade.", desc2: "A estrutura conta com espuma hipersoft exclusiva, que relaxa a musculatura e garante conforto plush e maciez, ajudando no descanso profundo e reparador.", desc3: "Com altura de 36 cm, entrega suporte ideal e sensação de aconchego para noites tranquilas e revigorantes."
  },
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
    src: ce3, alt: "Royal Saúde Plus Pillow Top", title: "Royal Saúde Plus Pillow Top", desc: "Modelo com Pillow Top, espumas certificadas e tecido Jacquard bamboo. Proporciona firmeza com altura de até 28 cm e dupla face.", srcModal: RE3, desc1: "Conforto firme que oferece suporte ideal para a coluna e alinhamento postural, com camada extra de Pillow Top para maior maciez e bem-estar. Desenvolvido para garantir durabilidade e conforto térmico.", desc2: "Espuma certificada D33 de alta densidade, tecido Jacquard Bamboo que afasta umidade e proporciona toque macio, design dupla face para uso dos dois lados e acabamento Pillow Top. Certificações garantem qualidade e segurança.", desc3: "Altura de 24 cm, suporta até 100 kg por pessoa, disponível nos tamanhos 88x188 cm, 110x200 cm, 128x188 cm, 138x188 cm, 158x198 cm e 193x203 cm."
  },
  {
    src: visco2, alt: "Viscopillow Alto", title: "Viscopillow Alto", desc: "Travesseiro de 15 cm de altura, com toque macio e suporte elevado. Para fronha 50x70.", srcModal: visco2, desc1: "O travesseiro oferece apoio correto à cabeça e pescoço, combinando ergonomia e conforto para quem prefere modelo alto e macio, garantindo descanso superior e suporte ajustado ao corpo.", desc2: "Sua estrutura conta com espuma viscoelástica de alta qualidade que alinha a coluna e alivia a pressão, tecido Malha Bamboo termorregulador e capa removível com zíper para frescor e praticidade.", desc3: "Além disso, possui tecnologia antimicrobiana Ultra-Fresh que protege contra ácaros, bactérias e mofo, mantendo o travesseiro limpo e saudável. Mede 48 cm de largura, 68 cm de comprimento e 15 cm de altura."
  }
];

const Home = () => {
  return (
    <div>
      <Seo title="Home | Orthomóveis Colchões Orthocrin"
        seoImage="/LogoLoja.webp"
        socialImage="/logocomfundo2.webp" />
      <Carousel slides={slides1} />
      <Marquee />
      <Categorias />
      <Produtos titulo={"O Que Todo Mundo Está Comprando!"} descCategoria={""} backgroundColor={"#FFFFFF"} color={"#80002D"} images={imagensMaisVendidos} />
      <Avaliacao />
      <Pagamento />
      <Sobre />
      <Titulo titulo="Descubra o Orthocrin perfeito para você." backgroundColor={"#80002D"} color={"#FFFFFF"} />
      <Carousel slides={slides2} />
    </div>
  );
};

export default Home;