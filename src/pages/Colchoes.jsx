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
      { src: p1, alt: "Premium Visco", title: "Premium Visco", desc: "Fios de seda e espuma viscoelástica garantem noites de descanso profundo e de relaxamento absoluto.", srcModal: E2, desc1: "O colchão Premium Visco oferece dupla camada de conforto para um aconchego impecável, com malha de alta gramatura e fios de seda que garantem resistência, durabilidade e qualidade.", desc2: "Sua estrutura combina espuma hipersoft exclusiva, que relaxa a musculatura e proporciona conforto plush, com espuma viscoelástica inspirada na NASA, que se adapta ao corpo, alivia a pressão e melhora a circulação.", desc3: "Com altura de 36 cm, entrega suporte e maciez ideais para noites mais reparadoras e confortáveis." },
      { src: p2, alt: "Privilége Gel", title: "Privilége Gel", desc: "Dupla camada de conforto com espuma hipersoft e toque macio, perfeita para noites de sono renovador.", srcModal: E1, desc1: "O colchão Privillége Gel possui dupla camada de conforto que combina frescor, suporte e elasticidade, proporcionando um sono renovador. Sua malha de alta gramatura, feita no Brasil com tecnologia belga e fios nobres de viscose pura, oferece toque suave, resistência e qualidade.", desc2: "A estrutura conta com espuma hipersoft exclusiva, que relaxa a musculatura e garante conforto plush e maciez, ajudando no descanso profundo e reparador.", desc3: "Com altura de 36 cm, entrega suporte ideal e sensação de aconchego para noites tranquilas e revigorantes." },
      { src: p3, alt: "Eternitá Gel", title: "Eternitá Gel", desc: "Adapta-se ao corpo com frescor e elasticidade, oferecendo suporte ideal e conforto térmico constante.", srcModal: E3, desc1: "O colchão Eternitá Gel conta com tecnologia que se ajusta ao corpo, oferecendo suporte e conforto térmico. Sua malha de alta gramatura, feita no Brasil com tecnologia belga e fios de viscose pura, garante toque suave, resistência e qualidade para um sono reparador.", desc2: "A estrutura inclui espuma hipersoft exclusiva, que proporciona conforto plush, toque macio e relaxamento da musculatura, assegurando noites tranquilas e revigorantes.", desc3: "Com altura de 28 cm, combina frescor, suporte e elasticidade para um descanso confortável e duradouro." },
      { src: p4, alt: "Serenity Visco", title: "Serenity Visco", desc: "Viscose de bambu e espuma NASA abraçam o corpo, aliviando as pressões e melhorando a circulação.", srcModal: E4, desc1: "O colchão Serenity Visco oferece suporte ideal para o alinhamento da coluna, com aconchego da espuma viscoelástica que reduz movimentos noturnos e se molda ao corpo. A malha de viscose de bambu é macia, elástica e regula a temperatura, proporcionando leveza e conforto.", desc2: "Sua estrutura conta com espuma viscoelástica inspirada na NASA, que se adapta aos contornos do corpo, alivia a pressão e melhora a circulação sanguínea.", desc3: "Com altura de 28 cm, garante conforto personalizado e noites mais tranquilas e reparadoras." },
    ]
  },
  {
    titulo: "Categoria Clássica",
    descCategoria: "Conforto, tecnologia e design para noites tranquilas, com modelos que se adaptam ao corpo e garantem suporte ideal.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: c1, alt: "Exception Plus", title: "Exception Plus", desc: "Molas ergonômicas e espumas confortáveis que garantem elasticidade, suporte ideal e noites revigorantes e tranquilas.", srcModal: CC1, desc1: "Combina duas espumas de alta resiliência — HR GEL e Hipermacia (Hipersoft) — que oferecem maciez, suporte ideal e regulação térmica, com toque aveludado e conforto superior para relaxar a musculatura. O acabamento em malha importada com tecnologia Purotex combate ácaros e alérgenos, sendo ideal para pessoas alérgicas.", desc2: "Sua estrutura conta com molas ensacadas Comfort Core Ouro, que garantem suporte ergonômico, durabilidade, elasticidade e independência de movimentos, mantendo a coluna alinhada. O design Europillow acrescenta uma camada extra de espuma, unindo sofisticação e mais conforto na superfície.", desc3: "Com conforto macio e altura de 34 cm, o colchão suporta até 150 kg por pessoa e está disponível nos tamanhos Solteiro, Solteiro King, Solteiro Plus, Casal, Queen e King." },
      { src: c2, alt: "Supreme Visco", title: "Supreme Visco", desc: "Pillow Top com espuma viscoelástica que alivia pressões e oferece suporte ideal para um sono profundo e revigorante.", srcModal: CC2, desc1: "Confeccionado com espuma viscoelástica de alta durabilidade, que alivia pontos de pressão, favorece a circulação e reduz em até 80% as viradas na cama. Possui malha belga Pure Silk de alta gramatura com fios de seda pura, oferecendo toque suave e temperatura agradável.", desc2: "Sua estrutura conta com molas ensacadas Comfort Core Ouro, com 210 molas por m², que garantem suporte ergonômico, durabilidade, elasticidade e independência de movimentos. O Pillow Top adiciona uma camada extra de conforto e acolhimento.", desc3: "Com conforto intermediário e altura de 32 cm, o colchão proporciona maciez equilibrada com resistência e firmeza, mantendo o suporte adequado à curvatura natural do corpo." },
      { src: c3, alt: "Bellagio Gel", title: "Bellagio Gel", desc: "Espuma HR Gel que proporciona frescor e conforto para a coluna, com leveza e noites agradáveis para todos os dias.", srcModal: CC3, desc1: "Conforto intermediário com espuma HR gel que regula a temperatura corporal, ideal para quem sofre com suor durante o sono. Proporciona suporte e frescor para noites tranquilas e saudáveis.", desc2: "Conta com molas ensacadas Comfort Core Ouro para suporte ergonômico e independência de movimento, além de bordas reforçadas com espuma para maior estabilidade. Revestimento em malha soft de alta gramatura com toque macio.", desc3: "Solteiro (88x188 cm), solteiro plus (110x200 cm), casal (138x188 cm), queen (158x198 cm) e king (193x203 cm). Altura: 32 cm. Capacidade até 150 kg por pessoa. Uso one face." },
      { src: c4, alt: "Sense", title: "Sense", desc: "Espuma hipermacia e tecido sustentável 2nd Life que alinham a coluna e garantem conforto suave e prolongado.", srcModal: CC4, desc1: "Maciez e acolhimento suave, proporcionando conforto elevado e sensação agradável durante o descanso. Desenvolvido para oferecer relaxamento muscular e experiência de sono semelhante à sensação de dormir nas nuvens.", desc2: "Tecnologia de espuma hipermacia com camada plush, molas ensacadas Comfort Core Ouro para suporte ergonômico e independência de movimento, bordas laterais em espuma e malha sustentável 2ND LIFE feita de garrafas PET recicladas. Camada de espuma convencional D26, design one face e certificações de qualidade.", desc3: "Altura de 32 cm, suporta até 150 kg por pessoa, disponível nos tamanhos 88x188 cm, 96x203 cm, 110x200 cm, 138x188 cm, 158x198 cm e 193x203 cm." },
      { src: c5, alt: "Splendor Top", title: "Splendor Top", desc: "Pillow Top com molas ensacadas que oferecem alinhamento perfeito e suporte extra para um descanso equilibrado.", srcModal: CC5, desc1: "Conforto aliado à sustentação ideal, com camadas de espumas especiais e molas ensacadas que proporcionam alinhamento postural correto e suporte firme na medida certa. Desenvolvido para garantir noites de sono revigorantes e postura adequada da coluna.", desc2: "Camada de conforto com espuma e mix de espumas certificadas, estrutura de molas ensacadas Comfort Core Ouro com independência de movimento, faixa Air Mesh para ventilação, pillow top para maciez extra e malha soft com toque agradável e conforto térmico. Design one face e certificações de qualidade.", desc3: "Altura de 32 cm, suporta até 150 kg por pessoa, disponível nos tamanhos 88x188 cm, 110x200 cm, 96x203 cm, 138x188 cm, 158x198 cm e 193x203 cm." },
      { src: c6, alt: "Splendor", title: "Splendor", desc: "Espuma convencional e molas ensacadas com tecnologia Purotex®, para conforto firme e frescor natural prolongado.", srcModal: CC7, desc1: "Conforto firme na medida certa, com camadas de espumas especiais e molas ensacadas que oferecem sustentação ideal e alinhamento postural correto. Desenvolvido para garantir suporte equilibrado e noites de sono revigorantes.", desc2: "Estrutura de molas ensacadas Comfort Core Ouro com independência de movimento, malha com tecnologia Purotex que combate ácaros e alérgenos, faixa Air Mesh para ventilação e frescor, design one face e certificações de qualidade.", desc3: "Altura de 30 cm, suporta até 150 kg por pessoa, disponível nos tamanhos 88x188 cm, 110x200 cm, 96x203 cm, 138x188 cm, 158x198 cm e 193x203 cm." },
      { src: c7, alt: "Royal Saúde Anatomic Power", title: "Royal Saúde Anatomic Power", desc: "Molas ensacadas e espuma de alta densidade que proporcionam firmeza, alinhamento corporal e noites sem desconforto.", srcModal: CC6, desc1: "Conforto extrafirme com alto suporte de peso, ideal para estabilidade da coluna e noites de sono reparadoras. Espuma certificada combinada à malha soft oferece firmeza, maciez e bem-estar.", desc2: "Estrutura de molas ensacadas Comfort Core Ouro com 210 molas por m² e independência de movimento, bordas laterais em espuma D28 para evitar deformações, malha soft para conforto térmico e design one face. Certificações de qualidade garantem durabilidade e segurança.", desc3: "Altura de 30 cm, suporta até 150 kg por pessoa, disponível nos tamanhos 88x188 cm, 110x200 cm, 138x188 cm, 96x203 cm, 158x198 cm e 193x203 cm." },
    ]
  },
  {
    titulo: "Categoria Sllip",
    descCategoria: "Colchões com conforto equilibrado, molas especiais e espumas selecionadas para noites mais leves e relaxantes.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: s1, alt: "Primor", title: "Primor", desc: "Conforto intermediário com molas ensacadas Comfort Core prata e camadas de espuma. Tecido plano e altura de 26 cm com excelente custo-benefício.", srcModal: S1, desc1: "Conforto intermediário que equilibra firmeza e suavidade, oferecendo estabilidade para a coluna e excelente custo-benefício. Espuma certificada com mix de espumas especiais garante durabilidade e compromisso sustentável.", desc2: "Estrutura de molas ensacadas Prata da Leggett & Platt com suporte personalizado e independência de movimento, bordas laterais em espuma D28, tecido Jacquard Bamboo suave ao toque e design one face. Certificações asseguram qualidade e segurança.", desc3: "Altura de 26 cm, suporta até 120 kg por pessoa, disponível na cor branca com estampa e faixa bege." },
      { src: s2, alt: "Selene", title: "Selene", desc: "Molas Superlastic com espumas adaptáveis, tecido Jacquard bamboo e altura de 24 cm. Conforto intermediário com sustentação progressiva.", srcModal: S2, desc1: "Conforto intermediário que combina firmeza e suavidade, oferecendo suporte ideal e momentos relaxantes após um dia cansativo. Desenvolvido para garantir qualidade, durabilidade e excelente custo-benefício.", desc2: "Camada de conforto com mix de espumas certificadas, tecido Jacquard Bamboo suave ao toque, estrutura de molas Superlastic para suporte resiliente e liberdade de movimento, bordas laterais em espuma D28 e design one face. Certificações asseguram padrão de segurança e desempenho.", desc3: "Altura de 24 cm, suporta até 120 kg por pessoa, disponível na cor branca com faixa Black Drizzle." },
    ]
  },
  {
    titulo: "Categoria Clássica de Espuma",
    descCategoria: "100% em espuma certificada, combinando suporte firme e conforto contínuo. Ideal para quem busca qualidade, durabilidade e um sono restaurador com ótimo custo-benefício.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: ce1, alt: "Royal Saúde Plush", title: "Royal Saúde Plush", desc: "Espuma certificada, toque aveludado e conforto intermediário, com tecido malha soft e altura de 25 cm para um sono equilibrado.", srcModal: RE1, desc1: "Conforto intermediário que equilibra suavidade e firmeza, garantindo alinhamento ideal da coluna e toque aveludado. Desenvolvido para oferecer descanso de qualidade e sensação agradável ao toque.", desc2: "Espuma hipermacia no tampo, estrutura em espuma D33 certificada, malha soft com fios volumosos para conforto térmico e bem-estar, acabamento one face e cor bege. Certificações asseguram qualidade e segurança.", desc3: "Altura de 25 cm, suporta até 100 kg por pessoa." },
      { src: ce2, alt: "Royal Saúde Ultra", title: "Royal Saúde Ultra", desc: "Espuma certificada com tecido malha bamboo e conforto firme, oferecendo altura de até 25 cm para suporte e frescor ideal.", srcModal: RE2, desc1: "Conforto firme que oferece alto suporte de peso e estabilidade para o corpo, garantindo um descanso reparador e cuidado com a saúde da coluna. Desenvolvido com espuma de alta densidade para máxima durabilidade.", desc2: "Produzido com espuma certificada densidade D33, garantindo alta estabilidade e resistência, com bordado moderno e certificações Pró-Espuma e Inmetro.", desc3: "Altura de 25 cm, suporta até 100 kg por pessoa, disponível nos tamanhos 88x188 cm, 110x200 cm, 128x188 cm, 138x188 cm, 158x198 cm e 193x203 cm.  " },
      { src: ce3, alt: "Royal Saúde Plus Pillow Top", title: "Royal Saúde Plus Pillow Top", desc: "Modelo com Pillow Top, espumas certificadas e tecido Jacquard bamboo. Proporciona firmeza com altura de até 28 cm e dupla face.", srcModal: RE3, desc1: "Conforto firme que oferece suporte ideal para a coluna e alinhamento postural, com camada extra de Pillow Top para maior maciez e bem-estar. Desenvolvido para garantir durabilidade e conforto térmico.", desc2: "Espuma certificada D33 de alta densidade, tecido Jacquard Bamboo que afasta umidade e proporciona toque macio, design dupla face para uso dos dois lados e acabamento Pillow Top. Certificações garantem qualidade e segurança.", desc3: "Altura de 24 cm, suporta até 100 kg por pessoa, disponível nos tamanhos 88x188 cm, 110x200 cm, 128x188 cm, 138x188 cm, 158x198 cm e 193x203 cm." },
      { src: ce4, alt: "Royal Saúde Plus", title: "Royal Saúde Plus", desc: "Espuma 100% certificada, conforto firme, dupla face e tecido Jacquard bamboo, com alturas variadas para máxima adaptação.", srcModal: RE4, desc1: "Conforto firme que oferece suporte estável para a coluna, com espuma certificada de alta durabilidade e densidade D45. Desenvolvido para garantir estabilidade sem abrir mão da maciez e frescor.", desc2: "Espuma de alta resistência produzida internamente, tecido Jacquard enriquecido com fio de bambu que afasta umidade e proporciona toque macio, design versátil que permite a virada do colchão. Certificações garantem qualidade e segurança.", desc3: "Altura de 18 cm, suporta até 150 kg por pessoa, disponível nos tamanhos 88x188 cm, 110x200 cm, 128x188 cm, 138x188 cm, 158x198 cm e 193x203 cm." },
    ]
  },
  {
    titulo: "Categoria Basic",
    descCategoria: "Design essencial com conforto e praticidade para o dia a dia, unindo qualidade e suporte ideal ao corpo.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: b1, alt: "Basic Pillow Top", title: "Real", desc: "Pillow top com conforto extra e molas ensacadas, garantindo suporte e maciez no descanso diário.", srcModal: B1, desc1: "Conforto intermediário que equilibra firmeza e suavidade, com combinação de espumas convencionais D33 e D26 e pillow top para maciez extra e acolhimento luxuoso. Desenvolvido para oferecer suporte ergonômico e noites de sono revigorantes.", desc2: "Estrutura de molas ensacadas Comfort Core Prata com independência de movimento, bordas laterais em espuma D28 para estabilidade, malha soft volumosa para conforto térmico e design sofisticado. Certificações garantem qualidade e segurança.", desc3: "Altura de 30 cm, suporta até 120 kg por pessoa, disponível nos tamanhos 88x188 cm, 110x200 cm, 96x203 cm, 138x188 cm, 158x198 cm e 193x203 cm." },
      { src: b2, alt: "Basic Real Black", title: "Real Black", desc: "Versão elegante com pillow top e molas ensacadas, oferecendo maciez e sustentação.", srcModal: B2, desc1: "Conforto intermediário com equilíbrio entre firmeza e suavidade, combinando espumas convencionais D33 e D26 e pillow top para maciez extra e acolhimento luxuoso. Desenvolvido para suporte ergonômico e noites de sono confortáveis.", desc2: "Estrutura de molas ensacadas Comfort Core Prata com independência de movimento, bordas laterais em espuma D28 para estabilidade, malha soft volumosa que oferece conforto térmico e design moderno em preto com detalhes azuis. Certificações garantem qualidade e segurança.", desc3: "Altura de 30 cm, suporta até 120 kg por pessoa, disponível nos tamanhos 88x188 cm, 110x200 cm, 96x203 cm, 138x188 cm, 158x198 cm e 193x203 cm." },
      { src: b3, alt: "Basic Millenium", title: "Millenium", desc: "Molas superlastic e espuma flexível que alinham a coluna, proporcionando noites mais confortáveis.", srcModal: B3, desc1: "Conforto intermediário que equilibra firmeza e suavidade, com camada de espumas certificadas e molas Superlastic que oferecem suporte resiliente e adaptação ao corpo. Desenvolvido para durabilidade e sofisticação visual.", desc2: "Estrutura com molas Superlastic de alta resistência e flexibilidade, acabamento Eurotop elegante, malha de alta gramatura macia e resistente, e design moderno com faixa bronze. Certificações garantem qualidade e segurança.", desc3: "Altura de 28 cm, suporta até 120 kg por pessoa, disponível nos tamanhos 78x188 cm, 88x188 cm, 96x203 cm, 110x200 cm, 138x188 cm e 158x198 cm." },
      { src: b4, alt: "Basic Moush", title: "Moush", desc: "Espuma certificada com alta densidade, mais flexível e firme, ideal para conforto e alinhamento postural.", srcModal: B4, desc1: "Conforto firme com espuma certificada de alta densidade D33, oferecendo suporte ideal para a coluna e estabilidade corporal, ideal para quem busca praticidade e alinhamento postural. Produto enrolado a vácuo, facilitando transporte e uso imediato.", desc2: "Espuma flexível e resistente, tecido malha soft volumoso que proporciona toque macio e conforto térmico, design dupla face para maior durabilidade e resistência. Certificação Pró-Espuma garante qualidade superior e controle rigoroso.", desc3: "Altura de 18 cm, suporta até 100 kg por pessoa, com rápida expansão após desembalagem para uso imediato e comodidade no transporte." },
      { src: b5, alt: "Basic Diamante", title: "Diamante", desc: "Espuma de alta densidade com dupla face e tecido resistente, para sustentar a coluna com durabilidade.", srcModal: B5, desc1: "Conforto firme com espuma certificada D28 que proporciona estabilidade e suporte adequado para quem prefere colchão sólido, ideal para noites de sono tranquilas. Produto com dupla face que aumenta a durabilidade e garante proteção contra mofo e ácaros.", desc2: "Espuma resistente com capacidade para até 80 kg por pessoa, tecido de alto teor algodão com tratamento antiácaro, garantindo toque agradável, resistência e segurança hipoalergênica. Certificação Pró-Espuma assegura qualidade superior.", desc3: "Altura de 18 cm, cor bege, garantia de 12 meses contra deformação, perfeito custo-benefício para quem busca qualidade e conforto duradouro." },
    ]
  },
  {
    titulo: "Categoria Ortopédica",
    descCategoria: "Modelos com suporte firme, ideal para alinhamento da coluna, estrutura resistente e tecido de alta qualidade.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
      { src: o1, alt: "Orthoclínico Ouro Plus Eurotop", title: "Orthoclínico Ouro Plus Eurotop", desc: "Colchão com estrutura de madeira certificada, conforto extrafirme e acabamento Eurotop. Tecido Jacquard bamboo e altura de 26 cm.", srcModal: O1, desc1: "Colchão ortopédico madeira Ouro Plus Eurotop Orthocrin oferece suporte extra firme para alinhamento postural ideal, com espuma certificada D28 e estrutura sustentável em madeira de eucalipto 100% reflorestada.", desc2: "Acabamento Eurotop elegante, com camada extra de espuma que traz sofisticação sem alterar a altura interna. Tecido Jacquard com fio de bambu proporciona frescor, toque macio e proteção contra umidade e alérgenos.", desc3: "Ideal para quem precisa de suporte firme e durável, suporta até 150 kg por pessoa, altura de 26 cm, uso one face para maior durabilidade. Disponível em tamanhos solteiro, casal e queen, perfeito para garantir conforto e saúde durante o sono." },
      { src: o2, alt: "Orthoclínico Ouro Azul", title: "Orthoclínico Ouro Azul", desc: "Modelo com estrutura de madeira, conforto extrafirme e tecido Jacquard bamboo. Altura de 24 cm, ideal para alinhamento postural.", srcModal: O2, desc1: "Conforto extrafirme com foco em alinhamento postural, combinando base de madeira reflorestada e espuma D28 para suporte estável e durabilidade. Ideal para quem busca máximo suporte e estabilidade para a coluna.", desc2: "Estrutura em madeira de eucalipto 100% certificada, camada de espuma D28 de 5 cm, tecido Jacquard com fio de bambu que proporciona toque fresco, resistência e controle de umidade, além de evitar alérgenos. Design one face.", desc3: "Altura de 24 cm, suporta até 150 kg, disponível nos tamanhos 78x188 cm, 88x188 cm, 128x188 cm, 138x188 cm e 158x198 cm." },
      { src: o3, alt: "Orthoclínico Ouro", title: "Orthoclínico Ouro", desc: "Com madeira certificada, tecido Jacquard bamboo e conforto extrafirme, o modelo possui 24 cm de altura e acabamento tradicional.", srcModal: O3, desc1: "Conforto extrafirme que prioriza o alinhamento da coluna, combinando suporte estável e durabilidade para máximo suporte postural durante o sono. Indicado para quem busca firmeza e estabilidade com saúde postural garantida.", desc2: "Estrutura em madeira de eucalipto 100% certificada e reflorestada, espuma D28 de 5 cm para firmeza, tecido Jacquard com fio de bambu que proporciona toque fresco, resistência e evita acúmulo de umidade e alérgenos. Design one face.", desc3: "Altura de 24 cm, suporta até 150 kg por pessoa, disponível nos tamanhos 78x188 cm, 88x188 cm, 128x188 cm, 138x188 cm e 158x198 cm." },
      { src: o4, alt: "Lightpedic", title: "Lightpedic", desc: "Espumas compactadas de alta densidade, conforto extrafirme e tecido Jacquard toque de malha. Modelo double face com 25 cm de altura.", srcModal: O4, desc1: "Conforto extrafirme com suporte rígido e alinhamento postural ideal, oferecendo alívio da tensão muscular e sono reparador com excelente custo-benefício. Produzido com foco em sustentabilidade e materiais reaproveitados.", desc2: "Camada de conforto em espuma certificada D26 combinada com mix de espumas especiais reaproveitadas, tecido Jacquard resistente e durável, toque agradável e design double face para maior durabilidade. Certificação Selo Verde e Pró-Espuma garantem qualidade e processos sustentáveis.", desc3: "Altura de 25 cm, suporta até 120 kg, projetado para oferecer resistência e conforto duradouros." },
    ]
  },
  {
    titulo: "Categoria Kids",
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
    titulo: "Categoria Pets",
    descCategoria: "Conforto e praticidade para os pets. Estrutura em madeira, espumas firmes e capa higiênica garantem descanso seguro e resistente.",
    backgroundColor: "#FFFFFF",
    color: "#80002D",
    images: [
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
    ]
  }
];

const Colchoes = () => {
  return (
    <div>
      <Seo title="Colchões | Orthomóveis Colchões Orthocrin"
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

export default Colchoes;