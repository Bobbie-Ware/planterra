import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"

export const shopContainer = style({
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
})

export const productList = style({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gridGap: theme.space[3],
    paddingTop: theme.space[4],
    paddingRight: theme.space[1],
});

export const productListCard = style({
    display: "flex",
    justifyContent: "center",
    width: "100%",
});