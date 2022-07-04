import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Flex, Box, Heading } from "../components/ui"
import * as styles from "../components/store.css"

export default function Store(props) {
  const { storePage } = props.data

  return <Layout {...storePage}>
    <Box paddingY={3}>
      <Container>
        <Flex variant="column">
          <Heading variant="large" className={styles.heading}>
            Store is coming soon..
          </Heading>
        </Flex>
      </Container>
    </Box>
  </Layout>
}

export const query = graphql`
  {
    storePage {
      id
      title
      description
      products: products {
        name
        description
        price
        pictures {
          id
          url
        }
      }
    }
  }
`
