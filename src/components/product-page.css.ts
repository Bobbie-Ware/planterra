import { globalStyle, style } from "@vanilla-extract/css"
import { theme } from "../theme.css"

export const productBox = style({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    maxWidth: "1300px",
    width: "100%",
});

export const productGalleryContainer = style({
    marginTop: "5%",    
});

export const productDetailContainer = style({
    marginTop: "5%",
});

export const productBreadcrumb = style({
    display: "flex",
    alignContent: "center",
    flexWrap: "wrap",
    color: '#363636',
    fontSize: theme.fontSizes[2],
});

export const productHeading = style({
    fontSize: theme.fontSizes[5],
    fontWeight: theme.fontWeights[3],
    marginBottom: theme.space[5],
    lineHeight: theme.lineHeights[3],
});

export const productDescription = style({
    fontSize: theme.fontSizes[2],
});

export const productPrice = style({
    fontSize: theme.fontSizes[2],
    fontWeight: theme.fontWeights[3],
    lineHeight: theme.lineHeights[3],      
    color: theme.colors.primary,
});

export const productButton = style({
    fontSize: theme.fontSizes[2],
    fontWeight: theme.fontWeights[3],
    lineHeight: theme.lineHeights[3],
    color: theme.colors.primary,
    backgroundColor: 'white',
    border: `1px solid ${theme.colors.primary}`,
    borderRadius: '8px',
    padding: `${theme.space[3]} ${theme.space[4]}`,
    marginTop: theme.space[5],
    transition: 'all 0.2s ease-in-out',
    ":hover": {
        backgroundColor: theme.colors.primary,
        color: theme.colors.background,
    },
});

export const productImage = style({
    
});


globalStyle(`${productImage} > img`, {
    maxHeight: 'calc(50vh - 80px) !important',
    borderRadius: '5px',
});


