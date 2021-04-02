import React from "react";

// utils
import { rhythm } from "../utils/typography";

const Product = ({
  term,
  definition
}) => {
  return (
    <>
      <h2
        id={term.toLowerCase()}
        style={{
          marginBottom: rhythm(1),
        }}
      >
        {term} <a href={`#${term}`}>#</a>
      </h2>
      <p>
        {definition}
      </p>
    </>
  );
};

export default Product;
