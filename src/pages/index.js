import React from "react";
import { Link, graphql } from "gatsby";

// components
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import Product from "../components/Product";

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
                  {/* <small>{node.frontmatter.date}</small> */}
                  {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
                </div>
              );
            })}
          </div>

          {/* <div>
            <h2
              style={{
                marginBottom: "-28px",
              }}
            >
              Resources
            </h2>

            <Product
              title={`Think Like A Partner`}
              link="#"
              subTitle="Big wins when you think like you own it."
            />
          </div> */}

          <div>
            <h2
              style={{
                marginBottom: "-28px",
              }}
            >
              Store
            </h2>

            <Product
              title={`"Hire Me" Kit 📒`}
              price={20}
              link="https://www.buymeacoffee.com/l/internhireme?rel=chancesmith.io"
              subTitle="A proven template to catch the their attention."
            />
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
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
