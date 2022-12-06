import React, { useState } from 'react';
import ArrowLeftOutlined from "@mui/icons-material/ArrowLeftOutlined"
import ArrowRightOutlined from "@mui/icons-material/ArrowRightOutlined"
import {
  Container,
  Arrow,
  ImageContainer,
  InfoContainer,
  Image,
  SliderContainer,
  Description,
  Button,
  Title,
  Wrapper
} from './styles';
import { slideItems } from './data';

interface DirectionProps {
  direction: "right" | "left";
}

interface ItemProps {
  id: number;
  img: string;
  title: string;
  description: string;
  bg: string;
}

const Slider: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const handleClick = (direction: any) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideItems.map((item: ItemProps) => (
          <SliderContainer backgroundColor={item.bg} key={item.id}>
            <ImageContainer>
              <Image src="https://banabana.vteximg.com.br/arquivos/ids/183413-300-450/T-SHIRT--STAR-BANA-BANA-110901-0072--4-.png?v=637729263912630000" />
            </ImageContainer>
            <InfoContainer>
              <Title>
                {item.title}
              </Title>
              <Description>
                {item.description}
              </Description>
              <Button>
                SHOP NOW
              </Button>
            </InfoContainer>
          </SliderContainer>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Slider;