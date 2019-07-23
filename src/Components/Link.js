// @flow
import React from "react"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  listItem: {
    display: "flex",

    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
  anchor: {
    display: "block",
    color: "white",
    // color: props => (props.theme.text ? props.theme.text : "white"),
    textDecoration: "none",
    margin: "auto",
    padding: "10px",
    height: "100%",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
})

type Props = {
  title: String,
  href: String,
}

const Link = (props: Props) => {
  const { title, href } = props
  const classes = useStyles()

  return (
    <li className={classes.link}>
      <a href={href} alt={title} className={classes.anchor}>
        {title}
      </a>
    </li>
  )
}

export default Link
