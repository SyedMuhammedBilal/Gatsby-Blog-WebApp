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
  // }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1 className="list-head">Fragments</h1>
      <br />
      <div className="fragments fragments-separator" />
      <br />
      <p style={{fontSize: '12px', fontWeight: '100'}}>Stream of consciousness notes that don't merit a more dedicated write-up</p>
      {/* <a style={{fontSize: '12px', fontWeight: 100}}>Atom Feed.</a> */}
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
      })};

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
