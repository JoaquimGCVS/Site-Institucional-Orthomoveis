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
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal">
                <div className="imagem-e-texto">
                    <img src={imagem} alt="" />
                    <div className="texto-modal">
                        <h2>{nome}</h2>
                        <p>- {desc1}</p>
                        <p>- {desc2}</p>
                        <p>- {desc3}</p>
                    </div>
                </div>
                <button className="modal-close" onClick={onClose}><IoMdClose /></button>
            </div>
        </div>
    );
};

export default ModalProduto;