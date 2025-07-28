import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Colchoes from '../pages/Colchoes';
import Travesseiros from '../pages/Travesseiros';
import Acessorios from '../pages/Acessorios';
import Box from '../pages/Box';
import Infantil from '../pages/Infantil';
import Pets from '../pages/Pets';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import WhatsappButton from '../components/WhatsappButton/WhatsappButton';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header/>
      <ScrollToTop/>
      <Routes>
        {/* Rota principal */}
        <Route path="/" element={<Home />} />
        
        {/* Rotas dos produtos */}
        <Route path="/colchoes" element={<Colchoes />} />
        <Route path="/travesseiros" element={<Travesseiros />} />
        <Route path="/acessorios" element={<Acessorios />} />
        <Route path="/box" element={<Box />} />
        <Route path="/infantil" element={<Infantil />} />
        <Route path="/pets" element={<Pets />} />
        
        {/* Rota 404 */}
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Footer/>
      <WhatsappButton/>
    </BrowserRouter>
  );
};

export default AppRoutes;