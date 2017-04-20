// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import Dropdown from '../Components/Dropdown'

describe('Dropdown', () => {
    const props = {
        title: 'Dicty Stock Center',
        links: [
            {
                name: 'Link 1',
                href: 'www.google.com'
            },
            {
              name: 'Link 2',
              href: 'wwww.google.com'
            },
            {
                name: 'Link 3',
                href: 'www.google.com'
            },
            {
              name: 'Link 4',
              href: 'wwww.google.com'
            }
        ]
    }
    let changeDropdown
    let wrapper

    beforeEach(() => {
        changeDropdown = jest.fn()
        wrapper = mount(
            <Dropdown
              items={ props.links }
              title={ props.title }
              changeDropdown={ changeDropdown }
              index={ 0 }
              open={ false }
            />
        )
    })
    afterEach(() => {
        wrapper.unmount()
    })
    it('should render without crashing', () => {
        const div = document.createElement('div')
        const el = <Dropdown items={ props.links } title={ props.title } />
        ReactDOM.render(el, div)
    })
    it('should call changeDropdown() with its index when opened', () => {
        wrapper.find('li').first().simulate('click')
        expect(changeDropdown.mock.calls.length).toEqual(1)
        expect(changeDropdown.mock.calls[0][0]).toBe(0)
    })
    it('should call changeDropdown() with -1 when closed', () => {
        wrapper.setProps({ open: true })
        wrapper.find('li').first().simulate('click')
        expect(changeDropdown.mock.calls.length).toEqual(1)
        expect(changeDropdown.mock.calls[0][0]).toBe(-1)
    })
    it('should call open() if the open prop changes to true', () => {
        wrapper.instance().open = jest.fn()
        // Need to update wrapper for mock function to take effect
        wrapper.update()
        wrapper.setProps({ open: true })
        expect(wrapper.instance().open.mock.calls.length).toEqual(1)
    })
    it('should call close() if the open prop changes to false', () => {
        wrapper.setProps({ open: true })
        wrapper.instance().close = jest.fn()
        wrapper.update()
        wrapper.setProps({ open: false })
        expect(wrapper.instance().close.mock.calls.length).toEqual(1)
    })
    it('renders the correct number of links', () => {
        expect(wrapper.children().find('ul').children().length).toEqual(4)
    })
})
