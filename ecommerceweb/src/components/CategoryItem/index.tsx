import React from 'react';

import { Container, Image, Info, Title, Button } from './styles';

interface CategoryItemProps {
  item: any;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}

export default CategoryItem;