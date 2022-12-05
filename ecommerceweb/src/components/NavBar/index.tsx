import React from 'react';
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Container, Wrapper, SearchContainer, Left, Language, Center, Right, Input, Logo, MenuItem } from './styles';

const NavBar: React.FC = () => {
  return <Container>
    <Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input type="text" />
          <Search style={{ color: 'gray', fontSize: 16 }} />
        </SearchContainer>
      </Left>
      <Center>
        <Logo>ZAZA.</Logo>
      </Center>
      <Right>
        <MenuItem>
          REGISTER
        </MenuItem>
        <MenuItem>
          SIGN IN
        </MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon color="inherit" />
          </Badge>
        </MenuItem>
      </Right>
    </Wrapper>
  </Container>;
}

export default NavBar;