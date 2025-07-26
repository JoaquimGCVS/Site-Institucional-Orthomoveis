import { FaStar } from "react-icons/fa";
import "./Avaliacao.css";

const Avaliacao = ()  => {
    return (
        <div className="secao-avaliacao">
            <h2>O que dizem sobre a Orthomóveis Colchões Orthocrin?</h2>
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
                    <p>Há 13 anos só compro meus colchões com ele. Sempre encontro o melhor preço, com um atendimento de excelência!</p>
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
                    <p>A melhor possível! Preço excelente, atendimento incrível. Esta já é nossa 3ª compra e indicamos sempre a todos!</p>
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
                    <p>É uma loja muito boa. O preço e a qualidade são os melhores da região, com atendimento que faz a diferença.</p>
                </div> 
            </div>
        </div>
    );
};

export default Avaliacao;