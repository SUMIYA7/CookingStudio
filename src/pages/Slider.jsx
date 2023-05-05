import React from 'react';
import { Container } from 'react-bootstrap';
import './Slider.css';
const Slider = () => {
    return (
      <Container>
        <div
          id="carouselExampleInterval"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{
            height: "100vh",
            width: "100%",
            borderRadius: "0px",
            border: "none",
          }}
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active banners"
              data-bs-interval="5000"
            >
              <img
                src="https://prod-media.kidadl.com/modern_kitchen_chefs_8b4299fe23.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="overlaying">
                <h1>Here you can find any Indian Delicious Cuisine Recipie</h1>
                <p className="fw-normal">
                Cooking is not just about the recipe, it's about the ingredients, the techniques, and the heart.
                </p>
                <small>
                "A Recipie Has No Soul Until You Cook It" - Julia Child
                </small>
              </div>
            </div>
            <div className="carousel-item banners" data-bs-interval="2000">
              <img
                src="https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?b=1&s=170667a&w=0&k=20&c=RRljEgn_wsgIq_9bHcX1pJi6E842KKxr82xzftiDe8I="
                className="d-block w-100"
                alt="..."
              />
              <div className="overlaying">
                <h1>Experience the Joy of Cooking with Our Expert Chefs</h1>
                <p className="fw-normal">
                Cooking is not just about the recipe, it's about the ingredients, the techniques, and the heart.
                </p>
                <small>
                  "Cooking is like love, it should be entered into with abandon
                  or not at all." - Harriet Van Horne
                </small>
              </div>
            </div>
            <div className="carousel-item banners">
              <img
                src="https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?b=1&s=170667a&w=0&k=20&c=MXDxXhIbuwyhkwui1h8qsuPoG63YuCq_pBCjegE0P3c="
                className="d-block w-100"
                alt="..."
              />
              <div className="overlaying">
                <h1>Enjoy our Indian Delicious Dishes More</h1>
                <p className="fw-normal">
                Cooking is not just about the recipe, it's about the ingredients, the techniques, and the heart.
                </p>
                <small>
                  "A Recipie Has No Soul Until You Cook It" - Julia Child
                </small>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Slider;