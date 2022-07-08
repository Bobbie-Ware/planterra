import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { Container, Box, Heading } from "../../components/ui"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Page(props) {
  const { product } = props.data

  return (
    <Layout {...product}>
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{product.name}</Heading>
          <GatsbyImage alt={product.id} image={product.pictures[0].gatsbyImageData} />
        </Container>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query ProductContent($id: String!) {
    product(id: { eq: $id }) {
        id
        name
        description
        price
        slug
        productType {
          name
          category {
            title
            subtitle
          }
        }
        pictures {
          id
          gatsbyImageData
          url
        }
    }
  }
`
