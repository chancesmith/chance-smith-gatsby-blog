import React from "react";

// components
import Layout from "../components/layout";
import SEO from "../components/seo";
import GlossaryTerm from "../components/GlossaryTerm";

class UsesPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title={"Chance uses"}>
        <SEO
          title="Chance uses"
          keywords={[`Chance uses`]}
        />
        <div>
          <div>
            <h1>Uses</h1>

            <p>coming soon...</p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default UsesPage;
