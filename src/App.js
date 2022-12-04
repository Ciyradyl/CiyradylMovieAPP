import React, { useEffect, useState } from "react";
import "./App.css";
import MovieBox from "./MovieBox";
import Navi from "./Navi";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";

// import { Routes, Route } from "react-router-dom";
import alertify from "alertifyjs";

const API_POPULAR =
  "https://api.themoviedb.org/3/movie/popular?api_key=<<API_KEY>>";
const API_TRENDING =
  "https://api.themoviedb.org/3/trending/all/day?api_key=<<API_KEY>>";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=<<API_KEY>>&query";

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

  const getTrending = async (e) => {
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

  const getPopular = async (e) => {
    e.preventDefault();
    try {
      const popular_url = API_POPULAR;
      const res = await fetch(popular_url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
      alertify.success("Popular Movies Fetched!", 2);
    } catch (e) {
      console.log(e);
    }
  };

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    if(query !== ""){
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
    }else{
      alertify.alert("Please enter a movie name!", 2);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Navi
        getPopular={getPopular}
        getTrending={getTrending}
        searchMovie={searchMovie}
        changeHandler={changeHandler}
        query={query}
      ></Navi>

      <div>
        <div>
          {movies.length > 0 ? (
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
