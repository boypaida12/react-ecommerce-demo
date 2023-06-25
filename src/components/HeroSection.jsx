/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageProduct1 from "../assets/image-product-1-thumbnail.jpg";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { increaseCart, decreaseCart } from "../slices/productSlices";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  Button,
  ButtonGroup,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import CartModal from "./CartModal";
import { Link } from "react-router-dom";
import MobileScreenSlide from "./MobileScreenSlide";
import LargeScreenSlide from "./LargeScreenSlide";

const HeroSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const state = useSelector((state) => {
    return state.productReducer;
  });
  const dispatch = useDispatch();

  const handleDecrease = () => {
    dispatch(decreaseCart());
  };

  const handleIncrease = () => {
    dispatch(increaseCart());
  };

  const handleAddtoCart = () => {
    if (state.count > 0) {
      onOpen();
    }
  };

  return (
    <>
      <Box maxWidth={1016} marginInline={"auto"}>
        <Container className="mt-lg-5">
          <Row>
            <Col lg={6}>
              <LargeScreenSlide/>
              <MobileScreenSlide />
            </Col>
            <Col lg={6} className="py-5">
              <small className="fw-bold text-uppercase text-orange">
                Sneaker Company
              </small>
              <p className="fs-1 fw-bold">
                Fall Limited Edition
                <br /> Sneakers
              </p>
              <p className="text-grey-50" style={{width: "85%"}}>
                <small>
                  {`These low-profile sneakers are your perfect casual wear
                  companion. Featuring a durable rubber outer sole, they'll withstand
                  everything the weather can offer.`}
                </small>
              </p>
              <div className="my-3 d-flex justify-content-between d-lg-block">
                <div className="d-flex flex-wrap gap-2">
                  <span className="fw-bold fs-5">$125.00</span>
                  <small className="fw-bold rounded-2 px-2 align-self-center text-orange bg-orange-50">
                    50%
                  </small>
                </div>
                <small className="d-block align-self-center text-decoration-line-through fw-semibold text-grey-30">
                  $250.00
                </small>
              </div>
              <div className="d-md-flex gap-3">
                <ButtonGroup
                  size="md"
                  isAttached
                  variant="outline"
                  my={5}
                  w={{base: "full", lg: "35%"}}
                >
                  <IconButton
                    aria-label="Decrease cart"
                    icon={<MinusIcon boxSize={"0.8rem"} />}
                    borderRightColor={"transparent"}
                    onClick={handleDecrease}
                    backgroundColor={"hsl(223, 64%, 98%)"}
                    _hover={{ backgroundColor: "hsl(223, 64%, 98%)" }}
                    color={"hsl(26, 100%, 55%)"}
                    width={"calc(100%/3)"}
                  />
                  <Button
                    borderInline={0}
                    backgroundColor={"hsl(223, 64%, 98%)"}
                    _hover={{ backgroundColor: "hsl(223, 64%, 98%)" }}
                    width={"calc(100%/3)"}
                  >
                    {state.count}
                  </Button>
                  <IconButton
                    aria-label="Increase cart"
                    icon={<AddIcon boxSize={"0.8rem"} />}
                    borderLeftColor={"transparent"}
                    onClick={handleIncrease}
                    backgroundColor={"hsl(223, 64%, 98%)"}
                    _hover={{ backgroundColor: "hsl(223, 64%, 98%)" }}
                    color={"hsl(26, 100%, 55%)"}
                    width={"calc(100%/3)"}
                  />
                </ButtonGroup>
                <Button
                  className="align-self-center"
                  px={10}
                  size={"md"}
                  w={{base: "full", lg: "45%"}}
                  backgroundColor={"hsl(26, 100%, 55%)"}
                  color={"hsl(0, 0%, 100%)"}
                  _hover={{
                    backgroundColor: "hsl(26, 100%, 55%)",
                    boxShadow: "lg",
                  }}
                  onClick={handleAddtoCart}
                >
                  <AiOutlineShoppingCart />
                  <small className="ms-3">Add to Cart</small>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{state.count} item(s) added to Cart</ModalHeader>
          <hr />
          <ModalCloseButton />
          <ModalBody>
            <CartModal productImage={ImageProduct1} />
          </ModalBody>
          <ModalFooter>
            <Button
              backgroundColor={"hsl(26, 100%, 55%)"}
              colorScheme="whiteAlpha"
              _hover={{ backgroundColor: "hsl(26, 100%, 55%)" }}
              as={Link}
              to="/checkout"
            >
              Proceed to Checkout
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HeroSection;
