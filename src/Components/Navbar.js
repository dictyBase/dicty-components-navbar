import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Brand from './Brand'
import Dropdown from './Dropdown'
import Link from './Link'
import MenuIcon from './MenuIcon'
import { wasClicked } from '../utils/wasClicked'

const Container = styled.div`
  @media (max-width: 768px) {
    overflow-y: auto;
    position: fixed;
    height: 100vh;
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
  background: ${ props => props.theme.primary ? props.theme.primary : 'black' };
  color: ${ props => props.theme.text ? props.theme.text : 'white' };
  min-height: ${ props => props.theme.height ? props.theme.height + 'px' : '50px' };


  @media (max-width: 768px) {
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    min-width: 200px;
    min-height: 100%;
    left: ${ props => props.open ? '0%' : '-100%' };
    transition: left 0.4s ease;
    ${''/* padding-top: 30px; */}
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
    margin-top: 60px;
  }
`
const Header = styled.li`
  list-style-type: none;

  @media (max-width: 768px) {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${ props => props.theme.primary ? props.theme.primary : 'black' };
    width: ${ props => props.maxWidth ? props.maxWidth + 'px' : '200px' };
    left: ${ props => props.open ? '0%' : '-200px' };
    transition: left 0.4s ease;
    z-index: 10;
  }
`

export default class Navbar extends Component {
    displayName = 'Navbar'
    constructor() {
        super()
        this.state = {
            activeIndex: -1,
            open: false
        }
    }
    componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick)
    }
    handleDocumentClick = (e) => {
        const { open } = this.state
        if (!wasClicked(e, this.nav) && open) {
            this.close()
        }
    }
    toggle = (e) => {
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
            open: false
        })
    }
    open = () => {
        this.setState({
            open: true
        })
    }
    changeDropdown = (i) => {
        this.setState({
            activeIndex: i
        })
    }
    renderBrand = () => {
        const { open } = this.state
        const { title, href } = this.props.brand
        return <Brand open={ open } title={ title } href={ href } />
    }
    renderItems = () => {
        const { activeIndex } = this.state
        let { items } = this.props
        items = items.map((item, i) => {
            if (item.element) {
                return React.cloneElement(item.element, { ...item.element.props, key: i })
            } else if (item.dropdown) {
                return (
                    <Dropdown
                      key={ i }
                      index={ i }
                      open={ activeIndex === i ? true : false }
                      items={ item.links }
                      title={ item.title }
                      changeDropdown={ this.changeDropdown }
                    />
                )
            } else {
                return <Link key={ i } href={ item.href } title={ item.title } />
            }
        })
        return <Items>{ items }</Items>
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick)
    }
    render() {
        const { theme, brand, items } = this.props
        const { open } = this.state
        return (
            <ThemeProvider theme={ theme ? theme : {} }>
              <Container>
                <Nav open={ open } innerRef={ el => this.nav = el }>
                  <Header open={ open }>
                    { brand && this.renderBrand() }
                    <MenuIcon ref={ el => this.icon = el } onClick={ this.toggle } open={ open } />
                  </Header>
                  { items && this.renderItems() }
                </Nav>
              </Container>
            </ThemeProvider>
        )
    }
}
