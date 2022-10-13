import { style } from "@vanilla-extract/css"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { LogoStyle } from "./brand-logo.css"

export default function GatsbyContentfulLogo() {
  return (
    <StaticImage
      className={LogoStyle}
      src="../../static/images/logo.jpg"
      alt="Logo"
    />
  )
}
