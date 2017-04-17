import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.li`
  list-style-type: none;
  display: flex;
  padding: 10px;
`
const Link = styled.a`
  display: block;
  margin: auto;
  text-decoration: none;
  color: ${ props => props.theme.textColor ? props.theme.textColor : 'white' };
`
export default class Brand extends Component {
    render() {
        const { title, href } = this.props
        return (
            <Container>
              <Link href={ href }>{ title }</Link>
            </Container>
        )
    }
}
