import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Van } from "../../../server/types";
import {
  Container,
  ContainerButton,
  DescriptionContainer,
  Img,
  ImgContainer,
} from "./style";
import { Button } from "../../../components/Button/index";
import { Headline, Span, Text } from "../../../components/styles";

export default function VansDetail() {
  const param = useParams();
  const [van, setVan] = useState<Van>();
  console.log(param.id);
  useEffect(() => {
    fetch(`/api/vans/${param.id}`)
      .then((res) => res.json())
      .then((res) => setVan(res.van)); // Parsea la respuesta como JSON
  }, [param.id]);
  const backgroundcolor =
    van?.type == "simple"
      ? "#E17654"
      : van?.type == "luxury"
      ? "#161616"
      : "#115E59";

  const hoverbackgroundcolor =
    van?.type == "simple"
      ? "#f5a187"
      : van?.type == "luxury"
      ? "#424242"
      : "#10756f";
  return (
    <Container>
      <ImgContainer>
        <Img src={van?.imageUrl}></Img>
      </ImgContainer>
      <DescriptionContainer>
        <Button
          text={van?.type}
          mediaHeight="2rem"
          mediaWidth="5.3rem"
          backgroundcolor={backgroundcolor}
          hoverbackgroundcolor={hoverbackgroundcolor}
          color="#FFEAD0"
        ></Button>
        <Headline fontWeight={700} fontSize="2rem">
          {van?.name}
        </Headline>
        <Span fontWeight={600} fontSize="1.5rem" color="#161616">
          ${van?.price}
        </Span>
        <Span fontWeight={500} fontSize="1.2rem" color="#161616">
          /day
        </Span>
        <Text fontWeight={500} fontSize="1rem" color="#161616">
          {van?.description}
        </Text>
        <ContainerButton>
          {" "}
          <Button
            mediaHeight="3rem"
            mediaWidth="20rem"
            text="Rent this van"
          ></Button>
        </ContainerButton>
      </DescriptionContainer>
    </Container>
  );
}
