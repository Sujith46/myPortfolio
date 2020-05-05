import React from "react"

import Layout from "../components/layout"
import Container from "../containers/container"
import "../components/scss/articles.scss"
import { graphql } from "gatsby"

const Articles = ({data}) => {
  return (
    <Layout>
      <Container>
        <div className="articles-wrapper">
          <h1>Articles</h1>
          <p>Here are my popular articles from various websites.</p>
        </div>
      </Container>
      <Container>
        <div className="medium">
          <h2>Medium.com</h2>
          {data.allMediumPost.edges.map((el) => (
            <div class="medium-post">
              <h3>{el.node.title}</h3>
              <img src={el.node.virtuals.previewImage.imageId}></img>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export default Articles

export const query = graphql`
  {
    allMediumPost {
      edges {
        node {
          title
          seoTitle
          slug
          virtuals {
            totalClapCount
            previewImage {
              imageId
            }
          }
        }
      }
    }
  }
`
