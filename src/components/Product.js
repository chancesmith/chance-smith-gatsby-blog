import React from "react";
import { Link } from "gatsby";

// utils
import { rhythm } from "../utils/typography";

// components
import Price from "./Price";

const Product = ({ title, price, orgPrice, subTitle, link }) => {
  return (
    <div
      style={{
        marginBottom: rhythm(1),
      }}
    >
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
          display: "inline-block",
        }}
      >
        <Link style={{ boxShadow: `none` }} to={link}>
          {title}
          {!!price && <Price price={price} orgPrice={orgPrice} />}
        </Link>
      </h3>
      {` — `}
      <small>{subTitle}</small>
    </div>
  );
};

export default Product;
