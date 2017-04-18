import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import MenuIcon from '../Components/MenuIcon'

describe('Menu Icon', () => {
    const props = {
        open: false,
        onClick: jest.fn()
    }
    it('should render without crashing', () => {
        const div = document.createElement('div')
        const el = <MenuIcon { ...props } />
        ReactDOM.render(el, div)
    })
    it('should fire its click handler when clicked', () => {
        const wrapper = mount(<MenuIcon { ...props } />)
        wrapper.find('div').first().simulate('click')
        expect(props.onClick.mock.calls.length).toBe(1)
    })
})
