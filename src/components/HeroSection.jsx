/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Row, Col, Figure, Image } from "react-bootstrap";
import ImageProductOne from "../assets/image-product-1.jpg";
import ImageProductTwo from "../assets/image-product-2.jpg";
import ImageProductThree from "../assets/image-product-3.jpg";
import ImageProductFour from "../assets/image-product-4.jpg";
import ImageProduct1 from "../assets/image-product-1-thumbnail.jpg";
import ImageProduct2 from "../assets/image-product-2-thumbnail.jpg";
import ImageProduct3 from "../assets/image-product-3-thumbnail.jpg";
import ImageProduct4 from "../assets/image-product-4-thumbnail.jpg";
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
} from "@chakra-ui/react";
import CartModal from "./CartModal";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const state = useSelector((state) => {
    return state.productReducer;
  });
  const dispatch = useDispatch();
  const [displayedImage, setDisplayedImage] = useState("");

  const thumbnails = [
    { src: ImageProduct1, alt: "Thumbnail 1", mainImage: ImageProductOne },
    { src: ImageProduct2, alt: "Thumbnail 2", mainImage: ImageProductTwo },
    { src: ImageProduct3, alt: "Thumbnail 3", mainImage: ImageProductThree },
    { src: ImageProduct4, alt: "Thumbnail 4", mainImage: ImageProductFour },
  ];

  const handleDecrease = () => {
    dispatch(decreaseCart());
  };

  const handleIncrease = () => {
    dispatch(increaseCart());
  };

  const handleClick = (image) => {
    setDisplayedImage(image);
  };

  const handleAddtoCart = () => {
    if (state.count > 0) {
      onOpen();
    }
  };

  return (
    <>
      <Container style={{ maxWidth: 1080 }}>
        <Row>
          <Col md={6}>
            <Image
              src={displayedImage || ImageProductOne}
              className="rounded-3"
              width={430}
            />

            <br />
            <Figure className="d-flex gap-4">
              {thumbnails.map((thumbnail, index) => (
                <Figure.Image
                  key={index}
                  className="rounded-2"
                  style={{ cursor: "pointer" }}
                  width={90}
                  alt={thumbnail.alt}
                  src={thumbnail.src}
                  onClick={() => handleClick(thumbnail.mainImage)}
                />
              ))}
            </Figure>
          </Col>

          <Col md={6} className="py-5">
            <small className="fw-bold text-uppercase text-orange">
              Sneaker Company
            </small>
            <p className="fs-1 fw-bold">
              Fall Limited Edition
              <br /> Sneakers
            </p>
            <p style={{ maxWidth: "35vw", color: "hsl(219, 9%, 45%)" }}>
              {`These low-profile sneakers are your perfect casual wear
              companion. Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.`}
            </p>
            <div className="my-3">
              <div className="d-flex flex-wrap gap-2">
                <span className="fw-bold fs-5">$125.00</span>
                <span className="fw-bold rounded-2 px-2 align-self-center text-orange bg-orange-50">
                  50%
                </span>
              </div>
              <small className="d-block text-decoration-line-through fw-semibold text-grey-30">
                $250.00
              </small>
            </div>
            <div className="d-flex gap-3">
              <ButtonGroup
                size="md"
                isAttached
                variant="outline"
                backgroundColor={"hsl(223, 64%, 98%)"}
                my={5}
              >
                <IconButton
                  aria-label="Decrease cart"
                  icon={<MinusIcon boxSize={"0.8rem"} />}
                  borderRightColor={"transparent"}
                  onClick={handleDecrease}
                  _hover={{ backgroundColor: "transparent" }}
                  color={"hsl(26, 100%, 55%)"}
                />
                <Button
                  borderInline={0}
                  _hover={{ backgroundColor: "transparent" }}
                >
                  {state.count}
                </Button>
                <IconButton
                  aria-label="Increase cart"
                  icon={<AddIcon boxSize={"0.8rem"} />}
                  borderLeftColor={"transparent"}
                  onClick={handleIncrease}
                  _hover={{ backgroundColor: "transparent" }}
                  color={"hsl(26, 100%, 55%)"}
                />
              </ButtonGroup>
              <Button
                className="align-self-center"
                px={10}
                size={"md"}
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
