// @flow
import React from "react"
import { makeStyles, useTheme } from "@material-ui/styles"

const useStyles = makeStyles((theme, open) => ({
  toggle: {
    display: "none",
    position: "relative",
    padding: "5px",
    margin: "5px 0px",
    flexDirection: "column",
    justifyContent: "center",
    top: 0,
    height: "30px",
    width: "30px",
    cursor: "pointer",
    zIndex: 10,

    "@media (max-width: 768px)": {
      display: "flex",
    },
  },
  iconBarTop: {
    height: "5px",
    background: theme => (theme.text ? theme.text : "white"),
    margin: "3px 0px",
    transition: "all 0.2s ease",
    transform: open =>
      open
        ? "rotate(-45deg) translate(-25%, 7px)"
        : "rotate(0deg) translate(0px, 0px)",
  },
  iconBarMiddle: {
    height: "5px",
    background: theme => (theme.text ? theme.text : "white"),
    margin: "3px 0px",
    transition: "all 0.1s ease",
    width: open => (open ? "0%" : "100%"),
  },
  iconBarBottom: {
    height: "5px",
    background: theme => (theme.text ? theme.text : "white"),
    margin: "3px 0px",
    transition: "all 0.2s ease",
    transform: open =>
      open
        ? "rotate(45deg) translate(-25%, -6px)"
        : "rotate(0deg) translate(0px, 0px)",
  },
}))

type Props = {
  onClick: Function,
  open: boolean,
}

const MenuIcon = (props: Props) => {
  const { open, onClick } = props

  const theme = useTheme()
  const classes = useStyles(theme, open)

  return (
    <div className={classes.toggle} role="button" onClick={onClick} open={open}>
      <div className={classes.iconBarTop} open={open} />
      <div className={classes.iconBarMiddle} open={open} />
      <div className={classes.iconBarBottom} open={open} />
    </div>
  )
}

export default MenuIcon
