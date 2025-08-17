import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const mockProducts = [
  { id: '1', name: 'Producto 1', category: 'A' },
  { id: '2', name: 'Producto 2', category: 'B' },
  { id: '3', name: 'Producto 3', category: 'A' },
];

const getProducts = (categoryId?: string) =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve(
          categoryId
            ? mockProducts.filter(p => p.category === categoryId)
            : mockProducts
        ),
      1000
    )
  );

interface ItemListContainerProps {
  greeting: string;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getProducts(categoryId).then(setProducts);
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/item/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;