import React from "react";
import { Container, Img } from "./styles";

const Header = () => {
  const IMG_PATH = "/images/proximityLogo.png";
  return (
    <Container>
      <Img src={IMG_PATH} />
    </Container>
  );
};

export default Header;
