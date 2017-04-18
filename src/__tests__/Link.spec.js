import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import Link from '../Components/Link'

describe('Link', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div')
        const el = <Link href="google.com" title="Test" />
        ReactDOM.render(el, div)
    })
    it('should render its title', () => {
        const wrapper = mount(<Link href="google.com" title="Test" />)
        expect(wrapper.text()).toEqual("Test")
    })
    it('should have the correct href', () => {
        const wrapper = mount(<Link href="google.com" title="Test" />)
        expect(wrapper.find('a').getDOMNode().getAttribute('href')).toEqual('google.com')
    })
})
