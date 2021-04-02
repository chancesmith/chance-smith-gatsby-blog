import React from "react";

// utils
import { rhythm } from "../utils/typography";

const Product = ({
  term,
  definition
}) => {

  const cleanTerm = term.trim().toLowerCase().replace(/(\s+)/g, "-")
  return (
    <>
      <h2
        id={cleanTerm}
        style={{
          marginBottom: rhythm(1),
        }}
      >
        {term} <a href={`#${cleanTerm}`}>#</a>
      </h2>
      <p>
        {definition}
      </p>
    </>
  );
};

export default Product;
