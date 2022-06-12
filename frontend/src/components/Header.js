import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";
const navbarStyle = {
  backgroundColor: "#5778A3",
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo alt={title} style={{ maxWidth: "12rem", maxHeight: "2.5rem" }} />
      </Container>
    </Navbar>
  );
};
export default Header;
