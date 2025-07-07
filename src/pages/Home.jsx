import Avaliacao from "../components/Avaliacao/Avaliacao";
import Carousel from "../components/Carousel/Carousel";
import Categorias from "../components/Categorias/Categorias";
import Header from "../components/Header/Header";
import Pagamento from "../components/Pagamento/Pagamento";

const Home = () => {
    return (
        <div>
            <Header/>
            <Carousel/>
            <Categorias/>
            <Avaliacao/>
            <Pagamento/>
        </div>
    );
};

export default Home;