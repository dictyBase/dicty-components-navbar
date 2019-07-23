// @flow
import React, { Component } from "react"
import { ThemeProvider } from "@material-ui/styles"
import styled from "styled-components"
import Brand from "./Brand"
import Dropdown from "./Dropdown"
import Link from "./Link"
import MenuIcon from "./MenuIcon"
import { transitionToAuto, transitionFromAuto, wasClicked } from "../utils/dom"

const Container = styled.div`
  width: 100%;
  z-index: 10000;

  @media (max-width: 768px) {
    overflow: hidden;
    position: initial;
    height: 50px;
    transition: height 0.3s ease;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }
`
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background: ${props =>
    props.theme.primary ? props.theme.primary : "#15317e"};
  color: ${props => (props.theme.text ? props.theme.text : "white")};
  min-height: ${props =>
    props.theme.height ? props.theme.height + "px" : "50px"};

  @media (max-width: 768px) {
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    min-width: 200px;
    min-height: 100%;
  }
`
const Items = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    align-items: flex-start;
    width: 100%;
  }
`
const Header = styled.li`
  list-style-type: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    width: 100%;
  }
`

type Props = {
  items: Array<Object>,
  brand: Object,
  theme: Object,
}
type State = {
  activeIndex: number,
  open: boolean,
}

export default class Navbar extends Component {
  displayName = "Navbar"
  props: Props
  state: State
  nav: any
  icon: any
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
  handleTransitionend = e => {
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
  toggle = (e: SyntheticEvent) => {
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
          innerRef={el => (this.container = el)}>
          <Nav open={open} innerRef={el => (this.nav = el)}>
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
