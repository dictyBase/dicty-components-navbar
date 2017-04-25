// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

const Toggle = styled.div`
  display: none;
  position: relative;
  padding: 5px;
  margin-top: 5px;
  flex-direction: column;
  justify-content: center;
  ${''/* position: fixed; */}
  top: 0;
  ${''/* right: ${ props => props.open ? '15px' : '-50px' }; */}
  height: 30px;
  width: 30px;
  cursor: pointer;
  ${''/* transition: right 0.4s ease; */}
  z-index: 10;
  ${''/* transition: all 0.4s all; */}

  @media (max-width: 768px) {
    display: flex;
  }
`
const IconBarTop = styled.div`
  height: 5px;
  background: ${ props => props.theme.text };
  margin: 3px 0px;
  transition: all 0.2s ease;
  transform: ${ props => props.open ? 'rotate(-45deg) translate(-25%, 7px)' : 'rotate(0deg) translate(0px, 0px)' };
`
const IconBarMiddle = styled.div`
  height: 5px;
  background: ${ props => props.theme.text };
  margin: 3px 0px;
  transition: all 0.1s ease;
  width: ${ props => props.open ? '0%' : '100%' };
`
const IconBarBottom = styled.div`
  height: 5px;
  background: ${ props => props.theme.text };
  margin: 3px 0px;
  transition: all 0.2s ease;
  transform: ${ props => props.open ? 'rotate(45deg) translate(-25%, -6px)' : 'rotate(0deg) translate(0px, 0px)' };
`

type Props = {
    onClick: Function,
    open: boolean
}

export default class MenuIcon extends Component {
    displayName = 'Menu Icon'
    props: Props
    render() {
      const { open, onClick } = this.props
      return (
          <Toggle role="button" onClick={ onClick } open={ open }>
            <IconBarTop open={ open } />
            <IconBarMiddle open={ open } />
            <IconBarBottom open={ open } />
          </Toggle>
      )
    }
}
