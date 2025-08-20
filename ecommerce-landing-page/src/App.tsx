import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar logoUrl="path/to/your/logo.png" />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a mi tienda!" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="¡Bienvenido a mi tienda!" />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;