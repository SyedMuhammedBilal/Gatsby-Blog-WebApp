// Gatsby supports TypeScript natively!
import React from "react";
import { PageProps, Link, graphql } from "gatsby"
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
};


const BlogIndex = ({
  data,
  location,
  pageContext,
}: PageProps<Data>) => {
  const siteTitle = data.allMarkdownRemark.edges.node;
  // console.log(siteTitle)
  const posts = data.allMarkdownRemark.edges
  // const { currentPage, numPages } = pageContext

  // const isFirst = currentPage === 1
  // const isLast = currentPage === numPages
  // const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  // const nextPage = `/${currentPage + 1}`;

  // const specificSection = React.useRef<any>(null);

  // var elem =  specificSection.current.offsetTop

  // const gotoSection = () => {
  //   window.scrollTo({
  //     top: elem,
  //     behavior: 'smooth'
  //   })
  // };

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1 className="list-head">Fragments</h1>
      <div className="fragments fragments-separator" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <React.Fragment>
            <h2 id={node.frontmatter.Head} style={{fontFamily: 'sans-serif'}}> {node.frontmatter.Head ? node.frontmatter.Head : ''} </h2>
          <article id={node.fields.slug} key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none`, fontWeight: 500, textDecoration: 'underline' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small className="blog-date"><i>{node.frontmatter.date}</i></small>
            </header>
            {/* <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section> */}
            </article>
          </React.Fragment>
        )
      })}

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          {/* <li>
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Previous Page
              </Link>
            )}
          </li>
          <li>
            {!isLast && (
              <Link to={nextPage} rel="next">
                Next Page →
              </Link>
            )}
          </li> */}
        </ul>
      </nav>
    </Layout>
  )
}

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
