import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ textAlign: "center", backgroundImage: "url(./jumbo.png)" }}
      className="jumbotron"
    >
      <img src="./google-books.png" alt="google-books-logo" style={{ height: "200px" }} />
    </div>
  );
}

export default Jumbotron;

