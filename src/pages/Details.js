import Navi from "../components/Navi";
import {} from "react-bootstrap";
import MovieDetails from "../components/MovieDetails";

const Details = ({
  current,
  getPopular,
  getTrending,
  searchMovie,
  changeHandler,
  query,
}) => {
  return (
    <div>
      <Navi
        getPopular={getPopular}
        getTrending={getTrending}
        searchMovie={searchMovie}
        changeHandler={changeHandler}
        query={query}
      ></Navi>

      {current.map((current, currentReq) => (
        <div>
          <MovieDetails
            current={current}
            key={currentReq}
            {...currentReq}
          ></MovieDetails>
        </div>
      ))}
    </div>
  );
};

export default Details;
