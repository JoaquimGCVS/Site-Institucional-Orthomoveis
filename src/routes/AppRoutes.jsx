import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Colchoes from '../pages/Colchoes';
import Travesseiros from '../pages/Travesseiros';
import Acessorios from '../pages/Acessorios';
import Box from '../pages/Box';
import Infantil from '../pages/Infantil';
import Pets from '../pages/Pets';

const AppRoutes = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default AppRoutes;