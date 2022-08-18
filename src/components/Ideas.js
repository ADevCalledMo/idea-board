import React from "react";
import { useParams } from "react-router-dom";

const Ideas = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>{params.stage} Ideas Page: </h1>
      <p>Here is where all of your {params.stage} ideas are kept...</p>
    </div>
  );
};

export default Ideas;
