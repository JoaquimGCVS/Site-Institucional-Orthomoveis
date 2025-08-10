import Marquee from "../components/Marquee/Marquee";
import Produtos from "../components/Produtos/Produtos";
import Seo from "../components/Seo/Seo";


import stillo1 from "../assets/travesseiros/stillo/FreshPillow.webp";
import stillo2 from "../assets/travesseiros/stillo/stillo_latex_alto.webp";
import stillo3 from "../assets/travesseiros/stillo/stillo_latex_medio.webp";
import stillo4 from "../assets/travesseiros/stillo/stillo_latex_baixo.webp";
import stillo5 from "../assets/travesseiros/stillo/stillolatex-kids.webp";

import visco1 from "../assets/travesseiros/viscopillow/travesseiroviscopillowanatomico1.webp";
import visco2 from "../assets/travesseiros/viscopillow/VISCOPILLOW_ALTO_MG_5842.webp";
import visco3 from "../assets/travesseiros/viscopillow/VISCOPILLOW_MEDIO_MG_5842_9b33f547-5035-4645-b44f-1d654eee56bf.webp";
import visco4 from "../assets/travesseiros/viscopillow/VISCOPILLOW_BASIC_MG_5842.webp";

import nasa1 from "../assets/travesseiros/nasa/nasa-viscobasic.webp";
import nasa2 from "../assets/travesseiros/nasa/nasa-viscomedio.webp";
import nasa3 from "../assets/travesseiros/nasa/nasa-viscoalto.webp";

import fiber1 from "../assets/travesseiros/fiberpillow/fiberpillowspecial.webp";
import fiber2 from "../assets/travesseiros/fiberpillow/FIBERPILLOW_CLASSIC.webp";
import fiber3 from "../assets/travesseiros/fiberpillow/FIBERPILLOW_BASIC.webp";

import fiberesp1 from "../assets/travesseiros/fiberpillowesp/TRAV_FIBRA_KING_MG_5861.webp";
import fiberesp2 from "../assets/travesseiros/fiberpillowesp/softpillow_basic.webp";
import fiberesp3 from "../assets/travesseiros/fiberpillowesp/travesseirodecorpo.webp";

import meu1 from "../assets/travesseiros/meu/11-MEU_PRIMEIRO_ORTHOCRIN_LATEX_-_ATUALIZADO.webp";
import meu2 from "../assets/travesseiros/meu/12-MEU_PRIMEIRO_ORTHOCRIN_VISCO-_ATUALIZADO.webp";
import meu3 from "../assets/travesseiros/meu/12-MEU_PRIMEIRO_ORTHOCRIN_FIBRA.webp";
import meu4 from "../assets/travesseiros/meu/08-MEU_ORTHOCRIN_VISCO.webp";

