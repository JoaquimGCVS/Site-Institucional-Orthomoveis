import Marquee from "../components/Marquee/Marquee";
import Produtos from "../components/Produtos/Produtos";

import colchonete2 from "../assets/acessorios/colchonetes/2.webp";
import colchonete3 from "../assets/acessorios/colchonetes/3.webp";
import colchonete11 from "../assets/acessorios/colchonetes/1.1.webp";

import antirrefluxoAdulto from "../assets/acessorios/antirrefluxo/4.webp";
import antirrefluxoBaby from "../assets/acessorios/antirrefluxo/5.webp";

import ortotrip from "../assets/acessorios/ortotrip/6.webp";

import multirelaxBasic from "../assets/acessorios/multirelax/7.webp";
import multirelaxVisco from "../assets/acessorios/multirelax/8.webp";
import protetor from "../assets/acessorios/protetores/acessorio.webp";

import Seo from "../components/Seo/Seo";

const imagensMultirelax = [
    {
        src: multirelaxBasic,
        alt: "Multirelax Basic",
        title: "Multirelax Basic",
        desc: "Ergonômico e confortável. Espuma perfilada com capa com zíper. Fronha com alto teor de algodão."
    },
    {
        src: multirelaxVisco,
        alt: "Multirelax Visco",
        title: "Multirelax Visco",
        desc: "Toque especial da espuma viscoelástica. Capa com zíper e fronha Jacquard Bamboo. Ideal para relaxamento total."
    }
];

const imagensOrthotrip = [
    {
        src: ortotrip,
        alt: "Orthotrip",
        title: "Orthotrip",
        desc: "100% espuma viscoelástica com capa removível. Apoio anatômico para o pescoço durante viagens."
    }
];

const imagensColchonetes = [
    {
        src: colchonete11,
        alt: "Colchonete Fitness",
        title: "Colchonete Fitness",
        desc: "Colchonete de 4 cm de altura. Revestido em napa, ideal para academias, ginástica e alongamento. Medida: 50x100 cm."
    },
    {
        src: colchonete2,
        alt: "Colchonete Antistress",
        title: "Colchonete Antistress",
        desc: "Colchonete massageador indicado para uso sobre o colchão ou superfícies planas. Melhora a circulação sanguínea e alivia pontos de pressão."
    },
    {
        src: colchonete3,
        alt: "Colchonete Multiuso",
        title: "Colchonete Multiuso",
        desc: "Colchonete de 5 cm de altura. Ideal para campings e viagens, com revestimento 100% poliéster. Medida: 60x180 cm."
    }
];

const imagensAntirrefluxo = [
    {
        src: antirrefluxoAdulto,
        alt: "Antirrefluxo Adulto",
        title: "Antirrefluxo Adulto",
        desc: "Inclinação ergonômica com toque da espuma perfilada. Proporciona alívio para quem sofre de refluxo."
    },
    {
        src: antirrefluxoBaby,
        alt: "Antirrefluxo Comfort Baby",
        title: "Antirrefluxo Comfort Baby",
        desc: "Indicado para os primeiros meses de vida. Garante sono tranquilo para bebês e mamães."
    }
];

const imagensProtetores = [
    {
        src: protetor,
        alt: "Protetor Flor de Algodão Impermeável",
        title: "Protetor Flor de Algodão Impermeável",
        desc: "Protetor de colchão impermeável com tecido em flor de algodão. Proteção contra líquidos, ácaros e alérgenos, mantendo a higiene e vida útil do seu colchão. "
    },
];

const Acessorios = () => {
    return (
        <div>
            <Seo title="Acessórios | Orthomóveis Colchões Orthocrin" 
                seoImage="/LogoLoja.webp"
                socialImage="/logocomfundo2.webp"/>
            <Marquee/>
            <Produtos
                titulo="Colchonetes"
                descCategoria="Acessórios versáteis para exercícios físicos, viagens ou conforto extra no descanso. Modelos desenvolvidos com materiais específicos como napa, poliéster ou espuma massageadora, oferecendo praticidade, durabilidade e bem-estar em diferentes usos."
                backgroundColor="#FFFFFF"
                color="#80002D"
                images={imagensColchonetes}
            />
            <Produtos
                titulo="Antirrefluxo"
                descCategoria="Produtos ergonômicos desenvolvidos para proporcionar alívio e conforto durante o sono, especialmente para quem sofre com refluxo. Indicações específicas para adultos e bebês, com materiais de toque suave e design anatômico."
                backgroundColor="#FFFFFF"
                color="#80002D"
                images={imagensAntirrefluxo}
            />
            <Produtos
                titulo="Multirelax"
                descCategoria="Encosto triangular ergonômico que proporciona conforto para pernas e costas. Ideal para relaxamento, leitura e melhora da circulação. Disponível nas versões Basic (espuma perfilada) e Visco (espuma viscoelástica)."
                backgroundColor="#FFFFFF"
                color="#80002D"
                images={imagensMultirelax}
            />
            <Produtos
                titulo="Orthotrip"
                descCategoria="Almofada de pescoço. Seja qual for o motivo da sua viagem, usar Orthotrip é garantia de conforto. Produzida com espuma viscoelástica, que apoia perfeitamente o pescoço. Acompanha capa com zíper."
                backgroundColor="#FFFFFF"
                color="#80002D"
                images={imagensOrthotrip}
            />
            <Produtos
                titulo="Protetores"
                descCategoria="Proteção essencial para seu colchão. Nossos protetores impermeáveis em flor de algodão oferecem barreira contra líquidos, ácaros e alérgenos, garantindo higiene, conforto e durabilidade para seu investimento em sono de qualidade."
                backgroundColor="#FFFFFF"
                color="#80002D"
                images={imagensProtetores}
            />
        </div>
    );
};

export default Acessorios;