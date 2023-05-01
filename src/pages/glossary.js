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

            <GlossaryTerm
              term="3Ws"
              definition="Prevent your customers from wondering, waiting or worrying, which comes from *Burn Your Portfolio* by Michael Janda."
            />

            <GlossaryTerm
              term="5on2"
              definition="Talk for 5 minutes about any work you have today that will take 2 hours or more. This helps prevent roadblocks and wasted time doing the wrong work."
            />

            <GlossaryTerm
              term="Essential Releases"
              definition="Releasing early with simply-enough so you can get feedback sooner. See also: Feature-Boxing"
            />

            <GlossaryTerm
              term="Feature-Boxing"
              definition="Reduce down to the requirements, only spending a portion of your budget (50% for must-haves) to ensure there are leftover resources for the corrections and nice-to-have features."
            />

            <GlossaryTerm
              term="Reps"
              definition="Like reps in your exercises, the more you do something, the more comfortable you'll be. You're Grandfather's drill press or Grandmother's blender is overwhelming at first but less overwhelming after you've used one a hundred times. Feel uncomfortable? Most likely, you haven't been here or done this thing before. Go get some reps in."
            />

            <GlossaryTerm
              term="Thin Slices"
              definition="Quick release. Working on and sharing the smallest possible piece of work that can be done. This helps prevent roadblocks and wasted time doing the wrong work. See also: 5on2"
            />

            <GlossaryTerm
              term="Work Out Loud"
              definition="Sharing your work often for accountability and feedback. Don't work on an island. Disseminate knowledge. Give a pulse of what you are doing and what is going on. The goal is to prevent clients and the team from the 3Ws. See also: 3Ws"
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default GlossaryPage;
