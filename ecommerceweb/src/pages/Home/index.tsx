import React from 'react';
import Announcement from '../../components/Announcement';
import NavBar from '../../components/NavBar';
import Slider from '../../components/Slider';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Slider />
    </Container>
  );
}

export default Home;