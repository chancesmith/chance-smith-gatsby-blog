import React from "react";
import styled from "styled-components";

// components
import Product from "./Product";

// #region Styled Components
const Styles = styled.div`
  display: flex;
  padding: 2.5em 0;
  justify-content: space-evenly;
  /* align-items: center; */
  flex-wrap: nowrap;
`;
// #endregion

const FooterAd = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Resources to change your career</h2>
      <Styles>
        <Product
          isAdBlock
          title={`Hire-Me Kit 📒`}
          price={20}
          link="https://www.buymeacoffee.com/l/internhireme?rel=chancesmith.io"
          subTitle="A proven template to catch the their attention and get hired."
        />
        {/* <Product
          isAdBlock
          title={`Think Like A Partner`}
          link="https://www.buymeacoffee.com/l/internhireme?rel=chancesmith.io"
          subTitle="A proven template to catch the their attention and get hired."
        /> */}
      </Styles>
    </div>
  );
};

export default FooterAd;
