import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { graphql } from "gatsby"
import { Box, Container, Flex } from "./ui"
import { PageSectionStyle } from "./page-section.css"

export default function PageSection(props) {
  const width = props.image && props.html ? "half" : "full"

  return (
    <Container width="fullbleed" className={PageSectionStyle}>
      <Flex gap={2} variant="responsive">
        <Box width={width} padding={4} order={props.flip ? 1 : null}>
          <div
            dangerouslySetInnerHTML={{
              __html: props.html,
            }}
          />
        </Box>
        {props.image && (
          <Box width={width} padding={4}>
            <GatsbyImage
              alt={props.image.alt}
              image={getImage(props.image.gatsbyImageData)}
            />
          </Box>
        )}
      </Flex>
    </Container>
  )
}

export const query = graphql`
  fragment PageSectionContent on PageSection {
    id
    html
    flip
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
