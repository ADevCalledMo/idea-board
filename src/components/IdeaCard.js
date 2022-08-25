import React from "react";

const IdeaCard = (props) => {
  const { details } = props;

  return (
    <div className="idea">
      <div className="idea-info">
        <h2>{details.name}</h2>
        <p>{details.description}</p>
      </div>
    </div>
  );
};

export default IdeaCard;
