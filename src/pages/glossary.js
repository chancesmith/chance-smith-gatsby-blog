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

            <GlossaryTerm term="3Ws" definition="Prevent your customers from wondering, waiting or worrying, which comes from *Burn Your Portfolio* by Michael Janda." />
            <GlossaryTerm term="Essential Releases" definition="Releasing early with simply-enough so you can get feedback sooner." />
            <GlossaryTerm term="Work Out Load" definition="Sharing your work often for the accountability and feedback. Don't work on an island. Disseminating knowledge. Giving a pulse of what you are doing and what is going on. The goal is to prevent clients and the team from the 3Ws. See also: 3Ws" />
          </div>
        </div>
      </Layout>
    );
  }
}

export default GlossaryPage;
