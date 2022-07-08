import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./product-card.css";

export function ProductCard({ product }) {
    const {
        name,
        slug,
        price,
        productType: { name: productType },
        pictures,
    } = product;

    const formattedPrice = price.toFixed(2);

    return (
        <Link className={styles.productCard} to={`/products/${slug}`}>
            <div className={styles.productCardImage}>
                <GatsbyImage className={styles.productGatsbyImage} alt={name} image={pictures[0].gatsbyImageData} />
            </div>
            <div className={styles.productCardDetails}>
                <div className={styles.productType}>{productType}</div>
                <h2 className={styles.productHeading}>{name}</h2>
                <div className={styles.productPrice}>${formattedPrice}</div>
            </div>
        </Link>
    );
}

export const query = graphql`
    fragment ProductCardContent on Product {
        id,
        name,
        slug,
        description,
        price,
        productType {
            name,
            category {
                title,
                subtitle
            }
        }
        pictures {
            id,
            gatsbyImageData,
            url
        }
    }
`;
