import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Brand from './Brand'
import Dropdown from './Dropdown'
import Link from './Link'

const Container = styled.div`

`
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background: ${ props => props.theme.background ? props.theme.background : 'black' };
  color: white;
  min-height: ${ props => props.theme.height ? props.theme.height + 'px' : '50px' };


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    min-width: 200px;
    min-height: 100vh;
    position: fixed;
    left: ${ props => props.open ? '0%' : '-100%'};
    transition: left 0.4s ease;
    padding-top: 30px;
  }
`
const Items = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
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
const Toggle = styled.div`
  display: none;
  padding: 7px;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: ${ props => props.open ? '150px' : '10px' };
  height: 30px;
  width: 30px;
  cursor: pointer;
  transition: left 0.4s ease;
  z-index: 10;
  ${''/* transition: all 0.4s all; */}

  @media (max-width: 768px) {
    display: flex;
  }
`
const IconBar = styled.div`
  height: 5px;
  background: ${ props => props.open ? 'white' : 'black' };
  margin: 3px 0px;
  transition: background 0.1s ease;
`
export default class Navbar extends Component {
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
    handleDocumentClick = () => {
        const { open } = this.state

    }
    toggle = () => {
        const { open } = this.state
        this.setState({
            open: !open
        })
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
        const { open } = this.state
        return (
            <ThemeProvider theme={ theme }>
              <Container>
                <Toggle onClick={ this.toggle } open={ open }>
                  <IconBar open={ open } />
                  <IconBar open={ open } />
                  <IconBar open={ open } />
                </Toggle>
                <Nav open={ open }>
                  { brand && this.renderBrand() }
                  { this.renderItems() }
                </Nav>
              </Container>
            </ThemeProvider>
        )
    }
}
