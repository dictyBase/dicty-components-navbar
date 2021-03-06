// @flow
import React from "react"
import { styled, withTheme } from "@material-ui/styles"

const ListItem = styled("li")({
  display: "flex",
  "@media (max-width: 768px)": {
    width: "100%",
  },
})
// eslint-disable-next-line
const Anchor = styled(({ theme, ...other }) => <a {...other} />)({
  display: "block",
  color: (props: any) => (props.theme.text ? props.theme.text : "white"),
  textDecoration: "none",
  margin: "auto",
  padding: "10px",
  height: "100%",
  "@media (max-width: 768px)": {
    width: "100%",
  },
})

type Props = {
  /** Link title */
  title: String,
  /** Link URL */
  href: String,
  /** Material-UI theme */
  theme: Object,
}

/**
 * Link is used for menu items without dropdowns.
 */

const Link = (props: Props) => {
  const { title, href, theme } = props

  return (
    <ListItem>
      <Anchor href={href} alt={title} theme={theme}>
        {title}
      </Anchor>
    </ListItem>
  )
}

export default withTheme(Link)
