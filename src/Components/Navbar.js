// @flow
import React, { Component, forwardRef } from "react"
import { ThemeProvider, styled } from "@material-ui/styles"
import Brand from "./Brand"
import Dropdown from "./Dropdown"
import Link from "./Link"
import MenuIcon from "./MenuIcon"
import { transitionToAuto, transitionFromAuto, wasClicked } from "../utils/dom"

const Container = styled(
  forwardRef(({ ...other }, ref) => <div {...other} ref={ref} />),
)({
  width: "100%",
  zIndex: "10000",

  "@media (max-width: 768px)": {
    overflow: "hidden",
    position: "initial",
    height: "50px",
    transition: "height 0.3s ease",
    "-ms-overflow-style:": "none",
    "&::-webkit-scrollbar": {
      width: "0 !important",
    },
  },
})

const Nav = styled(
  forwardRef(({ theme, ...other }, ref) => <nav {...other} ref={ref} />),
)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  background: props => (props.theme.primary ? props.theme.primary : "#15317e"),
  color: props => (props.theme.text ? props.theme.text : "white"),
  minHeight: props => (props.theme.height ? props.theme.height + "px" : "50px"),

  "@media (max-width: 768px)": {
    position: "relative",
    flexDirection: "column",
    alignItems: "flex-start",
    minWidth: "200px",
    minHeight: "100%",
  },
})
const Items = styled("ul")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",
  margin: 0,
  padding: 0,
  listStyleType: "none",

  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
})

const Header = styled("li")({
  listStyleType: "none",

  "@media (max-width: 768px)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 10,
    width: "100%",
  },
})

type Props = {
  items: Array<Object>,
  brand: Object,
  theme: Object,
}
type State = {
  activeIndex: number,
  open: boolean,
}

/**
 * Navbar is the outer container for the navbar library.
 */

export default class Navbar extends Component<Props, State> {
  nav: any
  icon: any
  container: any
  constructor() {
    super()
    this.state = {
      activeIndex: -1,
      open: false,
    }
  }
  componentDidMount() {
    document.addEventListener("click", this.handleDocumentClick)
    // Necessary to allow container to expand to accomodate open dropdowns
    this.container.addEventListener("transitionend", this.handleTransitionend)
  }
  handleTransitionend = (e: SyntheticTransitionEvent<>) => {
    const { open } = this.state
    if (open && e.propertyName === "height") {
      this.container.style.height = "auto"
    }
  }
  handleDocumentClick = (e: MouseEvent) => {
    const { open } = this.state
    if (!wasClicked(e, this.nav) && open) {
      this.close()
    }
  }
  toggle = (e: SyntheticEvent<>) => {
    const { open } = this.state

    e.nativeEvent.stopImmediatePropagation()
    e.preventDefault()
    if (open) {
      this.close()
    } else {
      this.open()
    }
  }
  close = () => {
    this.setState({
      open: false,
      activeIndex: -1,
    })
    transitionFromAuto(this.container, 50)
  }
  open = () => {
    this.setState({
      open: true,
    })
    transitionToAuto(this.container)
  }
  changeDropdown = (i: number) => {
    this.setState({
      activeIndex: i,
    })
  }
  renderBrand = () => {
    const { title, href } = this.props.brand
    return <Brand title={title} href={href} />
  }
  renderItems = () => {
    const { activeIndex, open } = this.state
    let { items } = this.props
    items = items.map((item, i) => {
      if (item.element) {
        return React.cloneElement(item.element, {
          ...item.element.props,
          key: i,
        })
      } else if (item.dropdown) {
        return (
          <Dropdown
            key={i}
            index={i}
            open={activeIndex === i ? true : false}
            items={item.items}
            title={item.title}
            changeDropdown={this.changeDropdown}
            controlled={true}
          />
        )
      } else {
        return <Link key={i} href={item.href} title={item.title} />
      }
    })
    return <Items open={open}>{items}</Items>
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleDocumentClick)
    this.container.removeEventListener(
      "transitionend",
      this.handleTransitionend,
    )
  }
  render() {
    const { theme, brand, items } = this.props
    const { open } = this.state

    return (
      <ThemeProvider theme={theme ? theme : {}}>
        <Container
          open={open}
          items={items}
          brand={brand}
          ref={el => (this.container = el)}>
          <Nav open={open} theme={theme} ref={el => (this.nav = el)}>
            <Header open={open}>
              <MenuIcon
                onClick={this.toggle}
                open={open}
                ref={el => (this.icon = el)}
              />
              {brand && this.renderBrand()}
            </Header>
            {items && this.renderItems()}
          </Nav>
        </Container>
      </ThemeProvider>
    )
  }
}
