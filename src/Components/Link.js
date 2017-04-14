import React, { Component } from 'react'
import styled from 'styled-components'

const ListItem = styled.li`
  display: flex;
  padding: 10px;
`
const A = styled.a`
  display: block;
  color: ${ props => props.theme.textColor ? props.theme.textColor : 'white' };
  text-decoration: none;
  margin: auto;
`

export default class Link extends Component {
    render() {
        const { title, href } = this.props
        return (
            <ListItem>
              <A href={ href }>{ title }</A>
            </ListItem>
        )
    }
}
