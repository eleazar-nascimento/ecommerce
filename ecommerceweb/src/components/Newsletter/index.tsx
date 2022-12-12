import Send from '@mui/icons-material/Send';
import React from 'react';

import {
  Container,
  Title,
  Description,
  InputContainer,
  Input,
  Button
} from './styles';

const Newsletter: React.FC = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder='Your e-mail' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;