// Gatsby supports TypeScript natively!
import React from "react";
import { PageProps, Link, graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import '../components/global.css'

type PageContext = {
  currentPage: number
  numPages: number
}
type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
          Head: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({
  data,
  location,
  pageContext,
}: PageProps<Data>) => {
  const siteTitle = data.allMarkdownRemark.edges.node
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1 className="list-head">Fragments</h1>
      <br />
      <div className="fragments fragments-separator" />
      <br />
      <p style={{fontSize: '12px', fontWeight: '100'}}>Stream of consciousness notes that don't merit a more dedicated write-up</p>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <React.Fragment>
            <h4 id={node.frontmatter.Head} style={{fontFamily: 'sans-serif',marginBottom: '60px', letterSpacing: '0px'}}> {node.frontmatter.Head ? node.frontmatter.Head : ''} </h4>
          <article id={node.fields.slug} key={node.fields.slug}>

              <div
                style={{
                  marginTop: '-50px',

                }}
              >
                <Link className="blog-links" style={{ boxShadow: `none`, fontWeight: 300, }} to={node.fields.slug}>
                  {title}
                </Link>
                <small className="date-blogs" style={{color: '#b9b7b7', fontFamily: 'sans-serif', fontWeight: 400, textDecoration: 'none'}}><i>{node.frontmatter.date}</i></small>
              </div>
            </article>
          </React.Fragment>
        )
      })}

<div className="post-footer">
      <h1 onClick={() => navigate('/')} className="list-head2" style={{fontSize: '14px', fontWeight: 600, letterSpacing: '-1px', cursor: 'pointer', marginLeft: '10px'}}>Fragments</h1>
      <h1 onClick={() => navigate('/about')} className="list-head2" style={{fontSize: '14px', fontWeight: 600, letterSpacing: '-1px', cursor: 'pointer', marginLeft: '10px'}}>About</h1>
      </div>
    </Layout>
  )
};

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            Head
          }
        }
      }
    }
  }
`;
