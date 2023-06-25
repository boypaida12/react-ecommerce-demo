/* eslint-disable no-unused-vars */
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductImage from "../assets/image-product-1.jpg"

function Checkout() {
  const state = useSelector((state) => {
    return state.productReducer;
  });

  const subTotal = state.price * state.count;

  const discount = 0.05 * subTotal;

  const total = subTotal - discount;

  function validateCardNumber(value) {
    let error;
    if (!value) {
      error = "Card number required";
    } else if (!/^\d{16,22}$/.test(value)) {
      error = "Card number must be 16 to 22 digits";
    }
    return error;
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
      error.email = "Invalid email address";
    }
    return error;
  }

  function validateCVC(value) {
    let error;
    if (!value) {
      error = "CVC is required";
    } else if (!/^\d{3,4}$/.test(value)) {
      error = "CVC must be a 3 or 4-digit number";
    }
    return error;
  }

  function validateExpiryDate(value) {
    let error;
    if (!value) {
      error = "Expiry date is required";
    } else if (!/^\d{2}\/\d{2}$/.test(value)) {
      error = "Expiry date must be in the format MM/YY";
    } else {
      const [month, year] = value.split("/");
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const currentMonth = currentDate.getMonth() + 1;

      if (parseInt(year, 10) < currentYear) {
        error = "Expiry date has passed";
      } else if (
        parseInt(year, 10) === currentYear &&
        parseInt(month, 10) < currentMonth
      ) {
        error = "Expiry date has passed";
      }
    }
    return error;
  }

  return (
    <>
      <Container
        className="bg-body-tertiary d-flex justify-content-center align-items-center min-vh-100"
        fluid
      >
        <Grid
          templateColumns="50% 45%"
          gap={10}
          bgColor={"white"}
          boxShadow={"lg"}
          overflow={"hidden"}
          maxWidth={1080}
          p={10}
          rounded={"2xl"}

        >
          <GridItem>
            <p className="fw-bold text-grey-50">Payment details</p>
            <Formik initialValues={{ name: "" }}>
              {(props) => (
                <Form autoComplete="off">
                  <Field name="email" validate={validateEmail}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                        my={5}
                      >
                        <FormLabel>Email address</FormLabel>
                        <Input {...field} placeholder="example@email.com" />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="number" validate={validateCardNumber}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.number && form.touched.number}
                        my={5}
                      >
                        <FormLabel>Card Number</FormLabel>
                        <Input
                          {...field}
                          placeholder="x x x x     x x x x     x x x x     x x x x"
                          pattern="[\d| ]{16,22}"
                        />
                        <FormErrorMessage>
                          {form.errors.number}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Grid templateColumns="repeat(2, 1fr)" gap={5} my={5}>
                    <Field name="date" validate={validateExpiryDate}>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.date && form.touched.date}
                        >
                          <FormLabel>Expiry Date</FormLabel>
                          <Input
                            {...field}
                            placeholder="mm / yy"
                            pattern="\d\d/\d\d"
                          />
                          <FormErrorMessage>
                            {form.errors.date}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="cvc" validate={validateCVC}>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.cvc && form.touched.cvc}
                        >
                          <FormLabel>CVC</FormLabel>
                          <Input
                            {...field}
                            placeholder="x x x"
                            pattern="\d{3,4}"
                          />
                          <FormErrorMessage>{form.errors.cvc}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Grid>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Subtotal</span>
                    <small className="fw-bold">${subTotal}</small>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Discount</span>
                    <small className="fw-bold">${discount}</small>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span>Total</span>
                    <span className="fw-bold">${total}</span>
                  </div>
                  <Button
                    mt={4}
                    backgroundColor={"hsl(26, 100%, 55%)"}
                    _hover={{
                      backgroundColor: "hsl(26, 100%, 55%)",
                      boxShadow: "lg",
                    }}
                    color={"whiteAlpha.900"}
                    w={"xs"}
                    type="submit"
                  >
                    Pay Now
                  </Button>
                </Form>
              )}
            </Formik>
          </GridItem>
          <GridItem alignSelf={"center"}>
            <Image src={ProductImage} alt="" rounded={"lg"}/>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}

export default Checkout;
