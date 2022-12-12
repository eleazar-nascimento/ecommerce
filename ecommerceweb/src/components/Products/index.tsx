import React from 'react';
import { popularProducts } from '../../Mock/data';
import Product from '../Product';

import { Container } from './styles';

const Products: React.FC = () => {
  return (
    <Container>
      {popularProducts.map((item: any) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Products;