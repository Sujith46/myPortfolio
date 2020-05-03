import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import '../components/scss/technology.scss'
import Creative from './creativeStack'

const Technology = () => {
    return (
        <div className="technology-stack">
            <h3>
                Web Technologies
            </h3>
            <div className="web-technologies">
                <Stack />
            </div>
            <h3>
                Creative Tools
            </h3>
            <div className="web-technologies">
                <Creative />
            </div>
        </div>
    )
}

const Stack = (props, {data}) => {
    return (
        <div class="stack">
            <StaticQuery 
                query={query}
                render={data => (
                data.placeHolderImage.edges.map(edge => 
                    (
                        <div className="stack-item">
                            <Img fluid={edge.node.childImageSharp.fluid}/>
                            <h3 className="stack-name">{edge.node.name}</h3>
                        </div>
                    ))
                   
                )}
            />
        </div>
    )
}

const query = graphql`
{
    placeHolderImage: allFile(filter: {relativeDirectory: {eq: "tech"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  }
  
`

export default Technology