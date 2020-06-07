import React from "react";
import { Link, graphql } from "gatsby";

// components
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";

class Homepage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Take Ownership" keywords={[`chance smith`]} />
        <div>
          <div>
            <h1
              style={{
                marginTop: "0",
                fontSize: "3.60675rem",
              }}
            >
              Take ownership.
              <br />
              <span style={{ fontSize: ".7em", color: "#777" }}>
                Express what you want.
                <br />
                Go after it.
              </span>
            </h1>

            {[posts[0]].map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <div
                  key={node.fields.slug}
                  style={{
                    marginBottom: rhythm(1),
                  }}
                >
                  <h2
                    style={
                      {
                        // marginBottom: rhythm(1 / 4),
                      }
                    }
                  >
                    <Link
                      style={{ boxShadow: `none`, textDecoration: "none" }}
                      to={node.fields.slug}
                      title={title}
                    >
                      {title}
                    </Link>
                  </h2>
                  <p
                    style={{
                      ...scale(-1 / 5),
                      display: `block`,
                      marginBottom: rhythm(1),
                      marginTop: rhythm(-1),
                    }}
                  >
                    {/* {post.frontmatter.date} */}
                    By{" "}
                    <a href="/about" style={{ textDecoration: "none" }}>
                      Chance Smith
                    </a>
                  </p>
                  <div dangerouslySetInnerHTML={{ __html: node.html }} />

                  {/* <small>{node.frontmatter.date}</small> */}
                  {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
                </div>
              );
            })}

            <div style={{ textAlign: "center" }}>
              <Link to={"/archive"} style={{ textDecoration: "none" }}>
                See All Posts
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
