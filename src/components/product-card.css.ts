import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"

export const productCard = style({
    maxWidth: "400px",
    maxHeight: "400px",
    cursor: "pointer",
    textDecoration: "none",
    paddingBottom: theme.space[2],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});

export const productCardImage = style({
    marginBottom: theme.space[2],
    maxWidth : "200px",
    maxHeight: "200px",
});

export const productGatsbyImage = style({
    maxWidth : "200px",
    maxHeight: "200px",
    borderRadius: "8px",
});

export const productCardDetails = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: theme.fontWeights.semibold,
});

export const productType = style({
    fontSize: theme.fontSizes[1],
    color: theme.colors.primary,
});

export const productHeading = style({
    width: "100%",
    fontSize: theme.fontSizes[3],
    color: theme.colors.black,
    textAlign: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: theme.lineHeights.text,
    margin: "2px 0",
});

export const productPrice = style({
    color: theme.colors.primary,
});