import React from 'react';
import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Newsletter from '../../components/Newsletter';
import Products from '../../components/Products';

import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
} from './styles';

const ProductList: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option
              disabled
              selected
            >
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>White</Option>
          </Select>
          <Select>
            <Option
              disabled
              selected
            >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option
              selected
            >
              Newest
            </Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;