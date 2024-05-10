import { Button } from "../Button";
import { Container, FilterContainer } from "./styles";
import { Props } from "./types";

export const Filter = ({ filters, setSearchParams }: Props): JSX.Element => (
  <Container>
    <FilterContainer>
      {" "}
      {filters.map((element) => (
        <Button
          text={element}
          backgroundcolor="#FFEAD0"
          color="black"
          hoverbackgroundcolor="#ffe5c4"
          key={element}
          mediaheight="4rem"
          mediawidth="7rem"
          onClick={() => setSearchParams(`?type=${element}`.toLowerCase())}
        ></Button>
      ))}
    </FilterContainer>
    <Button
      backgroundcolor="transparent"
      text="Clear filters"
      hoverbackgroundcolor="transparent"
      color="black"
      textDecoration="underline"
      hovercolor="#404040"
      onClick={() => setSearchParams("")}
    ></Button>
  </Container>
);
