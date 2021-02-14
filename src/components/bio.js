import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  const sTitle = data.site.siteMetadata.title
  return (
    <div
      style={{
        marginBottom: rhythm(2.5),
      }}
    >
      <i><p style={{fontSize: '12px'}}>
        Find me on Twitter
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          @Brandur
        </a>
      </p></i>
      <i><p style={{fontSize: '12px'}}>
        Did i make any mistake? Please consider 
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
           sending a pull request.
        </a>
      </p></i>
      <div className="post-footer">
      <h1 onClick={() => navigate('/')} className="list-head2" style={{fontSize: '14px', fontWeight: 600, letterSpacing: '-1px', cursor: 'pointer', marginLeft: '10px'}}> {sTitle} </h1>
      <h1 onClick={() => navigate('/about')} className="list-head2" style={{fontSize: '14px', fontWeight: 600, letterSpacing: '-1px', cursor: 'pointer', marginLeft: '10px'}}>About</h1>
      </div>
    </div>
  );
};

export default Bio;
