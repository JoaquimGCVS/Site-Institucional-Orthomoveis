import Marquee from "../components/Marquee/Marquee";
import Produtos from "../components/Produtos/Produtos";
import Seo from "../components/Seo/Seo";

import stillo1 from "../assets/travesseiros/stillo/1.webp";
import stillo2 from "../assets/travesseiros/stillo/2.webp";
import stillo3 from "../assets/travesseiros/stillo/3.webp";
import stillo4 from "../assets/travesseiros/stillo/4.webp";
import stillo5 from "../assets/travesseiros/stillo/5.webp";

import visco1 from "../assets/travesseiros/viscopillow/1.webp";
import visco2 from "../assets/travesseiros/viscopillow/2.webp";
import visco3 from "../assets/travesseiros/viscopillow/3.webp";
import visco4 from "../assets/travesseiros/viscopillow/4.webp";

import nasa1 from "../assets/travesseiros/nasa/1.png";
import nasa2 from "../assets/travesseiros/nasa/2.png";
import nasa3 from "../assets/travesseiros/nasa/3.png";

import fiber1 from "../assets/travesseiros/fiberpillow/1.webp";
import fiber2 from "../assets/travesseiros/fiberpillow/2.webp";
import fiber3 from "../assets/travesseiros/fiberpillow/3.webp";

import fiberesp1 from "../assets/travesseiros/fiberpillowesp/1.webp";
import fiberesp2 from "../assets/travesseiros/fiberpillowesp/2.webp";
import fiberesp3 from "../assets/travesseiros/fiberpillowesp/3.webp";

import meu1 from "../assets/travesseiros/meu/1.webp";
import meu2 from "../assets/travesseiros/meu/2.webp";
import meu3 from "../assets/travesseiros/meu/3.webp";
import meu4 from "../assets/travesseiros/meu/4.webp";

