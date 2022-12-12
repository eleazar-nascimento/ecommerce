import React from 'react';
import { categories } from '../../Mock/data';
import CategoryItem from '../CategoryItem';

import { Container } from './styles';

const Categories: React.FC = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
}

export default Categories;