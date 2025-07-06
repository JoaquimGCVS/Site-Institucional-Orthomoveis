import "./Categorias.css";

const Categorias = () => {
    return (
        <div className="secao-categorias">
            <h2>Explore</h2>
            <div className="categorias">
                <div className="categoria">
                    <img src="" alt="Colchao Mola" />
                    <h3>Mola</h3>
                    <p>Firmeza ou maciez na medida certa. Ideal para quem quer unir tecnologia de ponta com o máximo de conforto para noites perfeitas.</p>
                </div>
                <div className="categoria">
                    <img src="" alt="Colchao Espuma" />
                    <h3>Espuma</h3>
                    <p>A escolha ideal para quem valoriza maciez e adaptação ao corpo, garantindo conforto sem abrir mão do suporte necessário.</p>
                </div>
                <div className="categoria">
                    <img src="" alt="Colchao Ortopedico" />
                    <h3>Ortopédico</h3>
                    <p>Perfeito para quem busca suporte reforçado à coluna e postura alinhada durante o sono, proporcionando bem-estar e saúde.</p>
                </div>
            </div>
        </div>
    );
};

export default Categorias;