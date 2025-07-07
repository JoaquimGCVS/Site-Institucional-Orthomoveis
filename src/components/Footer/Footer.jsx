import { FaSquareInstagram } from "react-icons/fa6";
import logo from "../../assets/LogoSemFundo.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="secao-footer">
            <h2>DISTRIBUIDOR ORTHOCRIN TRADIÇÃO E PREÇO</h2>
            <div className="conteudo-footer">
                <img src={logo} alt="logo" />
                <p className="endereco">Av. Amazonas, 3469 - Barroca | Belo Horizonte - MG, 30431-061</p>
                <div className="instagram">
                    <p>Para acordar feliz: </p>
                    <a
                        href="https://www.instagram.com/orthomoveiscolchoes/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaSquareInstagram size={50} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;