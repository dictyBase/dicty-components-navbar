import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Brand from './Brand'
import Dropdown from './Dropdown'
import Link from './Link'

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background: ${ props => props.theme.background ? props.theme.background : 'black' };
  color: white;
  min-height: ${ props => props.theme.height ? props.theme.height + 'px' : '50px' };
`
const Items = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
  list-style-type: none;
`
export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            activeIndex: -1
        }
    }
    changeDropdown = (i) => {
        this.setState({
            activeIndex: i
        })
    }
    renderBrand = () => {
        const { title, href } = this.props.brand
        return <Brand title={ title } href={ href } />
    }
    renderItems = () => {
        const { activeIndex } = this.state
        let { items } = this.props
        items = items.map((item, i) => {
            if (item.dropdown) {
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
    render() {
        const { theme, brand } = this.props
        return (
            <ThemeProvider theme={ theme }>
              <Nav>
                { brand && this.renderBrand() }
                { this.renderItems() }
              </Nav>
            </ThemeProvider>
        )
    }
}
