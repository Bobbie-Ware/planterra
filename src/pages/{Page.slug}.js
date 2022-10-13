import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"
import PageSection from "../components/page-section"

export default function Page(props) {
  const { page } = props.data

  return (
    <Layout {...page}>
      <Box paddingY={2}>
        <Container width="narrow">
          <Heading as="h1">{page.title}</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: page.html,
            }}
          />
          {page.pageSections &&
            page.pageSections.map((section) => (
              <PageSection key={section.id} {...section} />
            ))}
        </Container>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      html
      pageSections {
        id
        html
        flip
        image {
          id
          gatsbyImageData
          alt
        }
      }
    }
  }
`
