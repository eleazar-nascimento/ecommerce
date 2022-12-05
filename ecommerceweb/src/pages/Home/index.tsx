import React from 'react';
import Announcement from '../../components/Announcement';
import NavBar from '../../components/NavBar';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
    </Container>
  );
}

export default Home;