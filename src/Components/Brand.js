import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  list-style-type: none;
  display: flex;
  padding: 10px;

  @media (max-width: 768px) {
    height: 30px;
  }
`
const Link = styled.a`
  display: block;
  margin: auto;
  text-decoration: none;
  color: ${ props => props.theme.text ? props.theme.text : 'white' };
  font-size: 1.5em;

  @media (max-width: 768px) {
    top: 0;
    z-index: 10;
  }
`
export default class Brand extends Component {
    displayName = 'Brand'
    render() {
        const { title, href } = this.props
        return (
            <Container>
              <Link href={ href }>{ title }</Link>
            </Container>
        )
    }
}
