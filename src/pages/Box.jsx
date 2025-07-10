import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Marquee from "../components/Marquee/Marquee";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";

const Box = () => {
    return (
        <div>
            <Header/>
            <Marquee/>
            <WhatsappButton/>
            <Footer/>
        </div>
    );
};

export default Box;