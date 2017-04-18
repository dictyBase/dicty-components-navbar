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
  color: ${ props => props.theme.textColor ? props.theme.textColor : 'white' };
  font-size: 1.5em;

  @media (max-width: 768px) {
    ${''/* position: fixed; */}
    top: 0;
    ${''/* left: ${ props => props.open ? '30px' : '-100%'}; */}
    z-index: 10;
    ${''/* padding: 10px; */}
  }
`
export default class Brand extends Component {
    render() {
        const { title, href, open } = this.props
        return (
            <Container>
              <Link open={ open } href={ href }>{ title }</Link>
            </Container>
        )
    }
}
