import React, { Component } from 'react'
import styled from 'styled-components'

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: auto;
  padding: 0;
  position: relative;
`
const Toggle = styled.li`
  display: block;
  cursor: pointer;
  margin-top: 10px;
  padding: 0px 15px 10px 10px;
  ${''/* position: relative; */}
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    top: ${ props => props.open ? '9px' : 0 };
    bottom: 0;
    right: 0;
    margin: auto;
    ${''/* padding-top: 2px; */}
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${ props => props.theme.textColor ? props.theme.textColor : 'white' };
    transform: ${ props => props.open ? 'rotateX(180deg)' : 'rotateX(0deg)' };
    transform-origin: top;
    transition: inherit;
  }
`
const List = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  display: flex;
  flex-direction: column;
  ${''/* padding-left: 10px;
  padding-right: 10px; */}
  padding: ${ props => props.open ? '5px' : '0px' } 0px;
  ${''/* margin-top: 10px; */}
  height: 0px;
  width: 100%;
  overflow: hidden;
  list-style-type: none;
  transition: all 0.2s ease;
  border-left: 1px solid ${ props => props.theme.borderColor ? props.theme.borderColor : '#333' };
  border-right: 1px solid ${ props => props.theme.borderColor ? props.theme.borderColor : '#333' };
  border-bottom: 1px solid ${ props => props.theme.borderColor ? props.theme.borderColor : '#333' };
  border-bottom-width: ${ props => props.open ? '1px' : '0px' };
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
`
const Item = styled.li`
  ${''/* margin-bottom: 5px;
  margin-left: 10px; */}
  position: relative;
  ${''/* padding: 5px 0px 5px 10px; */}
  color: black;
  background-size: 0px 0px;
  transition: all 0.14s ease;

  &:hover {
    color: white;
    background: black;
  }

  ${''/* &::before {
    content: '';
    position: absolute;
    left: 50%;
    background: black;
    width: 0%;
    height: 100%;
    z-index: -1;
    transition: inherit;
  }

  &:hover::before {
    width: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    right: 50%;
    background: black;
    width: 0%;
    height: 100%;
    z-index: -1;
    transition: inherit;
    bottom: 5px;
  }

  &:hover::after {
    width: 50%;
  } */}
`
const Link = styled.a`
  text-decoration: none;
  color: inherit;
  padding: 5px 0px 5px 5px;
  display: block;
`

export default class Dropdown extends Component {
    constructor() {
        super()
        this.state = {
            open: false
        }
    }
    componentWillMount() {
        // document.addEventListener('click', this.handleDocumentClick)
    }
    close = (): void => {
        this.list.style.height = getComputedStyle(this.list).height
        this.list.offsetHeight
        this.list.style.height = '0px'
        this.setState({
            open: false
        })
    }
    open = (): void => {
        const prevHeight = this.list.style.height
        this.list.style.height = 'auto'
        const endHeight = getComputedStyle(this.list).height
        this.list.style.height = prevHeight
        this.list.offsetHeight
        this.list.style.height = endHeight
        this.setState({
            open: true
        })
    }
    handleClick = (e) => {
        const { open, changeDropdown, index } = this.props
        if (open) {
            // If dropdown is clicked while open, set Navbar's activeIndex to -1
            // to signify that all dropdowns are currently closed
            changeDropdown(-1)
        } else {
            changeDropdown(index)
        }
    }
    handleDocumentClick = () => {
        const { open } = this.state
        if (open) {
            this.close()
        }
    }
    renderItems = () => {
        let { items } = this.props
        items = items.map((item, i) => {
            return (
                <Item key={ i }>
                  <Link href={ item.href }>{ item.name }</Link>
                </Item>
            )
        })
        return items
    }
    componentWillReceiveProps(nextProps) {
        const { open } = nextProps
        if (open) {
            this.open()
        } else if (!open) {
            this.close()
        }
    }
    componentWillUnmount() {
        // document.removeEventListener('click', this.handleDocumentClick)
    }
    render() {
        const { title, open } = this.props
        return (
          <Menu>
            <Toggle onClick={ this.handleClick } open={ open }>
              { title }
            </Toggle>
            <List open={ open } innerRef={ el => this.list = el }>
              { this.renderItems() }
            </List>
          </Menu>
        )
    }
}
