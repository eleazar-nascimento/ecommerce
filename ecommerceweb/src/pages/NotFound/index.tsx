import React from 'react';

import { Container, Image } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <Image src="/src/assets/error-404-1.png" alt="pagina nao encontrada" />
    </Container>
  );
}

export default NotFound;