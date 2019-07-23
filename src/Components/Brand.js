// @flow
import React from "react"
import { makeStyles, useTheme } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  container: {
    listStyleType: "none",
    display: "flex",
    padding: "10px",
    [theme.breakpoints.down("md")]: {
      height: "30px",
    },
  },
  link: {
    display: "block",
    margin: "auto",
    textDecoration: "none",
    color: theme => (theme.text ? theme.text : "white"),
    fontSize: "1.5em",

    [theme.breakpoints.down("md")]: {
      top: 0,
      zIndex: 10,
    },
  },
}))

type Props = {
  /** Title of link */
  title: String,
  /** Link URL */
  href: String,
  /** Material-UI styling */
  classes: Object,
}

const Brand = (props: Props) => {
  const { title, href } = props

  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <div className={classes.container}>
      <a className={classes.link} href={href}>
        {title}
      </a>
    </div>
  )
}

export default Brand
