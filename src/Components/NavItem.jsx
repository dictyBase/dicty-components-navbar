import React from 'react'
import styled from 'styled-components'

const List = styled.li`
  position: relative;
  display: block;
  boxSizing: border-box;

  @media (min-width: 768px): {
      float: left;
  }
`
const Link = styled.a`
  paddingTop: 10px;
  paddingBottom: 10px;
  paddingLeft: 15px;
  paddingRight: 15px;
  lineHeight: 20px;
  position: relative;
  display: block;
  boxSizing: border-box;
  textDecoration: none;
  backgroundColor: transparent;
  color: #ffffff;
  fontSize: 18px;

  &:hover: {
      color: #ccffcc
  }

  &:focus: {
      color: #ffffff;
      backgroundColor: #112968
  }

  @media (min-width: 768px): {
      paddingTop: 15px;
      paddingBottom: 15px;
  }
`

export default class NavItem extends React.Component {
    displayName = 'Navigation bar item'

    static propTypes = {
        link: React.PropTypes.string,
        title: React.PropTypes.string,
        style: React.PropTypes.object,
        itemStyle: React.PropTypes.object
    }

    render() {
        const { style, link, title } = this.props
        return (
          <List style={ {...style} }>
            <Link href={ link }>
              { title }
            </Link>
          </List>
        )
    }
}
