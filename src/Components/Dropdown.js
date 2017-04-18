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
  background: ${ props => props.open && props.theme.secondary ? props.theme.secondary : 'transparent' };
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    width: 100%;
  }
`
const Toggle = styled.li`
  display: block;
  cursor: pointer;
  margin-top: 10px;
  padding: 0px 20px 10px 10px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    position: relative;
    margin: 0;
    padding: 10px 20px 10px 10px;
  }

  &::after {
    content: '';
    position: absolute;
    top: ${ props => props.open ? '9px' : '0px' };
    bottom: 0;
    right: 5px;
    margin: auto;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${ props => props.theme.text ? props.theme.text : 'white' };
    transform: ${ props => props.open ? 'rotateX(180deg)' : 'rotateX(0deg)' };
    transform-origin: top;
    transition: inherit;

    @media (max-width: 768px) {
      right: 25px;
      bottom: 10px;
      top: none;
    }
  }
`
const List = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 0px;
  height: 0px;
  width: calc(100% - 2px);
  overflow: hidden;
  list-style-type: none;
  transition: all 0.2s ease;
  border-left: 1px solid ${ props => props.theme.secondary ? props.theme.secondary : '#333' };
  border-right: 1px solid ${ props => props.theme.secondary ? props.theme.secondary : '#333' };
  border-bottom: 1px solid ${ props => props.theme.secondary ? props.theme.secondary : '#333' };
  border-bottom-width: ${ props => props.open ? '1px' : '0px' };
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    border: none;
    color: white;
    box-shadow: none;
  }
`
const Item = styled.li`
  position: relative;
  color: ${ props => props.theme.primary ? props.theme.primary : 'black' };
  background-size: 0px 0px;
  transition: all 0.14s ease;

  &:hover {
    color: white;
    background: ${ props => props.theme.secondary ? darken(0.2, props.theme.secondary) : 'black' };
  }

  @media (max-width: 768px) {
    color: white;
  }
`
const Link = styled.a`
  text-decoration: none;
  color: inherit;
  padding: 10px 0px 10px 5px;
  display: block;

  @media (max-width: 768px) {
    padding: 10px 0px 10px 20px;
  }
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
        // Force repaint
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
        // Force repaint
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
        const rect = el.getBoundingClientRect()
        const minX = rect.left + el.clientLeft
        const x = event.clientX
        const minY = rect.top + el.clientTop
        const y = event.clientY
        if (((x < minX || x >= minX + el.clientWidth) || (y < minY || y >= minY + el.clientHeight)) && open) {
            e.stopImmediatePropagation()
            // e.preventDefault()
            this.close()
            changeDropdown(-1)
            return
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
