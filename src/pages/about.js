import React from "react";

// components
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import Product from "../components/Product";

class AboutPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title={"About Chance"}>
        <SEO
          title="About"
          keywords={[`about chance`, "about chance smith", "chance smith"]}
        />
        <div>
          <p>
            Chance is growing teams and building software at{" "}
            <a href="https://sodiumhalogen.com?ref=chancesmithio">
              Sodium Halogen
            </a>
          </p>
          {/* <p>
            <strong>At home</strong> he helps his wife (Molly) with there three
            boys (under 6). They enjoy dinner together, books, driveway bike
            rides 😆, hammocks, swimming, night walks, and movie nights.
          </p> */}
          {/* <p>
            <strong>Small Businesses</strong> hire him when they are looking to
            build a scalable app that solves a problem for their team and/or
            customer.
          </p> */}
          <p>
            <strong>Chance has worked with</strong> prostigious and innovative
            companies like: Chick-fil-a, Vanderbuilt University, and Popvox.
            He's also a 4x 🥇🥇🥇🥇 1st place hackathon winner.
          </p>

          <div>
            <h2
              style={{
                marginBottom: rhythm(1),
              }}
            >
              Resources/Tools
            </h2>

            <Product
              title={`Hire-Me Kit 📒`}
              link="/hire-me-kit"
              subTitle="A proven template to catch the their attention and get hired."
            />
            <Product
              title={`Level-Up Mastermind 💪`}
              link="/level-up-mastermind"
              subTitle={`Join our monthly mastermind. A 1-hour live call connect and help you take actionable steps to ownership.`}
            />
            <Product
              title={`Innovation Experiments 🧪`}
              link="https://mailchi.mp/afcfe7027d87/innovationexperiments?ref=chancesmithio"
              subTitle="Practical innovation tips for business owners and people who think like owners."
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
