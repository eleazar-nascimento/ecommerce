import React from 'react';

import {
  Button,
  Container,
  Form,
  Input,
  ReactLink,
  Title,
  Wrapper
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder='username' />
          <Input placeholder='password' />
          <Button>LOGIN</Button>
          <ReactLink to="/">DO NOT YOU REMEMBER THE PASSWORD?</ReactLink>
          <ReactLink to="/register">CREATE A NEW ACCOUNT</ReactLink>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;