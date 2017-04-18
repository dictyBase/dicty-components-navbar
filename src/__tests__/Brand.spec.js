import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import Brand from '../Components/Brand'

describe('Brand', () => {

    const wrapper = mount(<Brand title="Test" href="google.com" />)

    it('should render without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Brand title="Test" href="google.com" />, div);
    })

    it('should render its title', () => {
        expect(wrapper.text()).toEqual('Test')
    })

    it('should have the correct href', () => {
        expect(wrapper.find('a').getDOMNode().getAttribute('href')).toEqual('google.com')
    })
})
