import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Container, Flex, Box, Heading } from "../components/ui"
import * as styles from "../components/shop.css"
import { ProductCard } from "../components/product-card"

export default function Shop(props) {
  const products = props.data.shopPage.allProducts

  return (
    <Layout title="Shop">
      <Box paddingY={3}>
        <Heading as="h1">Shop</Heading>
        <ul className={styles.productList}>
          {products.map((product) => (
            <li className={styles.productListCard} key={product.id}>
              <ProductCard product={product} />
            </li>

          ))}
        </ul>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  {
    shopPage{
    id
    title
    allProducts: products {
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
  }
`
