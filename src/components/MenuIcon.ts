// @flow
import React, { Component } from "react"
import { styled, withTheme } from "@material-ui/styles"

const Toggle = styled("div")({
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
})
const IconBarTop = styled(({ theme, open, ...other }) => <div {...other} />)({
  height: "5px",
  background: props => (props.theme.text ? props.theme.text : "white"),
  margin: "3px 0px",
  transition: "all 0.2s ease",
  transform: props =>
    props.open
      ? "rotate(-45deg) translate(-25%, 7px)"
      : "rotate(0deg) translate(0px, 0px)",
})
const IconBarMiddle = styled(({ theme, ...other }) => <div {...other} />)({
  height: "5px",
  background: props => (props.theme.text ? props.theme.text : "white"),
  margin: "3px 0px",
  transition: "all 0.1s ease",
  width: props => (props.open ? "0%" : "100%"),
})
const IconBarBottom = styled(({ theme, open, ...other }) => <div {...other} />)(
  {
    height: "5px",
    background: theme => (theme.text ? theme.text : "white"),
    margin: "3px 0px",
    transition: "all 0.2s ease",
    transform: props =>
      props.open
        ? "rotate(45deg) translate(-25%, -6px)"
        : "rotate(0deg) translate(0px, 0px)",
  },
)

type Props = {
  onClick: Function,
  open: boolean,
  theme: Object,
}

/**
 * MenuIcon is the hamburger style icon displayed on mobile view.
 */

class MenuIcon extends Component<Props> {
  render() {
    const { open, onClick, theme } = this.props

    return (
      <Toggle role="button" onClick={onClick} open={open}>
        <IconBarTop open={open} theme={theme} />
        <IconBarMiddle open={open} theme={theme} />
        <IconBarBottom open={open} theme={theme} />
      </Toggle>
    )
  }
}

export default withTheme(MenuIcon)
