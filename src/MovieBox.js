import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Button,
} from "react-bootstrap";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="card text-center bg-warning m-2">
      <div className="card-body">
        <img
          className="card-img-top"
          onClick={handleShow}
          src={API_IMG + poster_path}
          alt=""
        ></img>
    
        <Modal show={show} onHide={handleClose}>
          <ModalHeader closeButton>
            <ModalTitle>
              <h3>{title}</h3>
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <img
              className="card-img-top"
              src={API_IMG + poster_path}
              alt=""
            ></img>
          </ModalBody>
          <ModalBody>
            <h5>IMDB Rating: {vote_average}</h5>
            <h5>Release Date: {release_date}</h5>
            <h7>{overview}</h7>
          </ModalBody>
          <ModalFooter>
            <Button variant="dark" onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default MovieBox;
