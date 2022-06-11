import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

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
        setImages([data, ...images]);
      })
      .catch((err) => console.log(err));
    setSearchTerm("");
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search
        word={searchTerm}
        setWord={setSearchTerm}
        handleSubmit={handleSearchSubmit}
      />
    </div>
  );
};

export default App;
