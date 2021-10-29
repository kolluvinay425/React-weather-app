import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { WiDayCloudyGusts } from "react-icons/wi";
export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <WiDayCloudyGusts size={"35px"} /> Weather
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
