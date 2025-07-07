import "./Marquee.css";
import { RiAlarmWarningFill } from "react-icons/ri";

const Marquee = () => {
    return (
        <div className="marquee">
            <p><RiAlarmWarningFill size={20}/> Os preços de todos os produtos são negociáveis. Consulte-nos para mais informações! Entrega rápida e garantida para toda a região! <RiAlarmWarningFill size={20}/></p>
        </div>
    );
};

export default Marquee;