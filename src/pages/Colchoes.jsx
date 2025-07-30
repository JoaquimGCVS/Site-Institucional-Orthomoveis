import Marquee from "../components/Marquee/Marquee";
import Produtos from "../components/Produtos/Produtos";
import Seo from "../components/Seo/Seo";

import p1 from "../assets/colchoes/plus/p1.webp";
import p2 from "../assets/colchoes/plus/p2.webp";
import p3 from "../assets/colchoes/plus/p3.webp";
import p4 from "../assets/colchoes/plus/p4.webp";
import c1 from "../assets/colchoes/classica/1.webp";
import c2 from "../assets/colchoes/classica/2.webp";
import c3 from "../assets/colchoes/classica/3.webp";
import c4 from "../assets/colchoes/classica/4.webp";
import c5 from "../assets/colchoes/classica/5.webp";
import c6 from "../assets/colchoes/classica/6.webp";
import c7 from "../assets/colchoes/classica/7.webp";
import b1 from "../assets/colchoes/basic/1.webp";
import b2 from "../assets/colchoes/basic/2.webp";
import b3 from "../assets/colchoes/basic/3.webp";
import b4 from "../assets/colchoes/basic/4.webp";
import b5 from "../assets/colchoes/basic/5.webp";
import ce1 from "../assets/colchoes/cespuma/1.webp";
import ce2 from "../assets/colchoes/cespuma/2.webp";
import ce3 from "../assets/colchoes/cespuma/3.webp";
import ce4 from "../assets/colchoes/cespuma/4.webp";
import o1 from "../assets/colchoes/ortopedica/1.webp";
import o2 from "../assets/colchoes/ortopedica/2.webp";
import o3 from "../assets/colchoes/ortopedica/3.webp";
import o4 from "../assets/colchoes/ortopedica/4.webp";
import s1 from "../assets/colchoes/sllip/1.webp";
import s2 from "../assets/colchoes/sllip/2.webp";
import pets3 from "../assets/colchoes/pets/3.webp";
import pets1 from "../assets/colchoes/pets/1.webp";
import kids1 from "../assets/colchoes/kids/1.webp";
import kids2 from "../assets/colchoes/kids/2.webp";

import CC1 from "../assets/modais/colchoes/classica/CC1.webp";
import CC2 from "../assets/modais/colchoes/classica/CC2.webp";
import CC3 from "../assets/modais/colchoes/classica/CC3.webp";
import CC4 from "../assets/modais/colchoes/classica/CC4.webp";
import CC7 from "../assets/modais/colchoes/classica/CC5.webp";
import CC6 from "../assets/modais/colchoes/classica/CC6.webp";
import CC5 from "../assets/modais/colchoes/classica/CC7.webp";

import RE1 from "../assets/modais/colchoes/cespuma/RE1.webp";
import RE2 from "../assets/modais/colchoes/cespuma/RE2.webp";
import RE3 from "../assets/modais/colchoes/cespuma/RE3.webp";
import RE4 from "../assets/modais/colchoes/cespuma/RE4.webp";

import B1 from "../assets/modais/colchoes/basic/B1.webp";
import B2 from "../assets/modais/colchoes/basic/B2.webp";
import B3 from "../assets/modais/colchoes/basic/B3.webp";
import B4 from "../assets/modais/colchoes/basic/B4.webp";
import B5 from "../assets/modais/colchoes/basic/B5.webp";

import K1 from "../assets/modais/colchoes/kids/K1.webp";
import K2 from "../assets/modais/colchoes/kids/K2.webp";

import O1 from "../assets/modais/colchoes/ortopedica/O1.webp";
import O2 from "../assets/modais/colchoes/ortopedica/O2.webp";
import O3 from "../assets/modais/colchoes/ortopedica/O3.webp";
import O4 from "../assets/modais/colchoes/ortopedica/O4.webp";

import P1 from "../assets/modais/colchoes/pets/P1.webp";

import S1 from "../assets/modais/colchoes/sllip/S1.webp";
import S2 from "../assets/modais/colchoes/sllip/S2.webp";

