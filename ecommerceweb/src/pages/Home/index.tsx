import React from 'react';
import Announcement from '../../components/Announcement';
import Categories from '../../components/Categories';
import NavBar from '../../components/NavBar';
import Products from '../../components/Products';
import Slider from '../../components/Slider';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
    </Container>
  );
}

export default Home;