import React, { useEffect, useState } from "react";
import "./App.css";
import MovieBox from "./MovieBox";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
// import { Routes, Route } from "react-router-dom";
import alertify from "alertifyjs";

const API_POPULAR =
  "https://api.themoviedb.org/3/movie/popular?api_key=dcbcfe9ab6d2818e853036429ecb24e7";
const API_TRENDING =
  "https://api.themoviedb.org/3/trending/all/day?api_key=dcbcfe9ab6d2818e853036429ecb24e7";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=dcbcfe9ab6d2818e853036429ecb24e7&query";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_POPULAR)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = API_SEARCH + `=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
      alertify.success("Searched Movies Fetched!", 2);
    } catch (e) {
      console.log(e);
    }
  };

  const searchTrending = async (e) => {
    e.preventDefault();
    try {
      const trending_url = API_TRENDING;
      const res = await fetch(trending_url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
      alertify.success("Trend Movies Fetched!", 2);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Navbar bg="warning" expand="lg" variant="light">
        <Container fluid>
          <Navbar.Brand href="/">MovieDB APP</Navbar.Brand>
          <Navbar.Brand href="/">Popular</Navbar.Brand>
          <Navbar.Brand href="/" onClick={searchTrending}>
            Trending
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
          <NavbarCollapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <Form className="d-flex" onSubmit={searchMovie}>
              <FormControl
                type="search"
                placeholder="Movie Name"
                className="me-2"
                aria-label="search"
                name="query"
                value={query}
                onChange={changeHandler}
              ></FormControl>
              <Button variant="dark" type="submit">
                Search
              </Button>
            </Form>
          </NavbarCollapse>
        </Container>
      </Navbar>

      <div>
        <div>
          {movies.length > 0 ?(
            <div className="container">
              <div className="grid">
                {movies.map((movieReq) => (
                  <MovieBox key={movieReq.id} {...movieReq}></MovieBox>
                ))}
              </div>
            </div>
          ) : (
            <h2 className="container">
              None of the movies in our database match with your search! Please
              try with another input
            </h2>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
