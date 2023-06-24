/* eslint-disable no-unused-vars */
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

function Checkout() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";
  return (
    <>
      <Container>
        <Grid templateColumns="60% 40%" gap={4}>
          <GridItem>
            <p className="fw-bold text-grey-50">Payment details</p>
            <FormControl isInvalid={isError}>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" value={input} onChange={handleInputChange} />
              {!isError ? (
                <FormHelperText>
                  {`We promise to keep your email between us ;)`}
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
          </GridItem>
          <GridItem>
            kjfdkfj
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}

export default Checkout;
