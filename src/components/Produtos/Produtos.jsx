import "./Produtos.css";

const Produtos = ({ titulo, descCategoria, backgroundColor, color, images }) => {
    return (
        <div className="secao-produtos" style={{ backgroundColor }}>
            <h2 style={{ color }}>{titulo}</h2>
            <p style={{ color }} className="desc-categoria">{descCategoria}</p>
            <div className="produtos">
                {images.map((img, idx) => (
                    <div className="produto" key={idx}>
                        <img src={img.src} alt={img.alt || `produto${idx + 1}`} />
                        <h3 style={{ color }}>{img.title}</h3>
                        <p style={{ color }}>{img.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Produtos;