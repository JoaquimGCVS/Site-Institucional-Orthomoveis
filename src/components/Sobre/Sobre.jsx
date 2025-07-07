import "./Sobre.css";
import vovo from "../../assets/foto-sobre-nos.webp";

const Sobre = () => {
    return (
        <div className="secao-sobre">
            <h2>Mais de 50 anos transformando o descanso em bem-estar.</h2>
            <div className="conteudo">
                <div className="sobre-texto">
                    <h3>Tradição</h3>
                    <p>Há mais de cinco décadas, a Orthomoveis Colchões Orthocrin é sinônimo de tradição, qualidade e conforto em Belo Horizonte. Referência no mercado de colchões, oferecemos produtos que unem tecnologia, design e preços imbatíveis para proporcionar noites de sono verdadeiramente restauradoras.</p>
                    <h3>Confiança</h3>
                    <p>Nossa trajetória é marcada pela confiança e pelo compromisso com cada cliente. Com atendimento humanizado e soluções sob medida, buscamos superar expectativas e transformar o descanso em uma experiência única.</p>
                    <h3>Bem-estar</h3>
                    <p>Nosso propósito é cuidar do seu bem-estar. Cada detalhe, do atendimento à entrega, é pensado para garantir sua satisfação e contribuir para uma vida mais saudável e produtiva.</p>
                </div>
                <div className="foto-desc">
                    <img src={vovo} alt="Antonio Silva" />
                    <p>Na foto, Antônio Silva, o fundador da Orthomóveis Colchões, e Manoel Nogueira, o fundador da Orthocrin, durante o evento de celebração dos 60 anos da empresa!</p>
                </div>
            </div>
        </div>
    );
};   

export default Sobre;