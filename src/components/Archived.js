import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import IdeaCard from "./IdeaCard";

const Archived = (props) => {
  // const location = useLocation();
  // const archivedIdeas = location.state.ideas; // array

  // console.log(location.state.ideas, "<--- archived props");

  return (
    <>
      <div>
        <h1>Archived Ideas: </h1>
        <ul className="ideas-front">
          <li>Archived Idea #1</li>
          <li>Archived Idea #2</li>
          <li>Archived Idea #3</li>
          <li>Archived Idea #4</li>
        </ul>

        <Link to="/">Back Home</Link>
      </div>
    </>
  );
};

export default Archived;
