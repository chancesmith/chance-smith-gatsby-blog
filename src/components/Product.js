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
      <p
        style={{
          marginTop: rhythm(1 / 4),
          marginBottom: rhythm(1 / 4),
          display: "inline-block",
        }}
      >
        <Link style={{ boxShadow: `none` }} to={link}>
          {title}
        </Link>
        {!!price && <Price price={price} orgPrice={orgPrice} />}
      </p>
      {` — `}
      <small>{subTitle}</small>
    </div>
  );
};

export default Product;
