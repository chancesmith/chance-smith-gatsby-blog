import React from "react";
import { Link, graphql } from "gatsby";

// components
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

class Homepage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div>
          <h1
            style={{
              marginTop: "0",
            }}
          >
            Take ownership.
            <br />
            <span style={{ fontSize: ".7em", color: "#777" }}>
              Express what you want.
              <br />
              Get what you want.
            </span>
          </h1>

          <h2
            style={{
              marginBottom: "-28px",
            }}
          >
            Store
          </h2>

          <div
            style={
              {
                // marginBottom: rhythm(1),
              }
            }
          >
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link
                style={{ boxShadow: `none` }}
                to="https://www.buymeacoffee.com/l/internhireme?rel=chancesmith.io"
              >
                Hire Me Kit 📒
              </Link>
            </h3>
            <small>
              $40 - A proven template to catch the attention of your ideal boss.
            </small>
          </div>

          {/* <div style={{ display: "flex", marginBottom: rhythm(1) }}> */}
          {/* <div
              style={{
                border: "1px solid #eee",
                padding: rhythm(1 / 3),
                marginRight: rhythm(1),
                width: "45%",
              }}
            >
              <h3
                style={{
                  marginTop: "0",
                }}
              >
                [Kit] I'm an Intern. Hire Me.
              </h3>
              <a href="https://www.buymeacoffee.com/l/internhireme">Buy Now</a>
            </div> */}
          {/* <div
              style={{
                border: "1px solid #eee",
                padding: rhythm(1 / 3),
                marginRight: rhythm(1),
                width: "30%",
              }}
            >
              <h3
                style={{
                  marginTop: "0",
                }}
              >
                Impress
              </h3>
              <p>Book</p>
              Coming This 2020 Fall
            </div> */}
          {/* </div> */}

          <hr />

          <h2
            style={{
              marginBottom: "-28px",
            }}
          >
            Latest Post
          </h2>
          {[posts[0]].map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <div
                key={node.fields.slug}
                style={{
                  marginBottom: rhythm(1),
                }}
              >
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
              </div>
            );
          })}
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
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
