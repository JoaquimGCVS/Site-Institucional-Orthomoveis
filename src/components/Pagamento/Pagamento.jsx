import "./Pagamento.css"
import { MdOutlinePix } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
import { IoIosCard } from "react-icons/io";

const Pagamento = () => {
    return (
        <div className="secao-pagamento">
            <h2>Formas de Pagamento</h2>
            <div className="formas-pagamento">
                <div className="forma">
                    <MdOutlinePix size={28}/>
                    <p>Pix</p>
                </div>
                <div className="forma">
                    <FaMoneyBill size={28}/>
                    <p>Dinheiro</p>
                </div>
                <div className="forma">
                    <IoIosCard size={28}/>
                    <p>Cartão</p>
                </div>
            </div>
        </div>
    );
};

export default Pagamento;