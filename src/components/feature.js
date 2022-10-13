import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  Flex,
  Box,
  Subhead,
  Kicker,
  Text,
  ButtonList,
} from "./ui"

export default function Feature(props) {
  return (
    <Section padding={4} background="muted">
      <Container>
        <Box>
          <Flex variant="end">
            <Subhead>{props.heading}</Subhead>
            <Text>{props.subheading}</Text>
          </Flex>
        </Box>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageFeatureContent on HomepageFeature {
    id
    kicker
    heading
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
