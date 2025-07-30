import Marquee from "../components/Marquee/Marquee";
import Produtos from "../components/Produtos/Produtos";
import Seo from "../components/Seo/Seo";

import colchonete2 from "../assets/acessorios/colchonetes/2.webp";
import colchonete3 from "../assets/acessorios/colchonetes/3.webp";
import colchonete11 from "../assets/acessorios/colchonetes/1.1.webp";
import antirrefluxoAdulto from "../assets/acessorios/antirrefluxo/4.webp";
import antirrefluxoBaby from "../assets/acessorios/antirrefluxo/5.webp";
import ortotrip from "../assets/acessorios/ortotrip/6.webp";
import multirelaxBasic from "../assets/acessorios/multirelax/7.webp";
import multirelaxVisco from "../assets/acessorios/multirelax/8.webp";
import protetor from "../assets/acessorios/protetores/acessorio.webp";
import T9 from "../assets/modais/acessorios/T9.webp";

const categorias = [
  {
    titulo: "Colchonetes",
    descCategoria: "Acessórios versáteis para exercícios físicos, viagens ou conforto extra no descanso. Modelos desenvolvidos com materiais específicos como napa, poliéster ou espuma massageadora, oferecendo praticidade, durabilidade e bem-estar em diferentes usos.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      {
        src: colchonete11,
        alt: "Colchonete Fitness",
        title: "Colchonete Fitness",
        desc: "Colchonete de 4 cm de altura. Revestido em napa, ideal para academias, ginástica e alongamento. Medida: 50x100 cm.",
        srcModal: colchonete11,
        desc1: "Colchonete profissional com 4cm de espessura desenvolvido especificamente para atividades físicas de alta intensidade.",
        desc2: "Revestimento em napa sintética proporciona aderência superior e facilita limpeza após exercícios.",
        desc3: "Dimensões compactas de 50x100cm tornam ideal para academias domésticas e transporte. Resistente ao desgaste do uso diário intenso."
      },
      {
        src: colchonete2,
        alt: "Colchonete Antistress",
        title: "Colchonete Antistress",
        desc: "Colchonete massageador indicado para uso sobre o colchão ou superfícies planas. Melhora a circulação sanguínea e alivia pontos de pressão.",
        srcModal: colchonete2,
        desc1: "Tecnologia de espuma perfilada com textura massageadora que estimula pontos específicos do corpo durante o repouso.",
        desc2: "Promove melhora significativa da circulação sanguínea e alívio de tensões musculares acumuladas.",
        desc3: "Versatilidade de uso sobre colchões ou superfícies rígidas. Ideal para pessoas com problemas circulatórios ou dores nas costas."
      },
      {
        src: colchonete3,
        alt: "Colchonete Multiuso",
        title: "Colchonete Multiuso",
        desc: "Colchonete de 5 cm de altura. Ideal para campings e viagens, com revestimento 100% poliéster. Medida: 60x180 cm.",
        srcModal: colchonete3,
        desc1: "Espessura generosa de 5cm oferece conforto superior para pernoites em acampamentos e viagens prolongadas.",
        desc2: "Revestimento 100% poliéster garante resistência à umidade e facilita limpeza em ambientes externos.",
        desc3: "Dimensões amplas de 60x180cm proporcionam espaço adequado para adultos. Dobrável e leve para transporte em aventuras."
      }
    ]
  },
  {
    titulo: "Antirrefluxo",
    descCategoria: "Produtos ergonômicos desenvolvidos para proporcionar alívio e conforto durante o sono, especialmente para quem sofre com refluxo. Indicações específicas para adultos e bebês, com materiais de toque suave e design anatômico.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      {
        src: antirrefluxoAdulto,
        alt: "Antirrefluxo Adulto",
        title: "Antirrefluxo Adulto",
        desc: "Inclinação ergonômica com toque da espuma perfilada. Proporciona alívio para quem sofre de refluxo.",
        srcModal: antirrefluxoAdulto,
        desc1: "Design ergonômico com inclinação graduada de 15° cientificamente calculada para reduzir episódios de refluxo gastroesofágico.",
        desc2: "Espuma perfilada proporciona toque suave e adaptação aos contornos do corpo mantendo posicionamento correto.",
        desc3: "Solução eficaz para adultos com problemas digestivos noturnos. Melhora qualidade do sono e reduz desconfortos."
      },
      {
        src: antirrefluxoBaby,
        alt: "Antirrefluxo Comfort Baby",
        title: "Antirrefluxo Comfort Baby",
        desc: "Indicado para os primeiros meses de vida. Garante sono tranquilo para bebês e mamães.",
        srcModal: antirrefluxoBaby,
        desc1: "Desenvolvido especificamente para bebês de 0 a 6 meses com inclinação suave e segura para prevenção de refluxo.",
        desc2: "Materiais hipoalergênicos certificados livres de substâncias nocivas garantem segurança total para recém-nascidos.",
        desc3: "Proporciona noites mais tranquilas para toda família reduzindo cólicas e regurgitações. Recomendado por pediatras."
      }
    ]
  },
  {
    titulo: "Multirelax",
    descCategoria: "Encosto triangular ergonômico que proporciona conforto para pernas e costas. Ideal para relaxamento, leitura e melhora da circulação. Disponível nas versões Basic (espuma perfilada) e Visco (espuma viscoelástica).",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      {
        src: multirelaxBasic,
        alt: "Multirelax Basic",
        title: "Multirelax Basic",
        desc: "Ergonômico e confortável. Espuma perfilada com capa com zíper. Fronha com alto teor de algodão.",
        srcModal: multirelaxBasic,
        desc1: "Design triangular ergonômico que oferece suporte ideal para pernas, costas ou como encosto para leitura e TV.",
        desc2: "Espuma perfilada de densidade controlada proporciona firmeza adequada sem comprometer o conforto.",
        desc3: "Capa removível com zíper facilita higienização. Fronha em algodão de alta qualidade garante toque macio e respirabilidade."
      },
      {
        src: multirelaxVisco,
        alt: "Multirelax Visco",
        title: "Multirelax Visco",
        desc: "Toque especial da espuma viscoelástica. Capa com zíper e fronha Jacquard Bamboo. Ideal para relaxamento total.",
        srcModal: multirelaxVisco,
        desc1: "Espuma viscoelástica de última geração se molda perfeitamente ao corpo oferecendo suporte personalizado e alívio de pressão.",
        desc2: "Tecnologia NASA que distribui peso uniformemente reduzindo pontos de tensão e melhorando circulação durante relaxamento.",
        desc3: "Fronha Jacquard Bamboo com propriedades naturalmente antibacterianas e termoreguladoras. Luxo e funcionalidade em um só produto."
      }
    ]
  },
  {
    titulo: "Orthotrip",
    descCategoria: "Almofada de pescoço. Seja qual for o motivo da sua viagem, usar Orthotrip é garantia de conforto. Produzida com espuma viscoelástica, que apoia perfeitamente o pescoço. Acompanha capa com zíper.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      {
        src: ortotrip,
        alt: "Orthotrip",
        title: "Orthotrip",
        desc: "100% espuma viscoelástica com capa removível. Apoio anatômico para o pescoço durante viagens.",
        srcModal: T9,
        desc1: "Formato anatômico em U desenvolvido para apoiar perfeitamente a curvatura natural do pescoço durante viagens longas.",
        desc2: "100% espuma viscoelástica NASA oferece suporte firme que se adapta aos movimentos sem perder formato original.",
        desc3: "Capa removível e lavável facilita higienização. Compacta e leve para transporte em aviões, ônibus e carros."
      }
    ]
  },
  {
    titulo: "Protetores",
    descCategoria: "Proteção essencial para seu colchão. Nossos protetores impermeáveis em flor de algodão oferecem barreira contra líquidos, ácaros e alérgenos, garantindo higiene, conforto e durabilidade para seu investimento em sono de qualidade.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      {
        src: protetor,
        alt: "Protetor Flor de Algodão Impermeável",
        title: "Protetor Flor de Algodão Impermeável",
        desc: "Protetor de colchão impermeável com tecido em flor de algodão. Proteção contra líquidos, ácaros e alérgenos, mantendo a higiene e vida útil do seu colchão.",
        srcModal: protetor,
        desc1: "Barreira impermeável 100% eficaz contra líquidos, suor e acidentes, protegendo integralmente seu investimento em colchão.",
        desc2: "Tecido flor de algodão natural proporciona toque macio e respirabilidade sem comprometer propriedades protetivas.",
        desc3: "Proteção antimicrobiana contra ácaros, fungos e bactérias. Elástico em todo perímetro garante fixação segura em qualquer altura de colchão."
      }
    ]
  }
];

const Acessorios = () => {
  return (
    <div>
      <Seo title="Acessórios | Orthomóveis Colchões Orthocrin" 
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

export default Acessorios;