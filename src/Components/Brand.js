// @flow
import React from "react"
import { withStyles } from "@material-ui/styles"

const styles = theme => ({
  container: {
    listStyleType: "none",
    display: "flex",
    padding: "10px",
    [theme.breakpoints.down("md")]: {
      height: "30px",
    },
    // @media (maxWidth: 768px) {
    //   height: 30px,
    // }
  },
  link: {
    display: "block",
    margin: "auto",
    textDecoration: "none",
    color: props => (props.theme.text ? props.theme.text : "white"),
    fontSize: "1.5em",

    [theme.breakpoints.down("md")]: {
      top: 0,
      zIndex: 10,
    },
    // @media (max-width: 768px) {
    //   top: 0,
    //   z-index: 10,
    // }
  },
})

type Props = {
  /** Title of link */
  title: String,
  /** Link URL */
  href: String,
  /** Material-UI styling */
  classes: Object,
}

const Brand = (props: Props) => {
  const { title, href, classes } = props

  return (
    <div className={classes.container}>
      <a className={classes.link} href={href}>
        {title}
      </a>
    </div>
  )
}

export default withStyles(styles)(Brand)
