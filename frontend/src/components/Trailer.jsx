import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

export default function Trailer({ trailerKey }) {
  return (
    <div>
      <Container>
        <iframe
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Youtube trailer"
          allowFullScreen
        />
      </Container>
    </div>
  );
}
Trailer.propTypes = {
  trailerKey: PropTypes.func.isRequired,
};