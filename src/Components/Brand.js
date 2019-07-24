// @flow
import React from "react"
import { styled, withTheme } from "@material-ui/styles"

const Container = styled("div")({
  listStyleType: "none",
  display: "flex",
  padding: "10px",
  "@media (maxWidth: 768px)": {
    height: "30px",
  },
})
const Link = styled(({ theme, ...other }) => <a {...other} />)({
  display: "block",
  margin: "auto",
  textDecoration: "none",
  color: props => (props.theme.text ? props.theme.text : "white"),
  fontSize: "1.5em",

  "@media (max-width: 768px)": {
    top: 0,
    zIndex: 10,
  },
})

type Props = {
  /** Title of link */
  title: String,
  /** Link URL */
  href: String,
  /** Material-UI theme */
  theme: Object,
}

const Brand = (props: Props) => {
  const { title, href, theme } = props

  return (
    <Container>
      <Link theme={theme} href={href}>
        {title}
      </Link>
    </Container>
  )
}

export default withTheme(Brand)
