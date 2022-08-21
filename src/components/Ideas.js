import React, { useState } from "react";
import { Link } from "react-router-dom";
import IdeaCard from "./IdeaCard";

const Ideas = () => {
  const [ideas, setIdeas] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [archived, setArchived] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setIdeas([
      ...ideas,
      {
        id: ideas.length + 1,
        name: name,
        description: description,
        archived: archived,
      },
    ]);

    setName("");
    setDescription("");
  };

  // console.log(ideas[0].name, "<--- ideas");

  return (
    <>
      <div>
        <h1>Ideas Page: </h1>
        <p>Here is where all of your ideas are kept...</p>

        <form onSubmit={handleFormSubmit}>
          <label htmlFor="idea-name">Idea Name: </label>
          <input
            id="idea-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="idea-description">Description: </label>
          <input
            id="idea-description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input type="submit" value="Add Idea" />
        </form>

        <div>
          <ul className="ideas-front">
            {ideas.map(idea => (
              <li key={idea.id}>
                <IdeaCard details={ideas} />
                <button>Delete</button>
                <button>Archive</button>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/">Back Home</Link>
      </div>
    </>
  );
};

export default Ideas;
