import React from 'react';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Pinterest from '@mui/icons-material/Pinterest';

import {
  Center,
  ContactItem,
  Container,
  Description,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title
} from './styles';
import { MailOutline, Phone, Room } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Container>
      <Left>
        <Logo>ZAZA.</Logo>
        <Description>
          There are many variants of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form,
          by injected humour,
          or randomised words wich don't look even slightly believable.
        </Description>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='34405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          622 Dixie Path, South Tobinchester  98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +55 27 9 9999-9999
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          eleazar.nascimento@gmail.com
        </ContactItem>
        <Payment src="/" />
      </Right>
    </Container>
  );
}

export default Footer;