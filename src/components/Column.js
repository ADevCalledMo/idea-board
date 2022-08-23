import React from "react";
import IdeaCard from "./IdeaCard";

const Column = (props) => {
  const { ideas, onDeleteClick } = props;

  return (
    <div>
      <ul className="ideas-front">
        {ideas.map((idea) => (
          <li key={idea.id}>
            <IdeaCard details={idea} />
            <button onClick={() => onDeleteClick(idea.id)}>Delete</button>
            <button>Archive</button>
            {/* <Link to="/ideas/Archived" state={{ ideas }}>
            
          </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Column;
