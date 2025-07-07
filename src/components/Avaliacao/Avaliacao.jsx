import { FaStar } from "react-icons/fa";
import "./Avaliacao.css";

const Avaliacao = ()  => {
    return (
        <div className="secao-avaliacao">
            <h2>O que dizem sobre a Orthomóveis Colchoes Orthocrin?</h2>
            <div className="cards">
                <div className="card">
                    <h3>Polyana Jeha</h3>
                    <div className="estrelas">
                        <FaStar size={30} color="#FFB823"/>  
                        <FaStar size={30} color="#FFB823"/>  
                        <FaStar size={30} color="#FFB823"/>  
                        <FaStar size={30} color="#FFB823"/>  
                        <FaStar size={30} color="#FFB823"/>     
                    </div>
                    <p>Há 13 anos só compro meus colchões com ele. É sempre o melhor preço que encontro, com um atendimento de excelência!</p>
                </div>
                <div className="card">
                    <h3>Roselita Miranda</h3>
                    <div className="estrelas">
                        <FaStar size={30} color="#FFB823"/>  
                        <FaStar size={30} color="#FFB823"/>  
                        <FaStar size={30} color="#FFB823"/>  
                        <FaStar size={30} color="#FFB823"/>  
                        <FaStar size={30} color="#FFB823"/>     
                    </div>
                    <p>A melhor possível, preço excelente, atendimento! É nossa 3 compra. Indicamos sempre!</p>
                </div>
                <div className="card">
                    <h3>Fernando Fernandes</h3>
                    <div className="estrelas">
                        <FaStar size={30} color="#FFB823"/>  
                        <FaStar size={30} color="#FFB823"/>  
                        <FaStar size={30} color="#FFB823"/>  
                        <FaStar size={30} color="#FFB823"/>  
                        <FaStar size={30} color="#FFB823"/>     
                    </div>
                    <p>É uma loja muito boa, inclusive o preço e a qualidade é a melhor da região, incluindo o bom atendimento.</p>
                </div> 
            </div>
        </div>
    );
};

export default Avaliacao;