import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"

export const heading = style({
  fontFamily: theme.fonts.mono,
  fontStyle: "normal",
  letterSpacing: "-0.02em",
})
