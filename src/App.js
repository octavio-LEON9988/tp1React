


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home.js';
import Envios from './pages/Envios.js';
import Productos from './pages/Productos.js';
import SobreNosotros from './pages/SobreNosotros.js';
import Ofertas from './pages/Ofertas.js';
import Usuario from './pages/Usuario.js';
import Error from './pages/Error.js';
import Layout from './pages/Layout.js';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="productos" element={<Productos/>}/>
            <Route path="ofertas" element={<Ofertas/>}/>
            <Route path="sobre_nosotros" element={<SobreNosotros/>}/>
            <Route path="envios" element={<Envios/>}/>
            <Route path="usuario" element={<Usuario/>}/>
            <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

