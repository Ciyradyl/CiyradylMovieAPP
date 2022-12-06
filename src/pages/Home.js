// import React, {} from "react";
import MovieBox from "../components/MovieBox";
import GenreList from "../components/GenreList";
import { Row, Col, Container } from "react-bootstrap";


const Home = ({
genres,
movies,
genreChangeHandler
}) => {
    return(
        <Container fluid>
            <Row>
              <Col xs="auto">
                {genres.map((genreReq) => (
                  <GenreList
                    genreChangeHandler={genreChangeHandler}
                    key={genreReq.id}
                    {...genreReq}
                  ></GenreList>
                ))}
              </Col>
              <Col>
                {movies.length > 0 ? (
                  <div>
                    <div className="grid">
                      {movies.map((movieReq) => (
                        <MovieBox key={movieReq.id} {...movieReq}></MovieBox>
                      ))}
                    </div>
                  </div>
                ) : (
                  <h2 className="Container">
                    None of the movies in our database match with your search!
                    Please try with another input
                  </h2>
                )}
              </Col>
            </Row>
          </Container>
    )
}

export default Home;