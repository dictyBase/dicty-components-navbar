import React, { Component, forwardRef } from "react"
import { styled, withTheme } from "@material-ui/styles"
import { wasClicked, transitionToAuto, transitionFromAuto } from "../utils/dom"

const Menu = styled(
  forwardRef(({ theme, open, ...other }, ref) => <ul {...other} ref={ref} />),
)({
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  padding: 0,
  position: "relative",
  background: props =>
    props.open && props.theme.secondary ? props.theme.secondary : "transparent",
  transition: "all 0.2s ease",

  "@media (max-width: 768px)": {
    alignItems: "initial",
    width: "100%",
  },
})
const Toggle = styled(({ theme, open, ...other }) => <li {...other} />)({
  display: "block",
  cursor: "pointer",
  padding: "0px 20px 0px 10px",
  transition: "transform 0.3s ease, top 0.3s ease, bottom 0.3s ease",
  color: props => (props.theme.text ? props.theme.text : "white"),
  lineHeight: props => (props.theme.height ? props.theme.height : "50px"),

  "@media (max-width: 768px)": {
    lineHeight: "initial",
    position: "relative",
    margin: 0,
  },

  "&::after": {
    content: "''",
    position: "absolute",
    top: props => (props.open ? "9px" : "0px"),
    bottom: 0,
    right: "5px",
    margin: "auto",
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderTop: props =>
      props.theme.text ? `5px solid ${props.theme.text}` : "5px solid white",
    transform: props => (props.open ? "rotateX(180deg)" : "rotateX(0deg)"),
    transformOrigin: "top",
    transition: "inherit",

    "@media (max-width: 768px)": {
      top: props => (props.open ? "19px" : "11px"),
      right: "25px",
      bottom: props => (props.open ? "11px" : "10px"),
    },
  },
})

const List = styled(
  forwardRef(({ theme, open, ...other }, ref) => <ul {...other} ref={ref} />),
)({
  position: "absolute",
  top: "100%",
  left: 0,
  display: "flex",
  flexDirection: "column",
  padding: "0px",
  height: "0px",
  minWidth: "calc(100% - 2px)",
  width: "auto",
  overflow: "hidden",
  listStyleType: "none",
  transition: "all 0.2s ease",
  background: "white",
  borderLeft: props =>
    props.theme.secondary
      ? `1px solid ${props.theme.secondary}`
      : "1px solid #333",
  borderRight: props =>
    props.theme.secondary
      ? `1px solid ${props.theme.secondary}`
      : "1px solid #333",
  borderBottom: props =>
    props.theme.secondary
      ? `1px solid ${props.theme.secondary}`
      : "1px solid #333",
  borderBottomWidth: props => (props.open ? "1px" : "0px"),
  borderBottomRightRadius: "3px",
  borderBottomLeftRadius: "3px",
  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
  zIndex: 10000,
  whiteSpace: "nowrap",

  "@media (max-width: 768px)": {
    position: "relative",
    top: 0,
    border: "none",
    color: props => (props.theme.secondary ? props.theme.secondary : "black"),
    boxShadow: "none",
    background: props =>
      props.theme.primary ? props.theme.primary : "#15317e",
  },
})

const Item = styled(({ theme, ...other }) => <li {...other} />)({
  position: "relative",
  color: props => (props.theme.primary ? props.theme.primary : "black"),
  transition: "all 0.14s ease",

  "@media (max-width: 768px)": {
    color: "white",
  },
})

const Link = styled(({ theme, ...other }) => <a {...other} />)({
  textDecoration: "none",
  textAlign: "left",
  background: "white",
  color: props => (props.theme.primary ? props.theme.primary : "#15317e"),
  padding: "10px 10px 10px 5px",
  display: "block",

  "&:hover": {
    color: "white",
    background: props =>
      props.theme.primary ? props.theme.primary : "#15317e",
  },

  "@media (max-width: 768px)": {
    padding: "10px 0px 10px 40px",
    color: "white !important",
    background: props =>
      props.theme.primary ? props.theme.primary : "#15317e",
  },
})

type Props = {
  open: boolean,
  changeDropdown: Function,
  theme: Object,
  title: String,
  index: Number,
  items: Array<Object>,
}

class Dropdown extends Component {
  menu: any
  list: any
  constructor() {
    super()
    this.state = {
      width: null,
    }
  }
  componentWillMount() {
    document.addEventListener("click", this.handleDocumentClick)
  }
  componentDidMount() {
    this.setState({
      width: getComputedStyle(this.list).width,
    })
  }
  close = (): void => {
    transitionFromAuto(this.list, 0)
  }
  open = (): void => {
    transitionToAuto(this.list)
  }
  handleClick = (e: Event): void => {
    const { open, changeDropdown, index } = this.props
    if (open) {
      // If dropdown is clicked while open, set Navbar's activeIndex to -1
      // to signify that all dropdowns are currently closed
      changeDropdown(-1)
    } else {
      changeDropdown(index)
    }
  }
  handleDocumentClick = (e: Event): void => {
    const { changeDropdown, open } = this.props
    if (!wasClicked(e, this.menu) && open) {
      e.stopImmediatePropagation()
      this.close()
      changeDropdown(-1)
      return
    }
  }
  renderItems = (): ?React$Element<any> => {
    let { items, theme } = this.props
    items = items.map((item, i) => {
      return (
        <Item key={i} theme={theme}>
          <Link href={item.href} theme={theme}>
            {item.name}
          </Link>
        </Item>
      )
    })
    return items
  }
  componentWillReceiveProps(nextProps: Props) {
    const { open }: { open: Boolean } = nextProps
    if (open) {
      this.open()
    } else if (!open) {
      this.close()
    }
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleDocumentClick)
  }
  render() {
    const { title, open, theme } = this.props
    const { width } = this.state

    return (
      <Menu
        theme={theme}
        open={open}
        ref={el => (this.menu = el)}
        width={width}>
        <Toggle
          theme={theme}
          onClick={this.handleClick}
          open={open}
          width={width}>
          {title}
        </Toggle>
        <List theme={theme} open={open} ref={el => (this.list = el)}>
          {this.renderItems()}
        </List>
      </Menu>
    )
  }
}

export default withTheme(Dropdown)
