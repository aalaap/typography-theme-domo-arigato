// @flow
import type { OptionsType } from "Types"
import gray from "gray-percentage"

const theme: OptionsType = {
  title: "Domo Arigato",
  baseFontSize: "20px",
  baseLineHeight: 1.53,
  scale: 2.35,
  googleFonts: [
    {
      name: "Roboto",
      styles: ["900"],
    },
    {
      name: "Roboto",
      styles: ["400", "400i", "700"],
    },
  ],
  headerFontFamily: ["Roboto", "sans-serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
  bodyColor: "hsla(0,0%,0%,0.8)",
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: scale(5 / 5),
    h2: scale(3 / 5),
    h3: scale(1 / 5),
    h4: scale(0 / 5),
    h5: scale(-1 / 8),
    h6: {
      ...scale(-2 / 8),
      fontFamily: options.bodyFontFamily.join(","),
      fontWeight: options.bodyWeight,
      textTransform: "uppercase",
    },
    a: {
      color: "#6200EE",
    },
    "a:visited": {
      color: "#3700B3",
    },
    blockquote: {
      ...scale(1 / 4),
      borderLeft: `${rhythm(1 / 6)} solid`,
      borderColor: gray(93),
      paddingTop: rhythm(1 / 3),
      paddingBottom: rhythm(1 / 3),
      paddingLeft: rhythm(2 / 3),
      paddingRight: rhythm(2 / 3),
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: gray(54, 204),
      fontWeight: options.bodyWeight,
      fontStyle: "normal",
    },
  }),
}

export default theme
