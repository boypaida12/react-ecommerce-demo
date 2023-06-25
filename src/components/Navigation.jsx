/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import iconCart from "../assets/icon-cart.svg";
import ImageAvatar from "../assets/image-avatar.png";
import { Badge, Box, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function Navigation() {
  const state = useSelector((state) => {
    return state.productReducer;
  });
  return (
    <>
      <Box maxWidth={1110} marginInline={"auto"}>
        <Navbar collapseOnSelect expand="lg" fluid="md" className="bg-transparent">
          <Container>
            <Navbar.Brand as={Link} to="/" className="fw-bold">
              sneakers
            </Navbar.Brand>
            <div className="d-flex gap-2">
              <Nav>
                <div className="d-flex d-lg-none gap-3">
                  <Nav.Link
                    as={state.count > 0 ? Link : undefined}
                    to={state.count > 0 ? "/checkout" : undefined}
                    className="d-flex me-lg-3 position-relative"
                  >
                    <img
                      src={iconCart}
                      alt="shopping cart"
                      className="align-self-center"
                    />
                    {state.count > 0 && (
                      <Badge
                        className="align-self-start px-2 position-absolute text-white"
                        style={{ top: "8px", left: "15px" }}
                        rounded={"xl"}
                        backgroundColor={"hsl(26, 100%, 55%)"}
                      >
                        {state.count}
                      </Badge>
                    )}
                  </Nav.Link>
                  <Nav.Link>
                    <Image
                      width={"40px"}
                      src={ImageAvatar}
                      border={"1px solid transparent"}
                      alt="image-avatar"
                      _hover={{
                        border: "1px solid hsl(26, 100%, 55%)",
                        rounded: "full",
                      }}
                    />
                  </Nav.Link>
                </div>
              </Nav>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" className="align-self-center"/>
            </div>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <small>Collections</small>
                </Nav.Link>
                <Nav.Link>
                  <small>Men</small>
                </Nav.Link>
                <Nav.Link>
                  <small>Women</small>
                </Nav.Link>
                <Nav.Link>
                  <small>About</small>
                </Nav.Link>
                <Nav.Link>
                  <small>Contact</small>
                </Nav.Link>
              </Nav>
              <Nav className="d-none d-lg-flex">
                <Nav.Link
                  as={state.count > 0 ? Link : undefined}
                  to={state.count > 0 ? "/checkout" : undefined}
                  className="d-flex me-lg-3 position-relative"
                >
                  <img
                    src={iconCart}
                    alt="shopping cart"
                    className="align-self-center"
                  />
                  {state.count > 0 && (
                    <Badge
                      className="align-self-start px-2 position-absolute text-white"
                      style={{ top: "8px", left: "15px" }}
                      rounded={"xl"}
                      backgroundColor={"hsl(26, 100%, 55%)"}
                    >
                      {state.count}
                    </Badge>
                  )}
                </Nav.Link>
                <Nav.Link>
                  <Image
                    width={"40px"}
                    src={ImageAvatar}
                    border={"1px solid transparent"}
                    alt="image-avatar"
                    _hover={{
                      border: "1px solid hsl(26, 100%, 55%)",
                      rounded: "full",
                    }}
                  />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Box>
    </>
  );
}

export default Navigation;
