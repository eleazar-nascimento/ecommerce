import React from 'react';
import Announcement from '../../components/Announcement';
import Categories from '../../components/Categories';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Newsletter from '../../components/Newsletter';
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
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Home;