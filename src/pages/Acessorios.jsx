import Marquee from "../components/Marquee/Marquee";
import Produtos from "../components/Produtos/Produtos";
import Seo from "../components/Seo/Seo";


import colchonete2 from "../assets/acessorios/colchonetes/colchoneteantistress.webp";
import colchonete3 from "../assets/acessorios/colchonetes/multiuso.webp";
import colchonete11 from "../assets/acessorios/colchonetes/colchoneteacademia.webp";
import antirrefluxoAdulto from "../assets/acessorios/antirrefluxo/ApoioAntiRefluxoAdulto.webp";
import antirrefluxoBaby from "../assets/acessorios/antirrefluxo/antirefluxo-comfort-baby.webp";
import ortotrip from "../assets/acessorios/ortotrip/orthotrip1.webp";
import multirelaxBasic from "../assets/acessorios/multirelax/foto-multirelax-basic.webp";
import multirelaxVisco from "../assets/acessorios/multirelax/foto-multirelax-visco.webp";
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
        desc1: "Indicado para diversos tipos de treino, como academia, yoga e exercícios em casa. É fabricado com matéria-prima de alta qualidade, revestido em napa impermeável, resistente e fácil de limpar.",
        desc2: "O produto possui certificação Pró Espuma, que assegura qualidade superior e durabilidade. A prática de atividades físicas com o colchonete auxilia na manutenção de uma vida saudável, promovendo a liberação de endorfina e a sensação de bem-estar",
        desc3: "Suas especificações incluem densidade D28, cor preta, altura de 4 cm e medidas de 50x100 cm."
      },
      {
        src: colchonete2,
        alt: "Colchonete Antistress",
        title: "Colchonete Antistress",
        desc: "Colchonete massageador indicado para uso sobre o colchão ou superfícies planas. Melhora a circulação sanguínea e alivia pontos de pressão.",
        srcModal: colchonete2,
        desc1: "Auxilia no alívio da pressão, melhora a circulação sanguínea e proporciona maior conforto. É indicado especialmente para pessoas acamadas com mobilidade reduzida devido a doenças, acidentes ou recuperação.",
        desc2: "Produzido com espuma certificada D23, seu formato é ideal para prevenir e aliviar dores em quem permanece na cama por longos períodos. Possui tecnologia de espuma perfurada com efeito massageador e é fácil de transportar.",
        desc3: "As especificações incluem densidade D23, cor bege e altura de 5 cm. Está disponível nos tamanhos solteiro (88x188x5 cm) e casal (138x188x5 cm)."
      },
      {
        src: colchonete3,
        alt: "Colchonete Multiuso",
        title: "Colchonete Multiuso",
        desc: "Colchonete de 5 cm de altura. Ideal para campings e viagens, com revestimento 100% poliéster. Medida: 60x180 cm.",
        srcModal: colchonete3,
        desc1: "Indicado para treinos na academia, yoga, camping e viagens. É produzido com espuma certificada D20 e tecido multiflex preto, passando por rigorosos testes de qualidade.",
        desc2: "Conta com embalagem em forma de sacola, tornando o transporte prático e fácil. Entre os benefícios, destaca-se o uso multiuso, a qualidade dos materiais e o design clássico adaptável a qualquer ambiente.",
        desc3: "Possui densidade D20, cor preta, altura de 5 cm e medidas de 60x180 cm. "
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
        desc1: "Desenvolvido para aliviar sintomas e desconfortos do refluxo. Seu formato em rampa eleva a parte superior do corpo, mantendo a cabeça mais alta e reduzindo a incidência de refluxo durante o sono.",
        desc2: "Proporciona conforto e bem-estar, sendo também útil para melhorar o descanso na gravidez. Possui capa de algodão com zíper, lavável, garantindo praticidade na limpeza.",
        desc3: "As medidas são 70x83 cm, com altura de 15 cm na parte superior e 2 cm na inferior. O uso do travesseiro é um complemento e não substitui o acompanhamento médico adequado."
      },
      {
        src: antirrefluxoBaby,
        alt: "Antirrefluxo Comfort Baby",
        title: "Antirrefluxo Comfort Baby",
        desc: "Indicado para os primeiros meses de vida. Garante sono tranquilo para bebês e mamães.",
        srcModal: antirrefluxoBaby,
        desc1: "Criado para proporcionar sono seguro e confortável, ajudando a prevenir o refluxo gastroesofágico em bebês. Sua inclinação de aproximadamente 10 graus reduz o risco de desconforto, garantindo noites mais tranquilas.",
        desc2: "Produzido com espuma de densidade 18, oferece sustentação firme e adequada para bebês. Possui capa de algodão com zíper, fácil de limpar, garantindo higiene e praticidade.",
        desc3: "As medidas são 60x50x11 cm, com formato anatômico que se adapta ao corpo do bebê. É feito com materiais hipoalergênicos, ideais para peles sensíveis, evitando irritações e alergias."
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
        desc1: "Oferece suporte firme para relaxamento, leitura ou trabalho. Seu design ergonômico auxilia na postura correta, proporcionando conforto para lombar, coluna e pescoço.",
        desc2: "Produzido com espuma convencional perfilada, é durável e possui efeito massageador. Conta com capa de alto teor de algodão, removível, lavável e resistente.",
        desc3: "Com medidas de 53x30x42 cm e altura de 15 cm, é multifuncional e pode ser usado em diversas posições. Elevar as pernas com o travesseiro ajuda a melhorar a circulação, reduzir inchaço e aliviar o cansaço."
      },
      {
        src: multirelaxVisco,
        alt: "Multirelax Visco",
        title: "Multirelax Visco",
        desc: "Toque especial da espuma viscoelástica. Capa com zíper e fronha Jacquard Bamboo. Ideal para relaxamento total.",
        srcModal: multirelaxVisco,
        desc1: "Ideal para aliviar dores nas costas e pernas, especialmente para quem sofre com má circulação. Feito com espuma viscoelástica de alta densidade, seu formato triangular ergonômico oferece suporte para lombar, coluna e pescoço, aliviando pontos de pressão.",
        desc2: "Possui tecido Jacquard Bamboo, resistente e confortável, além de capa removível e lavável para facilitar a higiene. É leve, fácil de transportar e pode ser usado para leitura, assistir TV, pós-cirurgias, amamentação ou relaxamento.",
        desc3: "Com medidas de 53x30x42 cm e altura de 15 cm, também auxilia na melhora da circulação ao elevar as pernas, reduzindo inchaço e fadiga. A espuma Orthocrin se destaca pela alta densidade e durabilidade, garantindo melhor desempenho."
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
        desc1: "Feita com espuma viscoelástica e design anatômico, proporcionando suporte ergonômico e alívio dos pontos de pressão na cabeça, pescoço e ombros. Seu formato em U mantém a postura correta e reduz a tensão muscular durante o sono.",
        desc2: "O tecido de alta qualidade é fácil de limpar, enquanto a espuma mantém sua forma ao longo do tempo. A almofada garante conforto e bem-estar em trajetos curtos ou longos, ajudando a chegar ao destino mais descansado.",
        desc3: "Compacta e portátil, mede 30x30x14 cm e é fácil de transportar em bolsas de viagem."
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
        desc1: "Feito em tecido matelassado com três camadas: malha dupla com face superior em algodão para maciez e inferior em poliéster para resistência, manta de fibra siliconada para conforto extra e revestimento impermeável que impede a passagem de líquidos.",
        desc2: "Possui slip com elastano que abraça toda a lateral. A malha jacquard exclusiva Flor de Algodão proporciona toque macio e agradável. Conta com nanotecnologia que protege contra fungos, ácaros e bactérias. Assim, une proteção, conforto e durabilidade em um único produto.",
        desc3: "Ótima fixação em colchões de até 40 cm de altura, disponível nos tamanhos solteiro, casal, queen e king."
      }
    ]
  }
];

const Acessorios = () => {
  return (
    <div>
      <Seo title="Acessórios | Orthomóveis Colchões Orthocrin"
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

export default Acessorios;