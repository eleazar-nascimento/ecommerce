import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import React from 'react';
import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

import {
  Bottom,
  Container,
  Title,
  Top,
  TopButton,
  TopText,
  TopTexts,
  Wrapper,
  Info,
  Summary,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button
} from './styles';

const Cart: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton types='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMVFRUWFRUXGBcWFxUXFRUXFRcWFxkXFRUbHighGBolGxUVITEhJSkrLi4uFx8zODUtNygtLisBCgoKDg0OFQ8PGy8fFR0tNS0tLjArKzUrLS0rKy0rNy0rNzArKysrLS4tLTcvLSsrKy0tLTI3LS0tKzgrKysrOP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAAcBAAAAAAAAAAAAAAAAAQIDBAUGCAf/xABIEAACAQICBQcHBwoGAwEAAAAAAQIDEQQhBQYSMUEHE1FhcYGRIlKSobHR8BQyQkNTgsEjM2JjcpOi0uHxFUSywsPiFnSDCP/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgQD/8QAMBEBAAECAwQHCAMAAAAAAAAAAAECEQMEEhMxUZEjMlJhcYGhBUFCU2OS0eEVIST/2gAMAwEAAhEDEQA/APcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAISds3kgIgwL1ywG1s/Kqd92929K1vWZfCY2nVW1SqQmumMlJeoCuAAAAAAAAAAAAAAAAAAAAAAAAAYvWXTUMHhqmInmoLJLfKTdoxXa2vWBlAc34PX/G0q/yiVedTyryhKT2JR3uKhujlkrbjo6nNSSa3NJrvAmAAAAADTuVlVf8ADKzpXy2JTtv5tSTl3bm+pM3EhKN8nmgOQqmJd95faP01VoyUqdSUZLc4yafij2TXDkjwtZSq4WSws7Ntf5d8c4X/ACfbFpK97M8Fd1lxV1lmuuz4lHsWqvK1ONoYuPOR3c5FJTXat0vU+09Y0VpSjiaaqUakZxfFb0+iS3xfUzkeE2jP6tay1sJUVSjNxatdb4yXRJbmiDqUGm6tcomExNOPOTjRqtqLhJ72+MX5vW9zyfC+5AAAAAAAAAAAAAAAAAAAAPNOXXGbOEo019OtfuhF/jJHpZ5H/wDoB+ThF/7H/D7/AFgeOOV18cTq/V6tt4XDzvfao0nfthFnJ0ZHpXJ1ykfI4rD4q8sMvmzV5Sodsd8qfHLNdaasHu4LTRukqOIgqtCpCrB7pQkpL1bn1F2AAJalRRTlJpJZtt2S7WBMYLWfW7C4BR+UVLSndxhFOU5W3tJbl1uyNe1l5VsFhrwot4mouFNrm0+uruf3bnietWsFXHYlYiu1fZ2Uoq0YpZxjFdCbk7vN37Egz2v+vlfHzdON6eGT8mnezqW3SrPj1R3LreZo1Spbh37ypKdymyiTbuRjIllTT96+MyW0twF3QxDXldy+PjceoajcpvyZTp4yVastmOw7qTi1dNXk72eXHLZ6zyiNTfLgskTUHxfayDqbVfW3D45Pm5bM1vpya27ecknnHrM+cq6B07UwtenXptbUZXV72eTTTV1lZtd57pqvyk4XFbMKn5Gq8rSzhJ/oz4d9u8DdgEAAAAAAAAAAAAAAAeJcveNTxFClf5lKUn21JW/40e2nNfKtj+e0lXad1CSprq5uKi/4lIDTWypGZRZFMou8JipU5bdKc6U8vKpTcG+23WbFhuUDSUFaONq2/ShTm/GSbZqikNoWG4VOUbSct+Mnbqp0Y+tRXtMDpLS9bEO+IrVKueW3NyS7It2XcY1yJHIC4dW2SSXXx8SSUrx618e8pbQhKz6tzCIxkGyRqz7c/eGwJnIkqPgt79QT4vciWlKyc3xWXUkFK+dorct/uKsFZWXF8SjSj72VHLe+jL3kEece1kr27Pj+5cUa8m7blxzXgW1LJdbJ5z4Lfx6gPRdRuUWpgouk6aq0nK9nKSlHpUXmkt3Dfc9Z0Br9gsVZKpzU39CraLv1Svsvxv1HNNOVkVYV2gOuUyJzXoDXjF4Syp1m4+ZPyoeD+b3NHouhOV+jOyxVKVN+fT8qPa4vNd1wPTwYnRGsmExX5ivCb829p+hK0vUZYAAAAAAAACEnY5H0ziudq1Kj+nOU395uX4nWWOdqc3+hL2M5ExG8CgCBEoiQbIXIMoi2QuCCIJkCCJgIyzVr2at4f2yJXTfFkJErjZX6gJZeVZfR9pGu7ytbJEVGysTuo+jvCKdSdldb3uIVYu6jnZb+v4efgGm83/Yqc491gptWV/AjTjbPiSb22+nLu+GVEwJ4smTKZMBUjMnVQoXI3AuoV2uJsmhtfcdhsoYibj5tT8pHstK9l2WNRTJrgez6F5ZVksVQ+9Rdv4JP/cb5obXTA4qyp4iCk/oT8id+hKW/uucvqZPCsQdeg8f5EtYJOVbDTm2oxjUhFu9knsz2eheVDJHsAAAAS1Ummnus79hylrLoGvhak41aU1GLaU3F7EktzU927rOq8R81lqoprMsQkzZyDzkeleKHOx85eKOuvkNLfzcPRXuKsaUVuil3GrJqcmUNHVp/Mo1Z/s05y9iMnhdS9IVPmYOv3wcP9djqJDb+Px6xZNTnPD8lmlJK7w8Yft1aS9UZNlzHkh0lxVD96/5DoLbHOCxqc91eSbSazUKUuqNVXfpJL1mHxupGkaV3PB1rLjFKov4HI6b2yG2XSanIuKpypvZmnCXmyTjL0XmST3LsOuMTh6dRWqQhNdE4qS8GjWdKcnOja974ZU2/pUm6bT6Ul5PqJpXU5tt8fHaTVt/h7T13Hcied6GM7FVpp921Fr/SavpPkr0nSzjSp1lf6qom93RNRZLSt2jsnk/Ur+BlcVqxjaf5zCYiKXHmptLvSaMVVdm08nus8ms+gioRRGxFkLARIoluQAnIXJSAFS5G5Io9ZJKy3tAV7krkZHRurWMr50cLWmvO2HGPdOVk/E2TAclePnZ1eZoR4upUvJd0E160LCw5OdISpaRwzjd7VRUpJcY1PJd+pXUvunT1LcvjceT6mag4XD1oVedqYmtTzTilChGXCyzbf3n2HrNNWQWqmaZtVFkwAIiWaydzU1rLFNpwk7NpOLTuutO1jbWYTF6NpybU6cZde527TMxX8EvbBqwYmdrTMx3LJazUuKmvu/3JZaz0fNm/urwz4FZ6AofZy9KXvIf+P0Ps5elL3jpu5039n8KvRay1rh9nUfor/cUKmtnRTffJL2XMnHQlFfUrvcn7WV4aNprdRpr7sTURi8YNrkI3UTPn+2Aetr+yX7z/AKkHra/sl+8/6myfJo/Zw8F7ixw1WlUqVKapw2qTSl5MPpJNbup8S6MTtEZnJfJn7pYla2L7P+K/4FaOtMOMJ92y/wAczNPAQe+nT9CPuLBYXDTqyoqnSdSEVKUVFq0ZZJ3StwLpxOJtsjO/DmPNRp6zUnv2l2q/suXMNP0H9Yu9Ne1EZ6BoP6qPc5Ix9PQuGnOUIqacd9pZdGV0XpI4H+CrtRyZenpek91WHpL2FxTxsXukn3pmFeqtPpqLvgyhPVWF7Kq79Dim/UyTVXHuTY5Kd2JMeNLaY1vjIo4jDUqnz6cJ/tRi/ajW3q7Wj8ysvGcCR6Pxq3TlLsqX9rMzizG+mSMjhVdTGjz/AKZLFaoaPqO8sJQb6dhJvtaRYVOTnRcv8pFdk60fZIpujjv1npL3kHTx36zxRnbR2Z5Nfxv1aeahU5K9FvdRqLsr1vxmSPkq0X9lV/f1P5i4dLHP7T0kvxJf8Oxkt7l96p/UbaPdTKx7OpjrYtPNQlyXaL40ai/+9b+Ytp8mWiVm9tdXyiVvFu5koau1JfPqRXpSf4FxDVaP0qkn2QS9bbLqrndSzOWytPWxr+EMdhtU9C0Pqac3+nOpW/hcmvUX1PSmDoLZoYeMVw2KcILxtf1FxhdB4ZylFSc5QaU47cbxbV0pKOcXbPMr1aVOjKEYQhG7zdryUeNnvHSzwhm+So7Vc8o/K0WPxdb83BU4+dL3vf3Iqw0JteVXnKq+i7UffbwMlzt5JxvJe0r06M272GmPim8+jFWbq3YVMUR3b+e9c4DBqKSSUYrgsr/0MkWVChLiy7XQW7llMAABYaQoOW526+JfkskBrVfB4r6FdrtjCXtRa1MLpHhiId9KPvNscSGyW6WaTXwGlJbsXCP7NGH43LWWgdJyeekKm+/k06K4W4RN/wBkio9RdS2aBDVTGv52kMRx3NLfv3EmD5O9iTqLE4jblfamqsozlfftSTu+89EUSOyS40panzd28Vinf9dU9WeRDCakwp1HUVSq5vfJ1JbT3ZOW9rJb+g3axK4i8jVJasu9+er/AL2pb2lWhq8k01Kakk1tbUtqzd83x/obNsEVTFxg6eh6iT/L1c+mV7dl0W9LV6Sr89z1R1NnZvKzWz0bKVjZdgiojVIxccNXX1kH2wd/VIxGsmr9TFRjGVWVNJ3vScoSb/aTyNs2SGyNUpZicHhJQpwg/LcYqLlJ+VKyteWW98S2weDxCq1ZVJwlTdubpqKTp233nvlfrWRntkbJdUlmA0ngMTKVJ0akaUYzTqLZU3UireRmvJTzzWZS1l0HPFYeph9rm1USUpRb2tm6bSyW9K3Y2bKojZJqks17ROialChSoRnFxpwUE5JuTUVZXs1d2KGitXJUJVpRrzvWqOpO6i1tPzE09lWsrXe42dwGwXVJZreD1VpQnUqKVTbqu9SSnKLm+vZssuGWRf0tBUYu6jdvi22/FmVVMjskuqhTwkY7kXCREEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k=' />
                <Details>
                  <ProductName><b>Product: </b>Jessie Thunder Shoes</ProductName>
                  <ProductId><b>ID: </b>233258352</ProductId>
                  <ProductColor color='black' />
                  <ProductSize><b>Size: </b>37.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 24</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src='data:image/jpeg;base64,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' />
                <Details>
                  <ProductName><b>Product: </b>SPIDER-MAN FANTASY</ProductName>
                  <ProductId><b>ID: </b>233258352</ProductId>
                  <ProductColor color='red' />
                  <ProductSize><b>Size: </b>M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 40</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 64</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 64</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;