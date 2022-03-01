import React from "react";
// import Image from "gatsby-image";
// import styled from "styled-components";
import { StaticImage } from "gatsby";

// components
import Layout from "../components/layout";
import Seo from "../components/seo";

// const CoverWrapStyles = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 2em 0 2em 0;

//   .bookCover {
//     box-shadow: 5px 5px 20px #444;
//   }
// `;

const ProjectType = {
  WEBSITE: "website",
  WEB_APP: "web-app",
  MOBILE_APP: "mobile-app",
};

const projects = [
  // {
  //   title: "Sevco",
  //   description:
  //     "Building a JavaScript web app for visualizing device inventory on a network.",
  //   link: "https://sevcosecurity.com/",
  //   role: "developer",
  //   date: "2020",
  //   type: ProjectType.WEB_APP,
  //   outcome: "",
  //   image: "./projects/sevco.png",
  // },
  // {
  //   title: "FunFact",
  //   description:
  //     "Building an iOS game as an ice breaker for small groups to get to know each other.",
  //   link: "https://sevcosecurity.com/",
  //   role: "developer",
  //   date: "2019",
  //   type: ProjectType.WEB_APP,
  //   outcome: "",
  //   image: "./projects/sevco.png",
  // },
  {
    title: "The Vertex Project",
    description:
      "Building a JavaScript web app for data analtyist to visualize data they query from a forcegraph.",
    link: "https://vertex.link/",
    role: "developer",
    date: "2019",
    type: ProjectType.WEB_APP,
    outcome: "",
    image: "projects/vertex-workstation-forcegraph.webp",
  },
  {
    title: "Kontakt Mission USA",
    description:
      "A Wordpress theme from scratch + customizations for an non-profit organization to help Germany.",
    link: "https://www.gokmusa.org/",
    role: "developer",
    date: "2016",
    type: ProjectType.WEBSITE,
    outcome: "",
  },
];

const ProjectsPage = (props) => {
  return (
    <Layout location={props.location}>
      <Seo
        title="Projects"
        description="Record of projects I've worked on"
        keywords={[]}
      />
      <section>
        <h1>Past Work</h1>
        <p>
          On-site or remote, these are projects and the role I played. Please
          email me at{" "}
          <a href="mailto:chance@sodiumhalogen.com">chance@sodiumhalogen.com</a>{" "}
          for us to collaborate on your poject.
        </p>
        {projects.map((project) => (
          <div key={project.title} style={{ display: "flex" }}>
            <div>
              {project.link ? (
                <a href={project.link}>
                  <h3 style={{ margin: 0 }}>{project.title}</h3>
                </a>
              ) : (
                <h3 style={{ margin: 0 }}>{project.title}</h3>
              )}
              <p style={{ margin: 0, color: "#878787" }}>
                {project.date} | {project.type} | {project.role}
              </p>
              {project.description ? <p>{project.description}</p> : null}
              {project.outcome ? (
                <p>Business Outcome: {project.outcome}</p>
              ) : null}
            </div>
            {/* <StaticImage
              src={project.image}
              alt={project.title + " example screenshot"}
              placeholder="blurred"
              layout="fixed"
              width={200}
              height={200}
            /> */}
            {/* {project.image ? (
            ) : null} */}
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default ProjectsPage;