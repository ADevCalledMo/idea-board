import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const Ideas = () => {
  const params = useParams();
  const [ideas, setIdeas] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setIdeas([
      ...ideas,
      {
        id: ideas.length + 1,
        name: name,
        description: description,
      },
    ]);

    setName("");
    setDescription("");
  };

  return (
    <div>
      <h1>{params.stage} Ideas Page: </h1>
      <p>Here is where all of your {params.stage} ideas are kept...</p>

      <Link to="/">Back Home</Link>

      {params.stage === "Ongoing" && (
        <>
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
            <ul>
              {ideas.map((idea) => (
                <li>
                  `${idea.name}: ${idea.description}`<button>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Ideas;
