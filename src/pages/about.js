import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"

const About = () => {
    const data = useStaticQuery(graphql`
        query {
          allMarkdownRemark(filter: {id: {eq: "9e05fbf3-dc74-5d08-89ec-93dd3778a0c8"}}, limit: 1000000000) {
            edges {
              node {
                frontmatter {
                  title
                }
                html
              }
            }
          }
        }
    `);

    const posts = data.allMarkdownRemark.edges;
    return (
        <Layout title="About">
            {React.Children.toArray(
                posts.map(({node}) => {
                    return (
                        <article>
                            <h1> {node.frontmatter.title} </h1>
                            <section dangerouslySetInnerHTML={{ __html: node.html }} />
                        </article>
                    )
                })
            )}
        </Layout>
    )
};

export default About;