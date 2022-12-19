import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff9f4;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: black;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  background-color: #fff9f4;
  border: 1px solid teal;
`;

export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  color: black;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #004443;
  color: #fff9f4;
  cursor: pointer;
`;
