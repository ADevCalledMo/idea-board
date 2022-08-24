import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Column from "./Column";
// import IdeaCard from "./IdeaCard";

const Ideas = () => {
  const status = ["Pending", "Working On", "Finished"];

  const [ideas, setIdeas] = useState(() => {
    return JSON.parse(localStorage.getItem("ideas"));
  });
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState(status[0]);
  // const [archived, setArchived] = useState(false);

  useEffect(() => {
    localStorage.setItem("ideas", JSON.stringify(ideas));
  }, [ideas]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setIdeas([
      ...ideas,
      {
        id: ideas.length + 1,
        name: name,
        description: description,
        selected: selected,
      },
    ]);

    setName("");
    setDescription("");
  };

  // console.log(ideas[0].name, "<--- ideas");

  const handleDeleteClick = (id) => {
    setIdeas(ideas.filter((idea) => idea.id !== id));
  };


  return (
    <>
      <div>
        <h1>Ideas Page: </h1>
        <p>Here is where all of your ideas are kept...</p>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="idea-name">Idea Name: </label>
            <input
              id="idea-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="idea-description">Description: </label>
            <input
              id="idea-description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              {status.map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <input type="submit" value="Add Idea" />
        </form>
        <Column ideas={ideas} onDeleteClick={handleDeleteClick} />

        <Link to="/">Back Home</Link>
      </div>
    </>
  );
};

export default Ideas;
