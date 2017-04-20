import React, { Component } from 'react'
import styled from 'styled-components'
import { darkenOrLighten } from '../utils/darkenOrLighten'
import { wasClicked } from '../utils/wasClicked'

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0;
  position: relative;
  background: ${ props => props.open && props.theme.secondary ? darkenOrLighten(props.theme.secondary) : 'transparent' };
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    align-items: initial;
    width: 100%;
  }
`
const Toggle = styled.li`
  display: block;
  cursor: pointer;
  padding: 0px 20px 0px 10px;
  transition: all 0.3s ease;
  color: ${ props => props.theme.text ? props.theme.text : 'black' };
  line-height: ${ props => props.theme.height ? props.theme.height : '50px' };

  @media (max-width: 768px) {
    line-height: initial;
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
      top: ${ props => props.open ? '19px' : '10px' };
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
  ${''/* background-size: 0px 0px; */}
  transition: all 0.14s ease;

  &:hover {
    color: white;
    background: ${ props => props.theme.secondary ? darkenOrLighten(props.theme.secondary) : 'black' };
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

type Props = {
    open: boolean,
    changeDropdown: Function,
    theme: Object,
    title: String,
    index: Number,
}

export default class Dropdown extends Component {
    displayName = 'Dropdown'
    menu: any
    list: any
    componentWillMount() {
        document.addEventListener('click', this.handleDocumentClick)
    }
    close = (): void => {
        this.list.style.height = getComputedStyle(this.list).height
        // Force repaint
        this.list.offsetHeight
        this.list.style.height = '0px'
    }
    open = (): void => {
        const prevHeight = this.list.style.height
        this.list.style.height = 'auto'
        const endHeight = getComputedStyle(this.list).height
        this.list.style.height = prevHeight
        // Force repaint
        this.list.offsetHeight
        this.list.style.height = endHeight
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
        // const el = this.menu
        // const rect = el.getBoundingClientRect()
        // const minX = rect.left + el.clientLeft
        // const x = event.clientX
        // const minY = rect.top + el.clientTop
        // const y = event.clientY
        if (!wasClicked(e, this.menu) && open) {
            e.stopImmediatePropagation()
            this.close()
            changeDropdown(-1)
            return
        }
    }
    renderItems = (): ?React$Element<any> => {
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
    componentWillReceiveProps(nextProps: Props) {
        const { open }: { open: Boolean} = nextProps
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
