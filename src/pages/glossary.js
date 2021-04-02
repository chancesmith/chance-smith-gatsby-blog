import React from "react";

// components
import Layout from "../components/layout";
import SEO from "../components/seo";
import GlossaryTerm from "../components/GlossaryTerm";

class GlossaryPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title={"About Chance"}>
        <SEO
          title="About"
          keywords={[`about chance`, "about chance smith", "chance smith"]}
        />
        <div>
          <div>
            <GlossaryTerm term="thing" definition="this is the definition" />
            <GlossaryTerm term="thing2" definition="this is the definition2" />
          </div>
        </div>
      </Layout>
    );
  }
}

export default GlossaryPage;
