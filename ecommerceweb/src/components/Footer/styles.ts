import styled from 'styled-components';

interface SocialIconProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
`;

export const Logo = styled.h1`

`;

export const Description = styled.p`
  margin: 20px opx;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div<SocialIconProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${({ color }) => color};

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1px;
`;

export const Center = styled.div`
  flex: 1px;
  padding: 20px;
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const Right = styled.div`
  flex: 1px;
  padding: 20px;

`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;

`;

export const Payment = styled.img`
  width: 50%;
`;
