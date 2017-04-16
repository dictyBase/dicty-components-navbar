import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

const Nav = styled.nav`
  background-color: #15317e;
  border: 1px solid #15317e;
  borderRadius: 0px;
  position: relative;
  top: 0px;
  minHeight: 50px;
  marginBottom: 20px;
  display: block;
  boxSizing: border-box;
`
const Container = styled.div`
  paddingRight: 15px;
  paddingLeft: 15px;
  marginRight: auto;
  marginLeft: auto;
  boxSizing: border-box;

  @media (min-width: 768px): {
      width: 750px
  }
  @media (min-width: 992px): {
      width: 970px;
  }
  @media (min-width: 1200px): {
      width: 1170px;
  }
`
const PseudoBefore = styled.span`
  display: table;
  content: '';
  boxSizing: border-box;
`
const PseudoAfter = styled.span`
  clear: both;
  display: table;
  content: ;
  boxSizing: border-box;
`

export default class Navbar extends React.Component {
    displayName = 'Navigation bar'

    static propTypes = {
        navStyle: React.PropTypes.object,
        contStyle: React.PropTypes.object,
        children: React.PropTypes.node
    }

    state = {
        collapseIn: false
    }

    renderChildren = () => {
        const { children } = this.props
        return React.Children.map(children, (child) => {
            return React.cloneElement(child,
                {
                    navbarToggle: this.navbarToggle,
                    collapseIn: this.state.collapseIn
                }
            )
        })
    }

    navbarToggle = () => {
        this.setState({collapseIn: !this.state.collapseIn})
    }

    render() {
        const { navStyle, contStyle } = this.props
        return (
            <Nav style={ navStyle }>
              <PseudoBefore />
              <Container style={ contStyle }>
                <PseudoBefore />
                  { this.renderChildren() }
                <PseudoAfter />
              </Container>
              <PseudoAfter />
            </Nav>
        )
    }
}
