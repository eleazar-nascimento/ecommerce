import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import React from 'react';
import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Newsletter from '../../components/Newsletter';

import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Container,
  Description,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImageContainer,
  InfoContainer,
  Price,
  Title,
  Wrappper
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrappper>
        <ImageContainer>
          <Image src='https://cdn.shopify.com/s/files/1/0526/4123/5093/products/TechTShirt_Preta-04.jpg?v=1662938943' />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Description>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrappper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;