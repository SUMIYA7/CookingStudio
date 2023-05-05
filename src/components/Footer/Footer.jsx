import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
      <Navbar
        className="mt-5"
        expand="lg"
        variant="light"
        bg="light"
        style={{position:"fixed", bottom: "0", width: "100%" }}
      >
        <Container>
          <small>
            {" "}
            All Rights Reserved By CookingStudio || Contact Us On Our Hotline - +91 22 1234 5678
          </small>
        </Container>
      </Navbar>
    );
};

export default Footer;