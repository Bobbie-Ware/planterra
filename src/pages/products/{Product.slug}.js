import * as React from "react"
import { graphql } from "gatsby"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import { Container, Box, Heading, Button } from "../../components/ui"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../../components/product-page.css"
import "react-image-gallery/styles/css/image-gallery.css"

export default function Page(props) {
  const { product } = props.data
  const pictures = product.pictures.map((picture) => ({
    original: picture.url,
    originalClass: styles.productImage,
    thumbnail: picture.url,
  }))

  const handleClick = () => {
    window.dataLayer.push({
      event: "product-button-click",
    })

    window.open(product.buyLink, "_blank")
  }

  return (
    <Layout {...product} title={"Interior Nature - " + product.name}>
      <Box paddingY={4} center={true}>
        <Box className={styles.productBox}>
          <div className={styles.productGalleryContainer}>
            <ImageGallery
              items={pictures}
              showFullscreenButton={false}
              showPlayButton={false}
              showNav={true}
            />
          </div>
          <div className={styles.productDetailContainer}>
            <Heading as="h1" className={styles.productHeading}>
              {product.name}
            </Heading>
            <div
              className={styles.productDescription}
              dangerouslySetInnerHTML={{
                __html: product.html,
              }}
            />
            <Heading as="h2" className={styles.productPrice}>
              ${product.price.toFixed(2)}
            </Heading>
            {product.inStock && (
              <Button className={styles.productButton} onClick={handleClick}>
                Purchase on MarketPlace
              </Button>
            )}
          </div>
        </Box>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query ProductContent($id: String!) {
    product(id: { eq: $id }) {
      id
      name
      html
      price
      slug
      inStock
      buyLink
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
