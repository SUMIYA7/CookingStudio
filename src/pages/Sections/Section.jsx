import React from 'react';
import { Container } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Marquee from "react-fast-marquee";

const Section = () => {
    return (
      <>
        <Container>
          <div className="text-center mt-2 mb-4">
            <h1>Indian Cuisine</h1>
            <h6>Everything About Indian Food</h6>
          </div>
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Green Vegetables</Card.Title>
                <Card.Text>
                  Healthy food makes our soul more purier and gives a sanity.Vegetables are one of them.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="ms-3">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Indian Spices</Card.Title>
                <Card.Text>
                  Spices are the soul of indian food that makes food more tasty and delicious to eat.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="ms-3">
              <Card.Img
                variant="top"
                src="https://plus.unsplash.com/premium_photo-1663852706199-52e7cd98468e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title>Make with Love</Card.Title>
                <Card.Text>
                  Love & passion for cooking with extra care give our indian food a soul.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
          <div className="text-center mt-5 mb-5">
            <h1>Our Motto</h1>
            <h6>Spread Love Around People By Cooking</h6>
          </div>
        </Container>
          <Marquee className='mb-5 pb-5'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6wzlJTAXvATb40mfYTBjTgjMyRXkn-XNMA&usqp=CAU" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilt98FeCF7nWcp0JcHjap17gqavU2CFHi8Q&usqp=CAU" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfxIkyFk3EmAikxkCWGdT1i7wfB913dH0fw&usqp=CAU" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuF1Y_g3Lfl_ySYzBPLU7hA050zohMpWlQ1A&usqp=CAU" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBH2NuL9W_4zj73DigkOESJ9w4bmPIShyQnQ&usqp=CAU" />
          </Marquee>
      </>
    );
};

export default Section;