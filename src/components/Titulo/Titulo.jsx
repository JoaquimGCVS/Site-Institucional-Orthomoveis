import "./Titulo.css";

const Titulo = ({titulo, backgroundColor, color}) => {
    return (
        <div className="secao-titulo" style={{ backgroundColor }}>
            <h2 style={{ color }}>{titulo}</h2>
        </div>
    );
};

export default Titulo;