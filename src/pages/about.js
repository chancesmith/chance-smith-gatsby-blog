import React from "react";
import { Link } from "gatsby";

// components
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

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
            <a href="https://sodiumhalogen.com?ref=chancesmith.io">
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
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
