import { useState } from "react";
import "./Produtos.css";
import ModalProduto from "../ModalProduto/ModalProduto";

const Produtos = ({ titulo, descCategoria, backgroundColor, color, images }) => {

    const [isModalAberto, setIsModalAberto] = useState(false);
    const [produtoAtual, setProdutoAtual] = useState(null);

    const aoClicarNoProduto = (produto) => {
        setProdutoAtual(produto);
        setIsModalAberto(true);
    }

    const aoFecharModal = () => {
        setIsModalAberto(false);
        setProdutoAtual(null);
    }

    return (
        <div className="secao-produtos" style={{ backgroundColor }}>
            <h2 style={{ color }}>{titulo}</h2>
            <p style={{ color }} className="desc-categoria">{descCategoria}</p>
            <div className="produtos">
                {images.map((img, idx) => (
                    <div className="produto" key={idx} onClick={() => aoClicarNoProduto(img)} style={{cursor:"pointer"}}>
                        <img src={img.src} alt={img.alt || `produto${idx + 1}`} />
                        <h3 style={{ color }}>{img.title}</h3>
                        <p style={{ color }}>{img.desc}</p>
                    </div>
                ))}
            </div>
            {isModalAberto && produtoAtual!=null &&(
                <ModalProduto 
                    nome={produtoAtual.title}
                    desc1={produtoAtual.desc1}
                    desc2={produtoAtual.desc2}
                    desc3={produtoAtual.desc3}
                    imagem={produtoAtual.srcModal}
                    onClose={aoFecharModal}
                />
            )}
        </div>
    );
};

export default Produtos;