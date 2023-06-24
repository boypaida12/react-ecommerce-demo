/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import iconCart from "../assets/icon-cart.svg";
import ImageAvatar from "../assets/image-avatar.png";
import { Badge } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function Navigation() {
  const state = useSelector((state) => {
    return state.productReducer;
  });
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light" fluid="md">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            sneakers
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><small>Collections</small></Nav.Link>
              <Nav.Link><small>Men</small></Nav.Link>
              <Nav.Link><small>Women</small></Nav.Link>
              <Nav.Link><small>About</small></Nav.Link>
              <Nav.Link><small>Contact</small></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                as={Link}
                to="/checkout"
                className="d-flex me-lg-3 position-relative"
              >
                <img
                  src={iconCart}
                  alt="shopping cart"
                  className="align-self-center"
                />
                <Badge
                  className="align-self-start px-2 position-absolute text-white"
                  style={{ top: "8px", left: "15px" }}
                  rounded={"xl"}
                  backgroundColor={"hsl(26, 100%, 55%)"}
                >
                  {state.count}
                </Badge>
              </Nav.Link>
              <Nav.Link eventKey={2} to="#memes">
                <img width={"40px"} src={ImageAvatar} alt="image-avatar" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
