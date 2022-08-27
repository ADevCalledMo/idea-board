import React from "react";
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <h2>404 Not Found</h2>
      <p>
        You have arrived at a page that does not exist<Link>Go back</Link> Home
      </p>
    </>
  );
};

export default NotFound;
