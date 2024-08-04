export const revalidate=0; 

// Importing React and necessary components
import React from 'react';
import Container from "../components/Container";
import FormWrapper from "../components/FormWrapper";
import CheckoutClient from "./CheckoutClient";

// Define the Checkout functional component
const Checkout = () => {
  return (
    <div className="p-8">
        <Container>
          {/* Wrapping CheckoutClient component with FormWrapper */}
            <FormWrapper>
                <CheckoutClient/>
            </FormWrapper>
        </Container>
    </div>
  );
};

export default Checkout;