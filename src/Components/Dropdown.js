import React, { Component } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  ${''/* margin: auto; */}
  justify-content: center;
  padding: 0;
  position: relative;
  background: ${ props => props.open ? '#333' : 'transparent' };
  transition: all 0.2s ease;
`
const Toggle = styled.li`
  display: block;
  cursor: pointer;
  margin-top: 10px;
  padding: 0px 20px 10px 10px;
  transition: all 0.3s ease;

  ${''/* &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background: ${ props => props.theme.backgroundColor ? darken(props.theme.backgroundColor, 0.2) : '#333' };
  } */}

  &::after {
    content: '';
    position: absolute;
    top: ${ props => props.open ? '9px' : 0 };
    bottom: 0;
    right: 5px;
    margin: auto;
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
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: ${ props => props.open ? '0px 0px 5px 0px' : '0px' };
  height: 0px;
  width: calc(100% - 2px);
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
  position: relative;
  color: black;
  background-size: 0px 0px;
  transition: all 0.14s ease;

  &:hover {
    color: white;
    background: black;
  }
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
        document.addEventListener('click', this.handleDocumentClick)
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
    handleDocumentClick = (e) => {

        const { changeDropdown, open } = this.props
        const el = this.menu
        const rect = el.getBoundingClientRect();
        const minX = rect.left + el.clientLeft;
        const x = event.clientX;
        const minY = rect.top + el.clientTop;
        const y = event.clientY;
        if (((x < minX || x >= minX + el.clientWidth) || (y < minY || y >= minY + el.clientHeight)) && open) {
            e.stopImmediatePropagation()
            e.preventDefault()
            this.close()
            changeDropdown(-1)
            return
        }
        // console.log(open ? 'opened' : 'closed')

        // this.close()
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
        document.removeEventListener('click', this.handleDocumentClick)
    }
    render() {
        const { title, open } = this.props
        return (
          <Menu open={ open } innerRef={ el => this.menu = el }>
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
