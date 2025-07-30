import Marquee from "../components/Marquee/Marquee";
import Produtos from "../components/Produtos/Produtos";
import Seo from "../components/Seo/Seo";

import kids1 from "../assets/colchoes/kids/1.webp";
import kids2 from "../assets/colchoes/kids/2.webp";
import stillo5 from "../assets/travesseiros/stillo/5.webp";
import meu1 from "../assets/travesseiros/meu/1.webp";
import meu2 from "../assets/travesseiros/meu/2.webp";
import meu3 from "../assets/travesseiros/meu/3.webp";
import meu4 from "../assets/travesseiros/meu/4.webp";

import K1 from "../assets/modais/colchoes/kids/K1.webp";
import K2 from "../assets/modais/colchoes/kids/K2.webp";

const categorias = [
  {
    titulo: "Colchões Kids",
    descCategoria: "Espumas seguras e certificadas para proporcionar conforto ideal ao bebê. Modelos com dupla face e tecidos delicados.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      {
        src: kids1,
        alt: "Royal Saúde Berço",
        title: "Royal Saúde Berço",
        desc: "Clássico colchão de berço com espuma ideal para o bebê. Dupla face e tecido delicado para conforto e segurança.",
        srcModal: K1,
        desc1: "Espuma especialmente desenvolvida para bebês com densidade D18 que oferece suporte adequado sem ser rígida demais.",
        desc2: "Dupla face permite rotação periódica mantendo higiene e uniformidade do colchão.",
        desc3: "Tecido 100% algodão hipoalergênico e antialérgico protege a pele sensível do bebê. Dimensões padrão brasileiras que se adaptam perfeitamente aos berços convencionais."
      },
      {
        src: kids2,
        alt: "Junior Luxo",
        title: "Junior Luxo",
        desc: "Colchão de berço tradicional em espuma D18, dupla face com um lado liso. Conforto firme e durável para o bebê.",
        srcModal: K2,
        desc1: "Modelo tradicional com um lado texturizado para massagem suave e um lado liso para máximo conforto.",
        desc2: "Espuma D18 certificada livre de substâncias nocivas garante segurança total para bebês.",
        desc3: "Conforto firme recomendado por pediatras para desenvolvimento saudável da coluna infantil. Capa removível e lavável facilita higienização e manutenção da saúde do bebê."
      }
    ]
  },
  {
    titulo: "Travesseiros Kids",
    descCategoria: "Acessórios exclusivos para crianças, desde o nascimento até a adolescência. Desenvolvidos com tecido antialérgico e Malha Belga Camomille, que possui fragrância natural para acalmar e relaxar. Respeitam a anatomia infantil e oferecem conforto seguro em todas as fases da infância.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      {
        src: meu1,
        alt: "Meu Primeiro Orthocrin Látex",
        title: "Meu Primeiro Orthocrin Látex",
        desc: "Travesseiro de 3 cm de altura. Ideal para o primeiro ano de vida. Medida: 30x40 cm.",
        srcModal: meu1,
        desc1: "Desenvolvido especificamente para bebês de 0 a 12 meses com látex natural hipoalergênico e livre de substâncias nocivas.",
        desc2: "Altura mínima de 3cm proporciona suporte adequado sem riscos à respiração ou desenvolvimento cervical do bebê.",
        desc3: "Dimensões reduzidas de 30x40cm adequadas ao tamanho do berço. Tecido antialérgico com fragrância natural de camomila para acalmar."
      },
      {
        src: meu2,
        alt: "Meu Primeiro Orthocrin Visco",
        title: "Meu Primeiro Orthocrin Visco",
        desc: "Travesseiro de 4 cm de altura. Ideal para os primeiros 4 anos da criança. Medida: 35x55 cm.",
        srcModal: meu2,
        desc1: "Espuma viscoelástica especial para crianças de 1 a 4 anos com densidade controlada para segurança infantil.",
        desc2: "Altura progressiva de 4cm acompanha desenvolvimento cervical natural da criança durante crescimento.",
        desc3: "Dimensões 35x55cm crescem com a criança. Malha Belga Camomille com fragrância natural que promove relaxamento e sono tranquilo."
      },
      {
        src: meu3,
        alt: "Meu Primeiro Orthocrin Fibra",
        title: "Meu Primeiro Orthocrin Fibra",
        desc: "Travesseiro de 10 cm de altura. Tecido 200 fios. Ideal para crianças de 3 a 7 anos. Medida: 40x60 cm.",
        srcModal: meu3,
        desc1: "Fibra siliconada especial para crianças pré-escolares com propriedades hipoalergênicas e lavagem facilitada.",
        desc2: "Tecido 200 fios de alta qualidade garante durabilidade e toque macio adequado à pele sensível infantil.",
        desc3: "Altura de 10cm apropriada para fase de crescimento de 3 a 7 anos. Dimensões 40x60cm compatíveis com camas infantis."
      },
      {
        src: meu4,
        alt: "Meu Orthocrin Visco",
        title: "Meu Orthocrin Visco",
        desc: "Travesseiro de 7 cm de altura. Indicado para crianças de 7 a 12 anos. Medida: 48x68 cm.",
        srcModal: meu4,
        desc1: "Espuma viscoelástica adaptada para pré-adolescentes de 7 a 12 anos com suporte cervical crescente.",
        desc2: "Altura intermediária de 7cm acompanha necessidades de suporte da fase escolar sem excessos.",
        desc3: "Dimensões 48x68cm se aproximam do tamanho adulto preparando transição. Tecnologia que cresce junto com a criança."
      },
      {
        src: stillo5,
        alt: "Stillo Látex Kids",
        title: "Stillo Látex Kids",
        desc: "Travesseiro infantil com flocos de espuma HR. Ideal para crianças de até 2 anos. Medida: 28x35 cm, altura 10 cm.",
        srcModal: stillo5,
        desc1: "Desenvolvido especificamente para crianças de até 2 anos com flocos de espuma HR de alta qualidade e segurança.",
        desc2: "Dimensões reduzidas de 28x35cm respeitam a anatomia infantil proporcionando suporte adequado sem excessos.",
        desc3: "Altura de 10cm controlada para evitar problemas cervicais. Materiais certificados livres de substâncias nocivas."
      }
    ]
  }
];

const Infantil = () => {
  return (
    <div>
      <Seo title="Infantil | Orthomóveis Colchões Orthocrin" 
        seoImage="/LogoLoja.webp"
        socialImage="/logocomfundo2.webp"/>
      <Marquee/>
      {categorias.map((cat) => (
        <Produtos
          key={cat.titulo}
          titulo={cat.titulo}
          descCategoria={cat.descCategoria}
          backgroundColor={cat.backgroundColor}
          color={cat.color}
          images={cat.images}
        />
      ))}
    </div>
  );
};

export default Infantil;