const linhas = [
  {
    titulo: "Linha Stillo",
    descCategoria: "Travesseiros de alta qualidade para todos os perfis, com opções de altura, conforto e tecnologia para noites perfeitas.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: stillo1, alt: "Freshpillow", title: "Freshpillow", desc: "Bolhas de gel que oferecem conforto e sensação de frescor. Altura de 12 cm, para fronha 50x70.", srcModal: stillo1, desc1: "A tecnologia Fresh Gel combina espuma HR com manta de gel, oferecendo suporte firme semelhante ao látex e frescor contínuo com bolhas que mantêm a temperatura agradável, ideal para todas as estações. O tecido Dry é respirável e controla a umidade, promovendo conforto e secagem rápida.", desc2: "A estrutura ergonômica proporciona apoio perfeito para pescoço e alinhamento da coluna, além de ser hipoalergênica, garantindo noites saudáveis. Benefícios incluem frescor, controle da transpiração e estímulo à circulação, indicado para quem prefere travesseiros firmes.", desc3: "As medidas do FreshPillow Orthocrin são 68 cm de largura, 48 cm de comprimento e 12 cm de altura, oferecendo suporte ideal para um sono confortável." },
      { src: stillo2, alt: "Stillo Látex Alto", title: "Stillo Látex Alto", desc: "Travesseiro com 15 cm de altura, indicado para quem prefere suporte elevado. Para fronha 50x70.", srcModal: stillo2, desc1: "Feito com espuma de alta resiliência (HR), ideal para quem prefere travesseiros firmes e altos, garantindo suporte semelhante ao látex natural. Oferece conforto e frescor com revestimento macio e respirável para noites agradáveis.", desc2: "Possui enchimento em espuma HR com microfuros que promovem ventilação, além de capa em algodão 200 fios, suave e respirável. Conta com tratamento hipoalergênico e tecnologia antimicrobiana Ultra-Fresh para proteger contra ácaros, bactérias e mofo.", desc3: "O travesseiro possui as dimensões de 48x68x15 cm, ideal para quem busca um travesseiro mais alto e firme com qualidade Orthocrin." },
      { src: stillo3, alt: "Stillo Látex Médio", title: "Stillo Látex Médio", desc: "Travesseiro com 12 cm de altura, ideal para quem busca conforto intermediário. Para fronha 50x70.", srcModal: stillo3, desc1: "Desenvolvido com espuma de alta resiliência (HR), oferecendo suporte firme e conforto semelhante ao látex natural, ideal para quem prefere travesseiros médios e firmes. Seu revestimento é suave, respirável e proporciona frescor e toque macio durante a noite.", desc2: "A estrutura conta com espuma HR com microfuros para ventilação eficiente, capa em algodão 200 fios, tratamento hipoalergênico antiácaro, antimofo e antialérgico, além da tecnologia antimicrobiana Ultra-Fresh que protege contra bactérias, mofo e ácaros. O travesseiro tem certificação Pró-Espuma pelo INER, assegurando qualidade e segurança.", desc3: "Suas medidas são 48 cm de largura, 68 cm de comprimento e 12 cm de altura, adequadas para proporcionar conforto e suporte durante o sono." },
      { src: stillo4, alt: "Stillo Látex Basic", title: "Stillo Látex Basic", desc: "Travesseiro básico de 10 cm de altura, com sustentação firme e confortável. Para fronha 50x70.", srcModal: stillo4, desc1: "O Travesseiro Stillo Látex Basic Orthocrin é feito com espuma de alta resiliência (HR), oferecendo suporte firme e conforto similar ao látex natural, indicado para quem prefere travesseiros firmes e baixos. Apresenta um revestimento macio e respirável que mantém o frescor durante a noite.", desc2: "Sua estrutura inclui espuma HR com microfuros para ventilação, capa em algodão 200 fios, tratamento antiácaro, antimofo e antialérgico, além da tecnologia antimicrobiana Ultra-Fresh, que protege contra bactérias, mofo e ácaros. O produto é certificado pelo INER, assegurando qualidade e segurança.", desc3: "As dimensões do travesseiro são 45 cm de largura, 65 cm de comprimento e 10 cm de altura, proporcionando suporte adequado e conforto para o usuário." },
      {
        src: stillo5, alt: "Stillo Látex Kids", title: "Stillo Látex Kids", desc: "Travesseiro infantil com flocos de espuma HR. Ideal para crianças de até 2 anos. Medida: 28x35 cm, altura 10 cm.", srcModal: stillo5, desc1: "Travesseiro desenvolvido para crianças a partir de 1 ano, com suporte firme e confortável que garante noites tranquilas. Combina qualidade, frescor e excelente custo-benefício para o sono dos pequenos.",
        desc2: "Enchimento com flocos de espuma de alta resiliência (HR), similar ao látex natural, e capa de algodão 200 fios, macia e respirável. Possui propriedades hipoalergênicas e tecnologia antimicrobiana Ultra-Fresh para proteção contra ácaros, bactérias e mofo.",
        desc3: "Certificado Pró-Espuma pelo INER, garantindo segurança e qualidade. Mede 28x35x10 cm, ideal para oferecer suporte e conforto adequados para crianças pequenas."
      }
    ]
  },
  {
    titulo: "Linha Nasa Visco Soft",
    descCategoria: "Travesseiros ergonômicos com espuma viscoelástica de alta densidade (D24), que se molda ao formato da cabeça e pescoço.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: nasa1, alt: "Nasa Visco Soft Basic", title: "Nasa Visco Soft Basic", desc: "Travesseiro de 10 cm de altura. Firme e confortável, para quem prefere menor volume. Para fronha 50x70.", srcModal: nasa1, desc1: "O travesseiro é desenvolvido com espuma viscoelástica da NASA, que se ajusta aos contornos da cabeça e pescoço, promovendo alinhamento saudável da coluna e melhorando a circulação sanguínea para um sono profundo. Ele oferece excelente custo-benefício e conforto personalizado, moldando-se ao corpo com sensação de abraço.", desc2: "Sua estrutura conta com tecido malha de alto teor de algodão, garantindo toque macio e agradável, além da tecnologia antimicrobiana Ultra-Fresh, que protege contra ácaros, bactérias e mofo, mantendo o travesseiro limpo e seguro. O produto possui certificação Pró-Espuma pelo INER, assegurando qualidade, durabilidade e alta performance.", desc3: "As medidas do travesseiro são 48 cm de largura, 68 cm de comprimento e 10 cm de altura." },
      { src: nasa2, alt: "Nasa Visco Soft Médio", title: "Nasa Visco Soft Médio", desc: "Travesseiro com 12 cm de altura. Proporciona suporte intermediário e alívio anatômico. Para fronha 50x70.", srcModal: nasa2, desc1: "O travesseiro é desenvolvido com espuma viscoelástica da NASA, que se ajusta aos contornos da cabeça e pescoço, promovendo alinhamento saudável da coluna e melhorando a circulação sanguínea para um sono profundo. Ele oferece excelente custo-benefício e conforto personalizado, moldando-se ao corpo com sensação de abraço.", desc2: "Sua estrutura conta com tecido malha de alto teor de algodão, garantindo toque macio e agradável, além da tecnologia antimicrobiana Ultra-Fresh, que protege contra ácaros, bactérias e mofo, mantendo o travesseiro limpo e seguro. O produto possui certificação Pró-Espuma pelo INER, assegurando qualidade, durabilidade e alta performance.", desc3: "As medidas do travesseiro são 48 cm de largura, 68 cm de comprimento e 12 cm de altura." },
      { src: nasa3, alt: "Nasa Visco Soft Alto", title: "Nasa Visco Soft Alto", desc: "Travesseiro de 15 cm de altura. Sustentação máxima e conforto para quem dorme de lado. Para fronha 50x70.", srcModal: nasa3, desc1: "O travesseiro é desenvolvido com espuma viscoelástica da NASA, que se ajusta aos contornos da cabeça e pescoço, promovendo alinhamento saudável da coluna e melhorando a circulação sanguínea para um sono profundo. Ele oferece excelente custo-benefício e conforto personalizado, moldando-se ao corpo com sensação de abraço.", desc2: "Sua estrutura conta com tecido malha de alto teor de algodão, garantindo toque macio e agradável, além da tecnologia antimicrobiana Ultra-Fresh, que protege contra ácaros, bactérias e mofo, mantendo o travesseiro limpo e seguro. O produto possui certificação Pró-Espuma pelo INER, assegurando qualidade, durabilidade e alta performance.", desc3: "As medidas do travesseiro são 48 cm de largura, 68 cm de comprimento e 15 cm de altura." }
    ]
  },
  {
    titulo: "Linha Viscopillow",
    descCategoria: "Travesseiros com espuma viscoelástica que proporcionam alívio de pressão e acomodam ombros e pescoço. Ideais para conforto anatômico, frescor e toque macio com fronha lavável.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: visco1, alt: "Viscopillow Anatômico", title: "Viscopillow Anatômico", desc: "Apoio cervical com 15 cm de altura. Oferece sustentação anatômica ideal. Para fronha 50x70.", srcModal: visco1, desc1: "O travesseiro possui curvatura anatômica que oferece apoio correto à cabeça e pescoço, ideal para todas as posições de dormir, com conforto macio e altura maior. Ele proporciona alívio e suporte que se ajustam ao corpo, melhorando a qualidade do descanso.", desc2: "A estrutura é feita com espuma viscoelástica de alta qualidade que garante alinhamento da coluna e alívio da pressão, além de tecido Jacquard Bamboo termorregulador e capa removível com zíper para frescor e praticidade. O formato anatômico é especialmente desenvolvido para quem dorme de lado, promovendo postura saudável.", desc3: "Conta ainda com tecnologia antimicrobiana Ultra-Fresh, que protege contra ácaros, bactérias e mofo, mantendo o travesseiro limpo e saudável. Suas medidas são 48 cm de largura, 68 cm de comprimento e 15 cm de altura." },
      { src: visco2, alt: "Viscopillow Alto", title: "Viscopillow Alto", desc: "Travesseiro de 15 cm de altura, com toque macio e suporte elevado. Para fronha 50x70.", srcModal: visco2, desc1: "O travesseiro oferece apoio correto à cabeça e pescoço, combinando ergonomia e conforto para quem prefere modelo alto e macio, garantindo descanso superior e suporte ajustado ao corpo.", desc2: "Sua estrutura conta com espuma viscoelástica de alta qualidade que alinha a coluna e alivia a pressão, tecido Malha Bamboo termorregulador e capa removível com zíper para frescor e praticidade.", desc3: "Além disso, possui tecnologia antimicrobiana Ultra-Fresh que protege contra ácaros, bactérias e mofo, mantendo o travesseiro limpo e saudável. Mede 48 cm de largura, 68 cm de comprimento e 15 cm de altura." },
      { src: visco3, alt: "Viscopillow Médio", title: "Viscopillow Médio", desc: "Travesseiro com 12 cm de altura. Suporte intermediário com conforto e frescor. Para fronha 50x70.", srcModal: visco3, desc1: "O travesseiro oferece apoio correto à cabeça e pescoço, combinando ergonomia e conforto para quem prefere modelo alto e macio, garantindo descanso superior e suporte ajustado ao corpo.", desc2: "Sua estrutura conta com espuma viscoelástica de alta qualidade que alinha a coluna e alivia a pressão, tecido Malha Bamboo termorregulador e capa removível com zíper para frescor e praticidade.", desc3: "Além disso, possui tecnologia antimicrobiana Ultra-Fresh que protege contra ácaros, bactérias e mofo, mantendo o travesseiro limpo e saudável. Mede 48 cm de largura, 68 cm de comprimento e 12 cm de altura." },
      { src: visco4, alt: "Viscopillow Basic", title: "Viscopillow Basic", desc: "Travesseiro de 10 cm de altura. Macio, com alívio de pressão e toque suave. Para fronha 50x70.", srcModal: visco4, desc1: "O travesseiro oferece apoio correto à cabeça e pescoço, combinando ergonomia e conforto para quem prefere modelo alto e macio, garantindo descanso superior e suporte ajustado ao corpo.", desc2: "Sua estrutura conta com espuma viscoelástica de alta qualidade que alinha a coluna e alivia a pressão, tecido Malha Bamboo termorregulador e capa removível com zíper para frescor e praticidade.", desc3: "Além disso, possui tecnologia antimicrobiana Ultra-Fresh que protege contra ácaros, bactérias e mofo, mantendo o travesseiro limpo e saudável. Mede 48 cm de largura, 68 cm de comprimento e 10 cm de altura." }
    ]
  },
  {
    titulo: "Linha Fiberpillow",
    descCategoria: "Travesseiros com enchimento em fibra siliconada, ideais para quem busca conforto extremo. Possuem toque macio, são laváveis e evitam a sensação de umidade por meio do tecido Malha Dry.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: fiber1, alt: "Fiberpillow Special", title: "Fiberpillow Special", desc: "Travesseiro de 15 cm de altura. Sustentação firme e sensação de conforto extremo. Para fronha 50x70.", srcModal: fiber1, desc1: "O Travesseiro Fiberpillow Special Orthocrin combina conforto e suporte com enchimento de fibra siliconada, oferecendo toque macio e volumoso sem perder firmeza, indicado para quem prefere travesseiros mais altos.", desc2: "Sua estrutura possui enchimento em fibra siliconada respirável e durável, tecido Malha Dry que não retém suor, além de ser antialérgico e ventilado para noites tranquilas.", desc3: "Com 16 cm de altura, proporciona suporte adequado para cabeça e pescoço, e é lavável para maior praticidade." },
      { src: fiber2, alt: "Fiberpillow Classic", title: "Fiberpillow Classic", desc: "Travesseiro de 15 cm de altura. Conforto médio e toque suave. Para fronha 50x70.", srcModal: fiber2, desc1: "O Travesseiro Fiberpillow Classic Orthocrin oferece conforto intermediário com enchimento de fibra siliconada macia e volumosa, ideal para quem prefere travesseiros mais altos e macios.", desc2: "Sua estrutura conta com fibra siliconada durável e respirável, tecido Malha Dry que evita a umidade, além de ser antialérgico e ventilado para um sono tranquilo.", desc3: "Com 15 cm de altura, proporciona suporte adequado para cabeça e pescoço, e é lavável para maior praticidade." },
      { src: fiber3, alt: "Fiberpillow Basic", title: "Fiberpillow Basic", desc: "Travesseiro de 10 cm de altura. Compacto e confortável. Para fronha 60x40.", srcModal: fiber3, desc1: "O Travesseiro Fiberpillow Classic Orthocrin oferece conforto macio com enchimento de fibra siliconada volumosa e respirável, ideal para quem prefere travesseiros baixos e macios.", desc2: "Sua estrutura conta com fibra durável, tecido Malha Dry que evita a umidade, além de ser antialérgico e ventilado para noites tranquilas.", desc3: "Com 12 cm de altura, proporciona suporte adequado para cabeça e pescoço, e é lavável para maior praticidade." }
    ]
  },
  {
    titulo: "Fiberpillow Especiais",
    descCategoria: "Acessórios que auxiliam na ergonomia do sono. Confeccionados com tecido 200 fios ou algodão com alto teor, oferecem sensação de conforto firme e toque suave. Modelos laváveis com enchimento em fibra siliconada ou flocos de espuma.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: fiberesp1, alt: "Fiberpillow King", title: "Fiberpillow King", desc: "Travesseiro de 15 cm de altura. Conforto firme com enchimento 100% fibra siliconada. Para fronha 50x90.", srcModal: fiberesp1, desc1: "O Travesseiro Fiberpillow King Orthocrin oferece equilíbrio entre conforto macio e suporte firme, com enchimento de fibra siliconada, ideal para quem prefere travesseiros altos e volumosos. A versão King Size é indicada para colchões grandes, proporcionando mais conforto nas noites de sono.", desc2: "Sua estrutura conta com fibra siliconada respirável e durável, revestimento em algodão 200 fios para frescor e toque macio, além de ser antialérgico e ventilado para noites tranquilas. Com 25 cm de altura, é ideal também como segundo travesseiro para maior conforto.", desc3: "As medidas são 50 cm de largura, 90 cm de comprimento e 25 cm de altura, e o produto possui garantia de 90 dias, garantindo conforto e durabilidade para quem busca qualidade." },
      { src: fiberesp2, alt: "Softpillow", title: "Softpillow", desc: "Travesseiro com sensação de conforto firme e tecido com alto teor de algodão. Para fronha 50x70.", srcModal: fiberesp2, desc1: "O travesseiro é o modelo mais acessível da linha, oferecendo conforto e suporte com excelente custo-benefício. Feito com flocos de espuma de alta qualidade, é ideal para quem prefere travesseiros mais altos e firmes, com 15 cm de altura para apoio correto de cabeça e pescoço.", desc2: "Sua estrutura conta com enchimento em flocos de espuma que garante circulação de ar e mantém o formato por mais tempo. Com 15 cm de altura, oferece suporte firme e é a opção econômica para quem busca qualidade a preço acessível.", desc3: "As medidas são 43 cm de largura, 62 cm de comprimento e 15 cm de altura, e o produto tem garantia de 90 dias contra deformação." },
      { src: fiberesp3, alt: "Travesseiro de Corpo", title: "Travesseiro de Corpo", desc: "Travesseiro de 40 cm de altura. Conforto firme com enchimento em flocos de espuma. Para fronha 130x40.", srcModal: fiberesp3, desc1: "O Travesseiro de Corpo Orthocrin é ideal para quem busca conforto e apoio durante o sono, especialmente para quem dorme de lado, ajudando a manter a postura correta e oferecendo uma noite tranquila. Também conhecido como travesseiro abraçável ou maridão, proporciona versatilidade e aconchego.", desc2: "Sua estrutura conta com enchimento denso em fibras siliconadas de poliéster, que oferece maciez e suporte ao corpo, e tecido de algodão 200 fios para toque suave. É indicado para gestantes, pois suporta a barriga e alinha a coluna, além de ser antialérgico.", desc3: "As medidas são 40 cm de largura, 130 cm de comprimento e 17 cm de altura, proporcionando conforto e suporte amplos para diversas necessidades." }
    ]
  },
  {
    titulo: "Meu Primeiro Orthocrin",
    descCategoria: "Acessórios exclusivos para crianças, desde o nascimento até a adolescência. Desenvolvidos com tecido antialérgico e Malha Belga Camomille, que possui fragrância natural para acalmar e relaxar. Respeitam a anatomia infantil e oferecem conforto seguro em todas as fases da infância.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      {
        src: meu1, alt: "Meu Primeiro Orthocrin Látex", title: "Meu Primeiro Orthocrin Látex", desc: "Travesseiro de 3 cm de altura. Ideal para o primeiro ano de vida. Medida: 30x40 cm.", srcModal: meu1, desc1: "Travesseiro de látex Orthocrin, indicado para os primeiros 4 meses de vida do bebê. Proporciona apoio ideal para dormir de lado, prevenindo refluxo e promovendo conforto.",
        desc2: "Feito de látex asséptico, respirável e lavável, com tecido de malha 100% poliéster suave ao toque. Conta com aromaterapia natural de camomila para acalmar e ajudar no sono do bebê.",
        desc3: "Medidas de 30x40x3 cm, ideal para ser usado junto ao Apoio Antirefluxo Confort Baby, ajudando a prevenir o refluxo gastresofágico nesta fase inicial."
      },
      {
        src: meu2, alt: "Meu Primeiro Orthocrin Visco", title: "Meu Primeiro Orthocrin Visco", desc: "Travesseiro de 4 cm de altura. Ideal para os primeiros 4 anos da criança. Medida: 35x55 cm.", srcModal: meu2, desc1: "Travesseiro universal em espuma viscoelástica, que se adapta suavemente aos contornos da criança, proporcionando aconchego e suporte ideal. Adequado tanto para bercinho quanto para a primeira cama, evita que a criança saia do travesseiro durante o sono.",
        desc2: "Fabricado com espuma de poliuretano viscoelástica e tecido de malha 100% poliéster suave ao toque. Possui aromaterapia com essência de camomila, que ajuda a acalmar e preparar para o sono.",
        desc3: "Medidas de 35x55x4 cm, indicado para crianças nos primeiros 4 anos, oferecendo sustentação confortável para a cabeça e pescoço em várias posições de sono."
      },
      {
        src: meu3, alt: "Meu Primeiro Orthocrin Fibra", title: "Meu Primeiro Orthocrin Fibra", desc: "Travesseiro de 10 cm de altura. Tecido 200 fios. Ideal para crianças de 3 a 7 anos. Medida: 40x60 cm.", srcModal: meu3, desc1: "Travesseiro de fibra ideal para crianças de 3 a 7 anos, oferecendo conforto e segurança com tamanho adequado para a curvatura dos ombros. É maleável e não muito alto, atendendo ao movimento durante o sono.",
        desc2: "Feito com fibra de poliéster siliconada, material antialérgico e adaptável. O tecido 100% algodão ajuda no controle da temperatura e na rápida evaporação da transpiração.",
        desc3: "Medidas de 40x60x10 cm, indicado para crianças entre 3 e 7 anos, proporcionando conforto adequado para essa faixa etária."
      },
      {
        src: meu4, alt: "Meu Orthocrin Visco", title: "Meu Orthocrin Visco", desc: "Travesseiro de 7 cm de altura. Indicado para crianças de 7 a 12 anos. Medida: 48x68 cm.", srcModal: meu4, desc1: "Feito de espuma viscoelástica, conhecida como espuma do abraço NASA, oferecendo aconchego e maciez ideais para crianças. É mais largo, com altura que se adapta à curvatura dos ombros, e possui tecido suave com aromaterapia de camomila para relaxamento.",
        desc2: "Sua estrutura é fresca, hipoalergênica e amolda-se ao corpo, proporcionando suporte ideal para a cabeça. O tecido em malha Camomille libera aroma suave e calmante, indicado para crianças de 7 a 12 anos e adultos que preferem travesseiros baixos.",
        desc3: "As medidas são 40 cm de largura, 60 cm de comprimento e 7 cm de altura, adequadas para um sono confortável e tranquilo."
      }
    ]
  }
];

const Travesseiros = () => {
  return (
    <div>
      <Seo title="Travesseiros | Orthomóveis Colchões Orthocrin"
        seoImage="/LogoLoja.webp"
        socialImage="/logocomfundo2.webp" />
      <Marquee />
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