// Bloco de dados das linhas de travesseiros
const linhas = [
  {
    titulo: "Linha Stillo",
    descCategoria: "Travesseiros de alta qualidade para todos os perfis, com opções de altura, conforto e tecnologia para noites perfeitas.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: stillo1, alt: "Freshpillow", title: "Freshpillow", desc: "Bolhas de gel que oferecem conforto e sensação de frescor. Altura de 12 cm, para fronha 50x70.", srcModal: stillo1, desc1: "Tecnologia exclusiva com microesferas de gel que proporcionam sensação de frescor contínuo durante toda a noite.", desc2: "Altura de 12cm oferece suporte cervical intermediário adequado para a maioria dos perfis de sono.", desc3: "Compatible com fronhas padrão 50x70cm. Ideal para pessoas que sentem calor durante o sono ou vivem em climas quentes." },
      { src: stillo2, alt: "Stillo Látex Alto", title: "Stillo Látex Alto", desc: "Travesseiro com 15 cm de altura, indicado para quem prefere suporte elevado. Para fronha 50x70.", srcModal: stillo2, desc1: "Látex natural de alta qualidade proporciona elasticidade superior e retorno rápido ao formato original.", desc2: "Altura de 15cm oferece suporte elevado ideal para pessoas que dormem de lado ou têm ombros largos.", desc3: "Durabilidade excepcional do látex garante manutenção das propriedades por anos. Naturalmente antibacteriano e hipoalergênico." },
      { src: stillo3, alt: "Stillo Látex Médio", title: "Stillo Látex Médio", desc: "Travesseiro com 12 cm de altura, ideal para quem busca conforto intermediário. Para fronha 50x70.", srcModal: stillo3, desc1: "Látex de densidade média que combina suporte adequado com conforto acolhedor para uso universal.", desc2: "Altura de 12cm proporciona equilíbrio perfeito entre sustentação cervical e maciez superficial.", desc3: "Versatilidade que atende tanto pessoas que dormem de costas quanto de lado. Respirabilidade natural do látex." },
      { src: stillo4, alt: "Stillo Látex Basic", title: "Stillo Látex Basic", desc: "Travesseiro básico de 10 cm de altura, com sustentação firme e confortável. Para fronha 50x70.", srcModal: stillo4, desc1: "Modelo de entrada da linha com látex de qualidade que oferece firmeza consistente e suporte cervical básico.", desc2: "Altura compacta de 10cm ideal para pessoas que preferem travesseiros mais baixos ou dormem de bruços.", desc3: "Excelente custo-benefício mantendo todas as vantagens do látex natural. Durável e fácil manutenção." },
      { src: stillo5, alt: "Stillo Látex Kids", title: "Stillo Látex Kids", desc: "Travesseiro infantil com flocos de espuma HR. Ideal para crianças de até 2 anos. Medida: 28x35 cm, altura 10 cm.", srcModal: stillo5, desc1: "Desenvolvido especificamente para crianças de até 2 anos com flocos de espuma HR de alta qualidade e segurança.", desc2: "Dimensões reduzidas de 28x35cm respeitam a anatomia infantil proporcionando suporte adequado sem excessos.", desc3: "Altura de 10cm controlada para evitar problemas cervicais. Materiais certificados livres de substâncias nocivas." }
    ]
  },
  {
    titulo: "Linha Nasa Visco Soft",
    descCategoria: "Travesseiros ergonômicos com espuma viscoelástica de alta densidade (D24), que se molda ao formato da cabeça e pescoço.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: nasa1, alt: "Nasa Visco Soft Basic", title: "Nasa Visco Soft Basic", desc: "Travesseiro de 10 cm de altura. Firme e confortável, para quem prefere menor volume. Para fronha 50x70.", srcModal: nasa1, desc1: "Espuma viscoelástica NASA de densidade D24 se molda perfeitamente aos contornos da cabeça e pescoço.", desc2: "Altura compacta de 10cm oferece firmeza controlada ideal para quem prefere suporte mais baixo.", desc3: "Tecnologia desenvolvida pela NASA garante alívio de pressão e distribuição uniforme do peso. Retorno lento ao formato original." },
      { src: nasa2, alt: "Nasa Visco Soft Médio", title: "Nasa Visco Soft Médio", desc: "Travesseiro com 12 cm de altura. Proporciona suporte intermediário e alívio anatômico. Para fronha 50x70.", srcModal: nasa2, desc1: "Espuma viscoelástica de alta densidade D24 com propriedades termossensíveis que se adaptam à temperatura corporal.", desc2: "Altura intermediária de 12cm proporciona suporte ergonômico equilibrado para diferentes posições de sono.", desc3: "Alívio anatômico de pontos de pressão reduz tensões cervicais e melhora qualidade do descanso. Memória de formato avançada." },
      { src: nasa3, alt: "Nasa Visco Soft Alto", title: "Nasa Visco Soft Alto", desc: "Travesseiro de 15 cm de altura. Sustentação máxima e conforto para quem dorme de lado. Para fronha 50x70.", srcModal: nasa3, desc1: "Máxima altura de 15cm com espuma viscoelástica premium oferece sustentação superior para pessoas que dormem de lado.", desc2: "Densidade D24 controlada proporciona suporte firme sem rigidez excessiva, mantendo conforto durante toda noite.", desc3: "Especialmente desenvolvido para preencher espaço entre ombro e pescoço. Reduz dores cervicais e melhora alinhamento da coluna." }
    ]
  },
  {
    titulo: "Linha Viscopillow",
    descCategoria: "Travesseiros com espuma viscoelástica que proporcionam alívio de pressão e acomodam ombros e pescoço. Ideais para conforto anatômico, frescor e toque macio com fronha lavável.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: visco1, alt: "Viscopillow Anatômico", title: "Viscopillow Anatômico", desc: "Apoio cervical com 15 cm de altura. Oferece sustentação anatômica ideal. Para fronha 50x70.", srcModal: visco1, desc1: "Design anatômico exclusivo com contornos específicos que se ajustam perfeitamente à curvatura natural do pescoço.", desc2: "Espuma viscoelástica de alta densidade oferece suporte cervical personalizado reduzindo tensões musculares.", desc3: "Altura de 15cm com zona de apoio diferenciada para cabeça e pescoço. Ideal para pessoas com problemas cervicais ou dores no pescoço." },
      { src: visco2, alt: "Viscopillow Alto", title: "Viscopillow Alto", desc: "Travesseiro de 15 cm de altura, com toque macio e suporte elevado. Para fronha 50x70.", srcModal: visco2, desc1: "Espuma viscoelástica com tratamento especial que combina toque macio superficial com suporte firme interno.", desc2: "Altura generosa de 15cm proporciona sustentação elevada adequada para diferentes perfis corporais.", desc3: "Fronha lavável inclusa facilita manutenção da higiene. Alívio de pressão progressivo que se adapta gradualmente ao peso." },
      { src: visco3, alt: "Viscopillow Médio", title: "Viscopillow Médio", desc: "Travesseiro com 12 cm de altura. Suporte intermediário com conforto e frescor. Para fronha 50x70.", srcModal: visco3, desc1: "Formulação especial da espuma viscoelástica inclui aditivos refrescantes que mantêm temperatura corporal regulada.", desc2: "Altura média de 12cm oferece suporte intermediário versátil adequado para múltiplas posições de sono.", desc3: "Sistema de ventilação integrado na estrutura celular proporciona circulação de ar constante. Conforto duradouro sem perda de propriedades." },
      { src: visco4, alt: "Viscopillow Basic", title: "Viscopillow Basic", desc: "Travesseiro de 10 cm de altura. Macio, com alívio de pressão e toque suave. Para fronha 50x70.", srcModal: visco4, desc1: "Espuma viscoelástica de entrada com densidade controlada oferece maciez superior e toque aveludado.", desc2: "Altura compacta de 10cm proporciona alívio de pressão eficiente sem volume excessivo.", desc3: "Modelo de acesso à tecnologia viscoelástica com excelente custo-benefício. Adaptação progressiva aos contornos da cabeça." }
    ]
  },
  {
    titulo: "Linha Fiberpillow",
    descCategoria: "Travesseiros com enchimento em fibra siliconada, ideais para quem busca conforto extremo. Possuem toque macio, são laváveis e evitam a sensação de umidade por meio do tecido Malha Dry.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: fiber1, alt: "Fiberpillow Special", title: "Fiberpillow Special", desc: "Travesseiro de 15 cm de altura. Sustentação firme e sensação de conforto extremo. Para fronha 50x70.", srcModal: fiber1, desc1: "Fibra siliconada premium de alta qualidade proporciona sustentação firme mantendo leveza e respirabilidade superior.", desc2: "Altura generosa de 15cm com enchimento controlado oferece conforto extremo sem comprometer suporte cervical.", desc3: "Tecido Malha Dry evita sensação de umidade mantendo ambiente seco durante toda noite. Completamente lavável em máquina doméstica." },
      { src: fiber2, alt: "Fiberpillow Classic", title: "Fiberpillow Classic", desc: "Travesseiro de 15 cm de altura. Conforto médio e toque suave. Para fronha 50x70.", srcModal: fiber2, desc1: "Fibra siliconada clássica com densidade média que equilibra maciez e suporte para uso universal.", desc2: "Toque suave proporcionado por fibras de alta qualidade que mantêm formato sem criar pontos duros.", desc3: "Altura padrão de 15cm adequada para maioria dos usuários. Facilidade de manutenção com lavagem completa do travesseiro." },
      { src: fiber3, alt: "Fiberpillow Basic", title: "Fiberpillow Basic", desc: "Travesseiro de 10 cm de altura. Compacto e confortável. Para fronha 60x40.", srcModal: fiber3, desc1: "Modelo compacto com fibra siliconada de qualidade oferece conforto essencial em formato reduzido.", desc2: "Altura de 10cm ideal para quem prefere travesseiros mais baixos ou para uso em beliches e sofás-cama.", desc3: "Dimensões especiais 60x40cm compatíveis com fronhas específicas. Leveza que facilita transporte e armazenamento." }
    ]
  },
  {
    titulo: "Fiberpillow Especiais",
    descCategoria: "Acessórios que auxiliam na ergonomia do sono. Confeccionados com tecido 200 fios ou algodão com alto teor, oferecem sensação de conforto firme e toque suave. Modelos laváveis com enchimento em fibra siliconada ou flocos de espuma.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: fiberesp1, alt: "Fiberpillow King", title: "Fiberpillow King", desc: "Travesseiro de 15 cm de altura. Conforto firme com enchimento 100% fibra siliconada. Para fronha 50x90.", srcModal: fiberesp1, desc1: "Dimensões king size de 50x90cm proporcionam espaço amplo para maior liberdade de movimento durante o sono.", desc2: "100% fibra siliconada premium oferece conforto firme com propriedades hipoalergênicas e antibacterianas.", desc3: "Altura de 15cm com enchimento controlado garante suporte consistente em toda extensão. Ideal para camas king size." },
      { src: fiberesp2, alt: "Softpillow", title: "Softpillow", desc: "Travesseiro com sensação de conforto firme e tecido com alto teor de algodão. Para fronha 50x70.", srcModal: fiberesp2, desc1: "Tecido com alto teor de algodão proporciona toque natural e respirabilidade superior para noites mais frescas.", desc2: "Sensação de conforto firme obtida através de fibras especiais que mantêm suporte sem rigidez excessiva.", desc3: "Ergonomia que auxilia no alinhamento cervical durante o sono. Durabilidade excepcional com manutenção facilitada." },
      { src: fiberesp3, alt: "Travesseiro de Corpo", title: "Travesseiro de Corpo", desc: "Travesseiro de 40 cm de altura. Conforto firme com enchimento em flocos de espuma. Para fronha 130x40.", srcModal: fiberesp3, desc1: "Dimensões especiais de 130x40cm desenvolvidas para apoio integral do corpo durante o descanso.", desc2: "Enchimento em flocos de espuma oferece moldagem personalizada e suporte distribuído ao longo de todo corpo.", desc3: "Altura de 40cm proporciona versatilidade de uso como apoio para pernas, costas ou abraço. Ideal para gestantes e pessoas com problemas circulatórios." }
    ]
  },
  {
    titulo: "Meu Primeiro Orthocrin",
    descCategoria: "Acessórios exclusivos para crianças, desde o nascimento até a adolescência. Desenvolvidos com tecido antialérgico e Malha Belga Camomille, que possui fragrância natural para acalmar e relaxar. Respeitam a anatomia infantil e oferecem conforto seguro em todas as fases da infância.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: meu1, alt: "Meu Primeiro Orthocrin Látex", title: "Meu Primeiro Orthocrin Látex", desc: "Travesseiro de 3 cm de altura. Ideal para o primeiro ano de vida. Medida: 30x40 cm.", srcModal: meu1, desc1: "Desenvolvido especificamente para bebês de 0 a 12 meses com látex natural hipoalergênico e livre de substâncias nocivas.", desc2: "Altura mínima de 3cm proporciona suporte adequado sem riscos à respiração ou desenvolvimento cervical do bebê.", desc3: "Dimensões reduzidas de 30x40cm adequadas ao tamanho do berço. Tecido antialérgico com fragrância natural de camomila para acalmar." },
      { src: meu2, alt: "Meu Primeiro Orthocrin Visco", title: "Meu Primeiro Orthocrin Visco", desc: "Travesseiro de 4 cm de altura. Ideal para os primeiros 4 anos da criança. Medida: 35x55 cm.", srcModal: meu2, desc1: "Espuma viscoelástica especial para crianças de 1 a 4 anos com densidade controlada para segurança infantil.", desc2: "Altura progressiva de 4cm acompanha desenvolvimento cervical natural da criança durante crescimento.", desc3: "Dimensões 35x55cm crescem com a criança. Malha Belga Camomille com fragrância natural que promove relaxamento e sono tranquilo." },
      { src: meu3, alt: "Meu Primeiro Orthocrin Fibra", title: "Meu Primeiro Orthocrin Fibra", desc: "Travesseiro de 10 cm de altura. Tecido 200 fios. Ideal para crianças de 3 a 7 anos. Medida: 40x60 cm.", srcModal: meu3, desc1: "Fibra siliconada especial para crianças pré-escolares com propriedades hipoalergênicas e lavagem facilitada.", desc2: "Tecido 200 fios de alta qualidade garante durabilidade e toque macio adequado à pele sensível infantil.", desc3: "Altura de 10cm apropriada para fase de crescimento de 3 a 7 anos. Dimensões 40x60cm compatíveis com camas infantis." },
      { src: meu4, alt: "Meu Orthocrin Visco", title: "Meu Orthocrin Visco", desc: "Travesseiro de 7 cm de altura. Indicado para crianças de 7 a 12 anos. Medida: 48x68 cm.", srcModal: meu4, desc1: "Espuma viscoelástica adaptada para pré-adolescentes de 7 a 12 anos com suporte cervical crescente.", desc2: "Altura intermediária de 7cm acompanha necessidades de suporte da fase escolar sem excessos.", desc3: "Dimensões 48x68cm se aproximam do tamanho adulto preparando transição. Tecnologia que cresce junto com a criança." }
    ]
  }
];

const Travesseiros = () => {
  return (
    <div>
      <Seo title="Travesseiros | Orthomóveis Colchões Orthocrin" 
        seoImage="/LogoLoja.webp"
        socialImage="/logocomfundo2.webp"/>
      <Marquee/>
      {linhas.map((linha) => (
        <Produtos
          key={linha.titulo}
          titulo={linha.titulo}
          descCategoria={linha.descCategoria}
          backgroundColor={linha.backgroundColor}
          color={linha.color}
          images={linha.images}
        />
      ))}
    </div>
  );
};

export default Travesseiros;