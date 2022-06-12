import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import { Container, Row, Col } from "react-bootstrap";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);
  console.log(images);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.unsplash.com/photos/random/?query=${searchTerm}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: searchTerm }, ...images]);
      })
      .catch((err) => console.log(err));
    setSearchTerm("");
  };
  const deleteImageHandler = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };
  return (
    <div>
      <Header title="Images Gallery" />
      <Search
        word={searchTerm}
        setWord={setSearchTerm}
        handleSubmit={handleSearchSubmit}
      />
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {!!images.length &&
            images.map((image) => (
              <Col key={image.id} className="pb-3">
                <ImageCard deleteHandler={deleteImageHandler} image={image} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
