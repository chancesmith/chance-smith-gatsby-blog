import React from "react";

// components
import Layout from "../components/layout";
import SEO from "../components/seo";
import GlossaryTerm from "../components/GlossaryTerm";

class GlossaryPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title={"Glossary | Chance Smith"}>
        <SEO
          title="Glossary | Chance Smith"
          keywords={[`glossary chance`, "glossary chance smith"]}
        />
        <div>
          <div>
            <h1>Glossary</h1>

            <GlossaryTerm term="Work Out Load" definition="Sharing your work often for the accountability and feedback. Don't work on an island." />
            <GlossaryTerm term="Essential Releases" definition="Releasing early with simply-enough so you can get feedback sooner." />
          </div>
        </div>
      </Layout>
    );
  }
}

export default GlossaryPage;
