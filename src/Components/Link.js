// @flow
import React from "react"
import { makeStyles, useTheme } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  listItem: {
    display: "flex",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
  anchor: {
    display: "block",
    color: theme => (theme.text ? theme.text : "white"),
    textDecoration: "none",
    margin: "auto",
    padding: "10px",
    height: "100%",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
}))

type Props = {
  /** Link title */
  title: String,
  /** Link URL */
  href: String,
}

const Link = (props: Props) => {
  const { title, href } = props

  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <li className={classes.link}>
      <a href={href} alt={title} className={classes.anchor}>
        {title}
      </a>
    </li>
  )
}

export default Link
