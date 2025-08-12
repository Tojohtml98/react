import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar logoUrl="path/to/your/logo.png" />
      <ItemListContainer greeting="¡Bienvenido a mi tienda!" />
    </>
  );
}

export default App;