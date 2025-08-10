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
        desc1: "Desenvolvido para garantir conforto e boas noites de sono para bebês. O design é pensado para oferecer segurança e tranquilidade aos pais.",
        desc2: "Tecido Jacquard Bamboo, suave, ventilado e com propriedades antialérgicas e antiácaros. Estrutura em espuma D18 certificada, ideal para recém-nascidos e crianças até 3 anos, com garantia de qualidade Pró-Espuma aprovada pelo INER.",
        desc3: "Altura do colchão é de 12 cm. Disponível nos tamanhos Berço Tradicional (60x130 cm), Berço Americano (70x130 cm) e Mini Cama (70x150 cm)."
      },
      {
        src: kids2,
        alt: "Junior Luxo",
        title: "Junior Luxo",
        desc: "Colchão de berço tradicional em espuma D18, dupla face com um lado liso. Conforto firme e durável para o bebê.",
        srcModal: K2,
        desc1: "Conforto adaptável para bebês e crianças até 3 anos. Seu design moderno valoriza o ambiente, proporcionando noites de sono tranquilas para toda a família.",
        desc2: "Fabricado com espuma D18 certificada Pró-Espuma, é resistente a deformações e proporciona sustentação uniforme. O tecido de algodão possui tratamento antiácaro, mantendo o colchão fresco, limpo e livre de alergênicos.",
        desc3: "Altura do colchão é de 10 cm com dupla face para maior durabilidade. Disponível nos tamanhos 60x130 cm, 70x130 cm e 70x150 cm, suporta até 20 kg."
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
        desc1: "Travesseiro de látex Orthocrin, indicado para os primeiros 4 meses de vida do bebê. Proporciona apoio ideal para dormir de lado, prevenindo refluxo e promovendo conforto.",
        desc2: "Feito de látex asséptico, respirável e lavável, com tecido de malha 100% poliéster suave ao toque. Conta com aromaterapia natural de camomila para acalmar e ajudar no sono do bebê.",
        desc3: "Medidas de 30x40x3 cm, ideal para ser usado junto ao Apoio Antirefluxo Confort Baby, ajudando a prevenir o refluxo gastresofágico nesta fase inicial."
      },
      {
        src: meu2,
        alt: "Meu Primeiro Orthocrin Visco",
        title: "Meu Primeiro Orthocrin Visco",
        desc: "Travesseiro de 4 cm de altura. Ideal para os primeiros 4 anos da criança. Medida: 35x55 cm.",
        srcModal: meu2,
        desc1: "Travesseiro universal em espuma viscoelástica, que se adapta suavemente aos contornos da criança, proporcionando aconchego e suporte ideal. Adequado tanto para bercinho quanto para a primeira cama, evita que a criança saia do travesseiro durante o sono.",
        desc2: "Fabricado com espuma de poliuretano viscoelástica e tecido de malha 100% poliéster suave ao toque. Possui aromaterapia com essência de camomila, que ajuda a acalmar e preparar para o sono.",
        desc3: "Medidas de 35x55x4 cm, indicado para crianças nos primeiros 4 anos, oferecendo sustentação confortável para a cabeça e pescoço em várias posições de sono."
      },
      {
        src: meu3,
        alt: "Meu Primeiro Orthocrin Fibra",
        title: "Meu Primeiro Orthocrin Fibra",
        desc: "Travesseiro de 10 cm de altura. Tecido 200 fios. Ideal para crianças de 3 a 7 anos. Medida: 40x60 cm.",
        srcModal: meu3,
        desc1: "Travesseiro de fibra ideal para crianças de 3 a 7 anos, oferecendo conforto e segurança com tamanho adequado para a curvatura dos ombros. É maleável e não muito alto, atendendo ao movimento durante o sono.",
        desc2: "Feito com fibra de poliéster siliconada, material antialérgico e adaptável. O tecido 100% algodão ajuda no controle da temperatura e na rápida evaporação da transpiração.",
        desc3: "Medidas de 40x60x10 cm, indicado para crianças entre 3 e 7 anos, proporcionando conforto adequado para essa faixa etária."
      },
      {
        src: meu4,
        alt: "Meu Orthocrin Visco",
        title: "Meu Orthocrin Visco",
        desc: "Travesseiro de 7 cm de altura. Indicado para crianças de 7 a 12 anos. Medida: 48x68 cm.",
        srcModal: meu4,
        desc1: "Travesseiro universal de espuma viscoelástica que se adapta aos contornos da criança, oferecendo aconchego e suporte ideal para diferentes posições de sono. Adequado para uso desde o bercinho até a primeira cama, evitando que a criança saia do travesseiro.",
        desc2: "Produzido com espuma de poliuretano viscoelástica e tecido de malha 100% poliéster, macio ao toque. Inclui aromaterapia com essência de camomila, que acalma e prepara para o sono.",
        desc3: "Medidas de 35x55x4 cm, indicado para crianças nos primeiros 4 anos, garantindo conforto e suporte cervical adequado."
      },
      {
        src: stillo5,
        alt: "Stillo Látex Kids",
        title: "Stillo Látex Kids",
        desc: "Travesseiro infantil com flocos de espuma HR. Ideal para crianças de até 2 anos. Medida: 28x35 cm, altura 10 cm.",
        srcModal: stillo5,
        desc1: "Travesseiro desenvolvido para crianças a partir de 1 ano, com suporte firme e confortável que garante noites tranquilas. Combina qualidade, frescor e excelente custo-benefício para o sono dos pequenos.",
        desc2: "Enchimento com flocos de espuma de alta resiliência (HR), similar ao látex natural, e capa de algodão 200 fios, macia e respirável. Possui propriedades hipoalergênicas e tecnologia antimicrobiana Ultra-Fresh para proteção contra ácaros, bactérias e mofo.",
        desc3: "Certificado Pró-Espuma pelo INER, garantindo segurança e qualidade. Mede 28x35x10 cm, ideal para oferecer suporte e conforto adequados para crianças pequenas."
      }
    ]
  }
];

const Infantil = () => {
  return (
    <div>
      <Seo title="Infantil | Orthomóveis Colchões Orthocrin"
        seoImage="/LogoLoja.webp"
        socialImage="/logocomfundo2.webp" />
      <Marquee />
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