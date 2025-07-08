import "./Produtos.css";

const Produtos = ({ backgroundColor, color, images }) => {
    return (
        <div className="secao-produtos" style={{ backgroundColor }}>
            <div className="Produtos">
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