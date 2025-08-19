import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const mockItem = {
  id: '1',
  name: 'Producto Ejemplo',
  description: 'Descripción del producto',
  price: 100,
};

const getItem = (id: string) =>
  new Promise(resolve => setTimeout(() => resolve(mockItem), 1000));

const ItemDetailContainer: React.FC = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    getItem(itemId!).then(setItem);
  }, [itemId]);

  if (!item) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <ItemCount />
    </div>
  );
};

export default ItemDetailContainer;