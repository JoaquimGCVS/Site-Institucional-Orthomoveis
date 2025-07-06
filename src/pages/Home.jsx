import Carousel from "../components/Carousel/Carousel";
import Categorias from "../components/Categorias/Categorias";
import Header from "../components/Header/Header";
import Pagamento from "../components/Pagamento/Pagamento";

const Home = () => {
    return (
        <div>
            <Header/>
            <Carousel/>
            <Pagamento/>
            <Categorias/>
        </div>
    );
};

export default Home;