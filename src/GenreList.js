import React, {} from "react";
import { ListGroup } from "react-bootstrap";

const GenreList = ({ name, id, genreChangeHandler }) => {

  const selectGenre = () => {
    genreChangeHandler(id);
  };

  return (
    <ListGroup className="mt-2">
      <ListGroup.Item className="bg-warning" onClick={selectGenre}>
        {name}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default GenreList;
