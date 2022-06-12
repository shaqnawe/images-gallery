import React from "react";
import { Card, Button } from "react-bootstrap";
const ImageCard = ({ image, deleteHandler }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title.toUpperCase()}</Card.Title>
        <Card.Text>{image.desciption || image.alt_description}</Card.Text>
        <Button variant="primary" onClick={() => deleteHandler(image.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
