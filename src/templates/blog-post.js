import React from "react"
import { Link, graphql, navigate } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gist from 'react-gist'
import Markdown from 'markdown-to-jsx'
import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const sTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title="Home">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <h1 onClick={() => navigate('/')} className="list-head" style={{fontSize: '14px', fontWeight: 600, letterSpacing: '-1px', cursor: 'pointer'}}> {sTitle} </h1>
      <article>
        <header>
          <h1
            style={{
              marginBottom: 0,
              fontWeight: 600,
              letterSpacing: '-2px',
              fontSize: '3rem'     
            }}
          >
            {post.frontmatter.title}
          </h1>
          <br />
            <div className="fragments fragments-separator" />
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {/* {post.frontmatter.date} */}
          </p>
        </header>
        <section style={{fontSize: '14px', fontWeight: 100, letterSpacing: '0.5px', wordSpacing: '2px'}} dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <h1 className="list-head" style={{fontSize: '14px', fontWeight: 600, letterSpacing: '-1px'}}> {sTitle} </h1>
          <p style={{fontSize: '12px', marginTop: '-15px'}}><i> {post.frontmatter.title} </i></p>
          <h1 className="list-head" style={{fontSize: '14px', fontWeight: 600, letterSpacing: '-1px'}}>Published</h1>
          <p style={{fontSize: '12px',  marginTop: '-15px'}}><i> {post.frontmatter.date} </i></p>
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
