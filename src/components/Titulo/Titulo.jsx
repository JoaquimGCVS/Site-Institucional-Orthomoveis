import "./Titulo.css";

const Titulo = ({titulo, backgroundColor, color}) => {
    return (
        <div className="secao-titulo" style={{ backgroundColor }}>
            <p style={{ color }}>{titulo}</p>
        </div>
    );
};

export default Titulo;