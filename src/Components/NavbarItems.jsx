import React from 'react'
import styled from 'styled-components'

const Collapse = styled.div`
    display: ${ props => props.collapseIn ? 'block' : 'none' };
    overflowY: ${ props => props.collapseIn ? 'auto' : 'initial' };
    paddingRight: 15px;
    paddingLeft: 15px;
    overflowX: visible;
    borderTopWidth: 1px;
    borderTopStyle: solid;
    boxShadow: 0px 1px 0px rgba(255; 255; 255, .1) inset;
    marginRight: -15px;
    marginLeft: -15px;
    maxHeight: 340px;
    boxSizing: border-box;

    @media (min-width: 768px): {
        marginRight: 0px;
        marginLeft: 0px;
        paddingRight: 0px;
        paddingLeft: 0px;
        height: auto;
        paddingBottom: 0px;
        display: block;
        overflow: visible;
        width: auto;
        borderTopWidth: 0px;
        borderTopStyle: none;
        boxShadow: none;
        overflowY: visible
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
  content: '';
  boxSizing: border-box;
`
const NavItems = styled.ul`
  margin: 7.5px -15px;
  listStyle: outside none none;
  paddingLeft: 0px;
  boxSizing: border-box;

  fontFamily: "Helvetica Neue",Helvetica,Arial,sans-serif;
  fontSize: 14px;

  @media (min-width: 768px): {
      float: left;
      margin: 0px
  }
`
export default class NavbarItems extends React.Component {
    displayName = 'Navigation list of items'

    static propTypes = {
        style: React.PropTypes.object,
        children: React.PropTypes.node
    }

    state = {
      activeIndex: 0
    }

    onClickHandler = (activeIndex) => {
        this.setState({
            activeIndex: activeIndex
        })
    }

    renderChildren = () => {
        const { children } = this.props
        const { activeIndex } = this.state
        return React.Children.map(children, (child, index) => {
            return React.cloneElement(child,
                {
                    index: index,
                    activeIndex: activeIndex,
                    parentCallBack: this.onClickHandler
                }
            )
        })
    }

    render() {
        const { style } = this.props
        return (
            <Collapse>
              <PseudoBefore />
                <NavItems style={ {...style} }>
                  <PseudoBefore />
                    { this.renderChildren() }
                  <PseudoAfter />
                </NavItems>
              <PseudoAfter />
            </Collapse>
        )
    }
}
