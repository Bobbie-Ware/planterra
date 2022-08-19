import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Container, Flex, Box, Heading } from "../components/ui"
import * as styles from "../components/shop.css"
import { ProductCard } from "../components/product-card"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Gallery(props) {
    const pictures = props.data.galleryPage.pictures

    return (
        <Layout title="Interior Nature - Gallery">
            <Box paddingY={3}>
                <ul className={styles.productList}>
                    {pictures.map((picture) => (
                        <li className={styles.productListCard} key={picture.id}>
                            <GatsbyImage alt={picture.id} image={picture.gatsbyImageData} />
                        </li>
                    ))}
                </ul>
            </Box>
        </Layout>
    )
}

export const query = graphql`
{
    galleryPage {
        id 
        title
        pictures: pictures {
            id
            gatsbyImageData
        }
    }
  }
`