import E1 from "../assets/modais/colchoes/plus/E1.webp";
import E2 from "../assets/modais/colchoes/plus/E2.webp";
import E3 from "../assets/modais/colchoes/plus/E3.webp";
import E4 from "../assets/modais/colchoes/plus/E4.webp";


const categorias = [
  {
    titulo: "Categoria Clássica Plus",
    descCategoria: "Conforto premium com tecnologia belga, espuma hipersoft e toque macio para um sono profundo e renovador.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: p1, alt: "Premium Visco", title: "Premium Visco", desc: "Fios de seda e espuma viscoelástica garantem noites de descanso profundo e de relaxamento absoluto.", srcModal: E2, desc1: "Colchão premium com fios de seda naturais que proporcionam toque luxuoso e regulação térmica.", desc2: "A espuma viscoelástica NASA se molda perfeitamente ao corpo, distribuindo o peso uniformemente e aliviando pontos de pressão.", desc3: "Ideal para quem busca máximo conforto e qualidade de sono. Tecnologia que reduz movimentos noturnos do parceiro." },
      { src: p2, alt: "Privilége Gel", title: "Privilége Gel", desc: "Dupla camada de conforto com espuma hipersoft e toque macio, perfeita para noites de sono renovador.", srcModal: E1, desc1: "Sistema de dupla camada com espuma hipersoft que oferece acolhimento inicial seguido de suporte firme.", desc2: "Partículas de gel infundidas na espuma mantêm a temperatura corporal regulada durante toda a noite.", desc3: "Tecido belga de alta qualidade com tratamento antimicrobiano. Excelente para casais que preferem confortos diferentes." },
      { src: p3, alt: "Eternitá Gel", title: "Eternitá Gel", desc: "Adapta-se ao corpo com frescor e elasticidade, oferecendo suporte ideal e conforto térmico constante.", srcModal: E3, desc1: "Espuma com tecnologia gel que se adapta instantaneamente aos contornos do corpo, proporcionando suporte personalizado.", desc2: "Sistema de ventilação aprimorado mantém o frescor natural durante o sono.", desc3: "Elasticidade excepcional que volta ao formato original rapidamente. Recomendado para pessoas que sentem calor durante a noite." },
      { src: p4, alt: "Serenity Visco", title: "Serenity Visco", desc: "Viscose de bambu e espuma NASA abraçam o corpo, aliviando as pressões e melhorando a circulação.", srcModal: E4, desc1: "Tecido em viscose de bambu com propriedades naturalmente antibacterianas e hipoalergênicas.", desc2: "Espuma viscoelástica desenvolvida pela NASA oferece alívio terapêutico de pressão nas articulações.", desc3: "Melhora significativamente a circulação sanguínea durante o repouso. Sustentabilidade garantida com materiais eco-friendly de alta performance." },
    ]
  },
  {
    titulo: "Categoria Clássica",
    descCategoria: "Conforto, tecnologia e design para noites tranquilas, com modelos que se adaptam ao corpo e garantem suporte ideal.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: c1, alt: "Exception Plus", title: "Exception Plus", desc: "Molas ergonômicas e espumas confortáveis que garantem elasticidade, suporte ideal e noites revigorantes e tranquilas.", srcModal: CC1, desc1: "Sistema de molas ensacadas independentes que se adaptam individualmente aos movimentos do corpo.", desc2: "Camadas de espuma HR (High Resilience) proporcionam elasticidade superior e recuperação rápida.", desc3: "Tecnologia que minimiza a transferência de movimento entre parceiros. Estrutura durável com mais de 10 anos de vida útil garantida." },
      { src: c2, alt: "Supreme Visco", title: "Supreme Visco", desc: "Pillow Top com espuma viscoelástica que alivia pressões e oferece suporte ideal para um sono profundo e revigorante.", srcModal: CC2, desc1: "Pillow Top integrado com espuma viscoelástica de densidade D50 para máximo alívio de pressão.", desc2: "Camada superior acolhe o corpo enquanto a base oferece suporte firme à coluna vertebral.", desc3: "Reduz significativamente pontos de pressão em quadris e ombros. Ideal para pessoas com dores articulares ou que buscam recuperação muscular." },
      { src: c3, alt: "Bellagio Gel", title: "Bellagio Gel", desc: "Espuma HR Gel que proporciona frescor e conforto para a coluna, com leveza e noites agradáveis para todos os dias.", srcModal: CC3, desc1: "Espuma HR infundida com partículas de gel termoreguladoras que mantêm temperatura corporal estável.", desc2: "Sistema de células abertas permite circulação de ar constante, evitando acúmulo de calor.", desc3: "Alinhamento ergonômico da coluna vertebral em todas as posições de sono. Leveza excepcional que facilita movimentação e manutenção do colchão." },
      { src: c4, alt: "Sense", title: "Sense", desc: "Espuma hipermacia e tecido sustentável 2nd Life que alinham a coluna e garantem conforto suave e prolongado.", srcModal: CC4, desc1: "Espuma hipermacia de última geração que combina acolhimento e suporte progressivo.", desc2: "Tecido 2nd Life produzido com materiais reciclados, contribuindo para sustentabilidade ambiental.", desc3: "Zona de conforto diferenciado que se adapta às curvas naturais do corpo. Tratamento antimicrobiano que inibe crescimento de ácaros e bactérias." },
      { src: c5, alt: "Splendor Top", title: "Splendor Top", desc: "Pillow Top com molas ensacadas que oferecem alinhamento perfeito e suporte extra para um descanso equilibrado.", srcModal: CC5, desc1: "Sistema híbrido com molas ensacadas de aço temperado e Pillow Top integrado.", desc2: "Cada mola trabalha independentemente, oferecendo suporte personalizado para diferentes pesos corporais.", desc3: "Pillow Top proporciona acolhimento inicial sem comprometer o alinhamento espinhal. Ventilação superior através dos espaços entre molas, mantendo ambiente seco." },
      { src: c6, alt: "Splendor", title: "Splendor", desc: "Espuma convencional e molas ensacadas com tecnologia Purotex®, para conforto firme e frescor natural prolongado.", srcModal: CC7, desc1: "Tecnologia Purotex® com probióticos naturais que purificam o ambiente de sono continuamente.", desc2: "Molas ensacadas de precisão combinadas com espuma convencional de alta densidade D28.", desc3: "Sistema de ventilação natural que reduz umidade e mantém frescor por até 8 horas. Conforto firme recomendado para pessoas que preferem maior sustentação." },
      { src: c7, alt: "Royal Saúde Anatomic Power", title: "Royal Saúde Anatomic Power", desc: "Molas ensacadas e espuma de alta densidade que proporcionam firmeza, alinhamento corporal e noites sem desconforto.", srcModal: CC6, desc1: "Design anatômico com 7 zonas de conforto diferenciado para cabeça, ombros, lombar, quadris e pernas.", desc2: "Molas ensacadas de alta resistência combinadas com espuma D33 certificada.", desc3: "Sistema que mantém alinhamento natural da coluna em qualquer posição de sono. Indicado especialmente para pessoas com problemas posturais ou dores nas costas." },
    ]
  },
  {
    titulo: "Categoria Sllip",
    descCategoria: "Colchões com conforto equilibrado, molas especiais e espumas selecionadas para noites mais leves e relaxantes.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: s1, alt: "Primor", title: "Primor", desc: "Conforto intermediário com molas ensacadas Comfort Core prata e camadas de espuma. Tecido plano e altura de 26 cm com excelente custo-benefício.", srcModal: S1, desc1: "Sistema Comfort Core com molas ensacadas revestidas em prata para propriedades antimicrobianas naturais.", desc2: "Conforto intermediário ideal para casais com preferências diferentes de firmeza.", desc3: "Camadas de espuma estrategicamente posicionadas criam zonas de conforto diferenciado. Tecido plano de alta qualidade facilita manutenção e proporciona durabilidade superior." },
      { src: s2, alt: "Selene", title: "Selene", desc: "Molas Superlastic com espumas adaptáveis, tecido Jacquard bamboo e altura de 24 cm. Conforto intermediário com sustentação progressiva.", srcModal: S2, desc1: "Molas Superlastic com maior flexibilidade proporcionam resposta dinâmica aos movimentos corporais.", desc2: "Espumas adaptáveis de diferentes densidades criam sustentação progressiva conforme peso.", desc3: "Tecido Jacquard bamboo respirável mantém temperatura corporal regulada naturalmente. Sistema que combina acolhimento inicial com suporte firme na base para noites revigorantes." },
    ]
  },
  {
    titulo: "Categoria Clássica de Espuma",
    descCategoria: "100% em espuma certificada, combinando suporte firme e conforto contínuo. Ideal para quem busca qualidade, durabilidade e um sono restaurador com ótimo custo-benefício.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: ce1, alt: "Royal Saúde Plush", title: "Royal Saúde Plush", desc: "Espuma certificada D33, toque aveludado e conforto intermediário, com tecido malha soft e altura de 25 cm para um sono equilibrado.", srcModal: RE1, desc1: "Espuma D33 certificada pelo INMETRO garante durabilidade superior e suporte consistente por anos.", desc2: "Toque aveludado proporcionado por tecido malha soft de alta gramatura com tratamento antialérgico.", desc3: "Conforto intermediário que equilibra acolhimento e sustentação, ideal para a maioria dos usuários. Altura de 25cm oferece ergonomia adequada para camas convencionais." },
      { src: ce2, alt: "Royal Saúde Ultra", title: "Royal Saúde Ultra", desc: "Espuma certificada com tecido malha bamboo e conforto firme, oferecendo altura de até 25 cm para suporte e frescor ideal.", srcModal: RE2, desc1: "Tecido malha bamboo com propriedades naturalmente antibacterianas e termoreguladoras.", desc2: "Espuma certificada de alta densidade proporciona conforto firme recomendado para pessoas acima de 80kg.", desc3: "Sistema de ventilação aprimorado através da estrutura celular da espuma mantém ambiente seco. Frescor natural do bamboo combinado com suporte ortopédico de qualidade superior." },
      { src: ce3, alt: "Royal Saúde Plus Pillow Top", title: "Royal Saúde Plus Pillow Top", desc: "Modelo com Pillow Top, espumas certificadas e tecido Jacquard bamboo. Proporciona firmeza com altura de até 28 cm e dupla face.", srcModal: RE3, desc1: "Pillow Top integrado de 3cm adiciona camada extra de conforto sem comprometer firmeza da base.", desc2: "Dupla face permite rotação periódica para maior durabilidade e uniformidade do uso.", desc3: "Tecido Jacquard bamboo de padrão europeu com trama especial que facilita circulação de ar. Altura de 28cm proporciona presença imponente e facilita entrada/saída da cama." },
      { src: ce4, alt: "Royal Saúde Plus", title: "Royal Saúde Plus", desc: "Espuma 100% certificada, conforto firme, dupla face e tecido Jacquard bamboo, com alturas variadas para máxima adaptação.", srcModal: RE4, desc1: "100% espuma certificada garante ausência de substâncias tóxicas e qualidade controlada.", desc2: "Dupla face com densidades diferenciadas oferece duas opções de conforto em um único colchão.", desc3: "Tecido Jacquard bamboo com padrão exclusivo e propriedades sustentáveis naturais. Disponível em múltiplas alturas (18, 20, 23, 25cm) para personalização total." },
    ]
  },
  {
    titulo: "Categoria Basic",
    descCategoria: "Design essencial com conforto e praticidade para o dia a dia, unindo qualidade e suporte ideal ao corpo.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: b1, alt: "Basic Pillow Top", title: "Real", desc: "Pillow top com conforto extra e molas ensacadas, garantindo suporte e maciez no descanso diário.", srcModal: B1, desc1: "Modelo básico com tecnologia avançada: Pillow Top integrado oferece acolhimento superior na camada de contato.", desc2: "Molas ensacadas de aço carbono proporcionam suporte independente para cada área do corpo.", desc3: "Excelente relação custo-benefício sem abrir mão da qualidade técnica. Ideal para quem busca conforto premium com investimento acessível." },
      { src: b2, alt: "Basic Real Black", title: "Real Black", desc: "Versão elegante com pillow top e molas ensacadas, oferecendo maciez e sustentação.", srcModal: B2, desc1: "Versão refinada do modelo Real com acabamento em tecido preto elegante e sofisticado.", desc2: "Mesma tecnologia de molas ensacadas e Pillow Top com design premium diferenciado.", desc3: "Tecido com tratamento antimanchas facilita limpeza e manutenção do colchão. Perfeito para quartos com decoração moderna que valorizam estética e funcionalidade." },
      { src: b3, alt: "Basic Millenium", title: "Millenium", desc: "Molas superlastic e espuma flexível que alinham a coluna, proporcionando noites mais confortáveis.", srcModal: B3, desc1: "Sistema de molas Superlastic com maior flexibilidade e resposta rápida aos movimentos corporais.", desc2: "Espuma flexível de densidade média proporciona adaptação gradual às curvas do corpo.", desc3: "Tecnologia que favorece alinhamento natural da coluna vertebral durante o sono. Durabilidade comprovada com garantia estendida para uso residencial intenso." },
      { src: b4, alt: "Basic Moush", title: "Moush", desc: "Espuma certificada com alta densidade, mais flexível e firme, ideal para conforto e alinhamento postural.", srcModal: B4, desc1: "Espuma de alta densidade D28 certificada oferece firmeza progressiva conforme peso corporal.", desc2: "Flexibilidade controlada proporciona conforto inicial sem perder suporte estrutural essencial.", desc3: "Formulação especial que mantém propriedades físicas mesmo após anos de uso intenso. Recomendado para pessoas que necessitam de suporte firme mas não rígido." },
      { src: b5, alt: "Basic Diamante", title: "Diamante", desc: "Espuma de alta densidade com dupla face e tecido resistente, para sustentar a coluna com durabilidade.", srcModal: B5, desc1: "Dupla face permite rotação periódica que dobra a vida útil do colchão mantendo uniformidade.", desc2: "Espuma de alta densidade com compressão controlada garante suporte consistente da coluna.", desc3: "Tecido com tratamento anti-desgaste resiste ao uso diário mantendo aparência original. Economia inteligente: maior durabilidade significa menor custo por ano de uso." },
    ]
  },
  {
    titulo: "Categoria Ortopédica",
    descCategoria: "Modelos com suporte firme, ideal para alinhamento da coluna, estrutura resistente e tecido de alta qualidade.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: o1, alt: "Orthoclínico Ouro Plus Eurotop", title: "Orthoclínico Ouro Plus Eurotop", desc: "Colchão com estrutura de madeira certificada, conforto extrafirme e acabamento Eurotop. Tecido Jacquard bamboo e altura de 26 cm.", srcModal: O1, desc1: "Estrutura interna com madeira de reflorestamento certificada FSC garante rigidez ortopédica superior.", desc2: "Acabamento Eurotop integrado proporciona conforto inicial sem comprometer firmeza terapêutica.", desc3: "Conforto extrafirme recomendado por fisioterapeutas para correção postural e alívio de dores. Tecido Jacquard bamboo com propriedades naturalmente hipoalergênicas e antibacterianas." },
      { src: o2, alt: "Orthoclínico Ouro Azul", title: "Orthoclínico Ouro Azul", desc: "Modelo com estrutura de madeira, conforto extrafirme e tecido Jacquard bamboo. Altura de 24 cm, ideal para alinhamento postural.", srcModal: O2, desc1: "Versão refinada com acabamento em azul elegante mantendo todas as propriedades ortopédicas.", desc2: "Estrutura de madeira com tratamento especial contra umidade e pragas urbanas.", desc3: "Conforto extrafirme desenvolvido para pessoas com problemas de coluna ou sobrepeso. Altura de 24cm proporciona entrada facilitada mantendo suporte terapêutico necessário." },
      { src: o3, alt: "Orthoclínico Ouro", title: "Orthoclínico Ouro", desc: "Com madeira certificada, tecido Jacquard bamboo e conforto extrafirme, o modelo possui 24 cm de altura e acabamento tradicional.", srcModal: O3, desc1: "Modelo clássico da linha ortopédica com décadas de tradição e eficácia comprovada.", desc2: "Madeira certificada tratada proporciona base sólida que não deforma com o tempo.", desc3: "Tecido Jacquard bamboo respirável mantém ambiente seco e higiênico durante o sono. Acabamento tradicional sem eurotop para máxima firmeza terapêutica requerida." },
      { src: o4, alt: "Lightpedic", title: "Lightpedic", desc: "Espumas compactadas de alta densidade, conforto extrafirme e tecido Jacquard toque de malha. Modelo double face com 25 cm de altura.", srcModal: O4, desc1: "Tecnologia de espumas compactadas em alta pressão resulta em densidade superior sem peso excessivo.", desc2: "Conforto extrafirme obtido através de processo térmico que aumenta rigidez da estrutura celular.", desc3: "Dupla face com densidades diferenciadas permite personalização do nível de firmeza. Tecido Jacquard com toque de malha combina resistência e conforto tátil." },
    ]
  },
  {
    titulo: "Categoria Kids",
    descCategoria: "Espumas seguras e certificadas para proporcionar conforto ideal ao bebê. Modelos com dupla face e tecidos delicados.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: kids1, alt: "Royal Saúde Berço", title: "Royal Saúde Berço", desc: "Clássico colchão de berço com espuma ideal para o bebê. Dupla face e tecido delicado para conforto e segurança.", srcModal: K1, desc1: "Espuma especialmente desenvolvida para bebês com densidade D18 que oferece suporte adequado sem ser rígida demais.", desc2: "Dupla face permite rotação periódica mantendo higiene e uniformidade do colchão.", desc3: "Tecido 100% algodão hipoalergênico e antialérgico protege a pele sensível do bebê. Dimensões padrão brasileiras que se adaptam perfeitamente aos berços convencionais." },
      { src: kids2, alt: "Junior Luxo", title: "Junior Luxo", desc: "Colchão de berço tradicional em espuma D18, dupla face com um lado liso. Conforto firme e durável para o bebê.", srcModal: K2, desc1: "Modelo tradicional com um lado texturizado para massagem suave e um lado liso para máximo conforto.", desc2: "Espuma D18 certificada livre de substâncias nocivas garante segurança total para bebês.", desc3: "Conforto firme recomendado por pediatras para desenvolvimento saudável da coluna infantil. Capa removível e lavável facilita higienização e manutenção da saúde do bebê." },
    ]
  },
  {
    titulo: "Categoria Pets",
    descCategoria: "Conforto e praticidade para os pets. Estrutura em madeira, espumas firmes e capa higiênica garantem descanso seguro e resistente.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: pets3, alt: "Orthocrin Pet", title: "Orthocrin Pet", desc: "Espuma firme com capa impermeável e estrutura em madeira de reflorestamento. Ideal para conforto e higiene dos pets.", srcModal: P1, desc1: "Espuma de densidade especial desenvolvida para suportar o peso e movimentos dos pets com durabilidade.", desc2: "Capa impermeável 100% lavável protege contra líquidos, pelos e odores indesejados.", desc3: "Estrutura de madeira de reflorestamento certificada garante sustentabilidade e resistência. Base antiderrapante mantém o colchão fixo durante uso e evita acidentes domésticos." },
      { src: pets1, alt: "Colchão Cama Pet Comfort", title: "Colchão Cama Pet Comfort", desc: "Espuma macia com capa lavável e tecido resistente. Conforto, praticidade e durabilidade para o descanso de cães e gatos em qualquer ambiente.", srcModal: pets1, desc1: "Espuma macia que proporciona acolhimento ideal para articulações dos pets, especialmente importantes em animais idosos.", desc2: "Capa completamente removível e lavável em máquina facilita manutenção da higiene.", desc3: "Tecido resistente a arranhões e mordidas mantém integridade mesmo com uso intenso. Design versátil que se adapta a diferentes ambientes da casa mantendo conforto do pet." },
    ]
  }
];

const Colchoes = () => {
  return (
    <div>
      <Seo title="Colchões | Orthomóveis Colchões Orthocrin" 
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

export default Colchoes;