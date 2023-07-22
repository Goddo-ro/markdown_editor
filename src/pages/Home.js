import React from 'react';
import { useCurDoc } from "../hooks/useCurDoc";

const Home = () => {
  const {title, body} = useCurDoc();

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Home;