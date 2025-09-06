import { useEffect } from "react";
import "./ModalProduto.css";
import { IoMdClose } from "react-icons/io";

const ModalProduto = ({ nome, desc1, desc2, desc3, imagem, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        document.body.classList.add("modal-aberto");
        return () => {
            document.body.style.overflow = "";
            document.body.classList.remove("modal-aberto");
        };
    }, []);
    return (
        <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="modal">
                <div className="imagem-e-texto">
                    <img src={imagem} alt={nome} loading="lazy"/>
                    <div className="texto-modal">
                        <h2>{nome}</h2>
                        <h3>Sobre</h3>
                        <p>{desc1}</p>
                        <h3>Estrutura</h3>
                        <p>{desc2}</p>
                        <h3>Medidas</h3>
                        <p>{desc3}</p>
                    </div>
                </div>
                <button className="modal-close" onClick={onClose}><IoMdClose /></button>
            </div>
        </div>
    );
};

export default ModalProduto;