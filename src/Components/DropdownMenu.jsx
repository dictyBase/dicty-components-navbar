import React from 'react'
import styled from 'styled-components'

const Menu = styled.ul`
  display: ${ props => props.active ? (props.open ? 'block' : 'none') : 'none' };
  position: absolute;
  top: 100%;
  left: 0px;
  zIndex: 1000;
  float: left;
  minWidth: 160px;
  margin: 0px;
  padding: 5px 0px;
  fontSize: 14px;
  textAlign: left;
  listStyle: none;
  backgroundColor: #fff;
  backgroundClip: padding-box;
  border: 1px solid #ccc;
  borderBottomLeftRadius: 4px;
  borderBottomRightRadius: 4px;
  boxShadow: 0 6px 12px #C9C9C9;
  boxSizing: border-box;

  @media (max-width: 767px): {
      position: static;
      float: none;
      width: auto;
      marginTop: 0;
      backgroundColor: transparent;
      border: 0;
      boxShadow: none
  }
`
const Link = styled.a`
  display: block;
  padding: 3px 20px;
  clear: both;
  fontWeight: normal;
  lineHeight: 1.42857143;
  color: #333;
  whiteSpace: nowrap;
  textDecoration: none;
  boxSizing: border-box;

  :hover: {
      color: #ffffff;
      backgroundColor: #000099
  };

  :focus: {
      color: #ffffff;
      backgroundColor: #000099
  };

  @media (max-width: 767px): {
      backgroundColor: transparent;
      color: #f7be81;

      :hover: {
          backgroundColor: #000099
      }
  }
`

export default class DropdownMenu extends React.Component {
    displayName = 'Dropdown menu items'

    static propTypes = {
        menuItems: React.PropTypes.array,
        style: React.PropTypes.object,
        menuItemStyle: React.PropTypes.object,
        open: React.PropTypes.bool
    }

    render() {
        const { menuItems, style, itemStyle } = this.props
        return (
            <Menu style={ style }>
              {
                 menuItems.map((item, i) => {
                    return (
                      <li key={ i }>
                          <Link style={ itemStyle } href={ item.href }>
                            { item.name }
                          </Link>
                      </li>
                    )
                })
              }
          </Menu>
      )
    }
}
