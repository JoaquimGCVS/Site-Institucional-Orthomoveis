import Avaliacao from "../components/Avaliacao/Avaliacao";
import Carousel from "../components/Carousel/Carousel";
import Categorias from "../components/Categorias/Categorias";
import Header from "../components/Header/Header";
import Marquee from "../components/Marquee/Marquee";
import Pagamento from "../components/Pagamento/Pagamento";

const Home = () => {
    return (
        <div>
            <Header/>
            <Carousel/>
            <Marquee/>
            <Categorias/>
            <Avaliacao/>
            <Pagamento/>
        </div>
    );
};

export default Home;