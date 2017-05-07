import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import Navbar from '../Components/Navbar'
import Brand from '../Components/Brand'
import Dropdown from '../Components/Dropdown'
import Link from '../Components/Link'
import MenuIcon from '../Components/MenuIcon'

describe('Navbar', () => {
    const nativeEvent = { nativeEvent: { stopImmediatePropagation: () => {} } }
    const props = {
        items: [
            {
                dropdown: true,
                title: 'Dropdown 1',
                items: [
                    {
                        name: 'Link 1',
                        href: 'www.google.com'
                    },
                    {
                      name: 'Link 2',
                      href: 'wwww.google.com'
                    }
                ]
            },
            {
                dropdown: true,
                title: 'Dicty Stock Center',
                items: [
                    {
                        name: 'Link 1',
                        href: 'www.google.com'
                    },
                    {
                      name: 'Link 2',
                      href: 'wwww.google.com'
                    }
                ]
            },
            {
                title: 'Link 1',
                href: 'google.com'
            },
            {
                title: 'Link 2',
                href: 'google.com'
            },
            {
                element: <div>test</div>
            }
        ],
        brand: {
            title: 'Brand',
            href: 'google.com'
        },
        theme: {}
    }
    let wrapper
    beforeEach(() => {
        wrapper = mount(<Navbar { ...props } />)
    })
    afterEach(() => {
        wrapper.unmount()
    })
    it('should render without crashing', () => {
        const div = document.createElement('div')
        const el = <Navbar { ...props } />
        ReactDOM.render(el, div)
    })
    it('should render a brand if one is specified', () => {
        expect(wrapper.find(Brand).length).toEqual(1)
    })
    it('should render the correct number of Links', () => {
        expect(wrapper.find(Link).length).toEqual(2)
    })
    it('should render the correct number of dropdowns', () => {
        expect(wrapper.find(Dropdown).length).toEqual(2)
    })
    it('should render arbitrary elements if they are provided', () => {
        const el = <div>test</div>
        expect(wrapper.containsMatchingElement(el)).toEqual(true)
    })
    it('should call toggle() when the menu icon is clicked', () => {
        wrapper.instance().toggle = jest.fn()
        wrapper.update()
        wrapper.find(MenuIcon).simulate('click')
        expect(wrapper.instance().toggle.mock.calls.length).toEqual(1)
    })
    it('should call open() if toggled while closed', () => {
        wrapper.instance().open = jest.fn()
        wrapper.update()
        wrapper.find(MenuIcon).simulate('click', nativeEvent)
        expect(wrapper.instance().open.mock.calls.length).toEqual(1)
    })
    it('should call close() if toggled while open', () => {
        wrapper.instance().close = jest.fn()
        wrapper.update()
        wrapper.setState({ open: true })
        wrapper.find(MenuIcon).simulate('click', nativeEvent)
        expect(wrapper.instance().close.mock.calls.length).toEqual(1)
    })
    it('should set its active index to that of any dropdown that is opened', () => {
        wrapper.find(Dropdown).first().find('li').first().simulate('click')
        expect(wrapper.state('activeIndex')).toEqual(0)
    })
    it('should set its active index to that of any dropdown that is opened while another dropdown is open', () => {
        wrapper.setState({ activeIndex: 1 })
        wrapper.find(Dropdown).first().find('li').first().simulate('click')
        expect(wrapper.state('activeIndex')).toEqual(0)
    })
    it('should set its active index to -1 if a dropdown is closed', () => {
        wrapper.setState({ activeIndex: 0 })
        wrapper.find(Dropdown).first().find('li').first().simulate('click')
        expect(wrapper.state('activeIndex')).toEqual(-1)
    })
    it('should set its active index to -1 if it is closed', () => {
        wrapper.setState({ activeIndex: 0, open: true })
        wrapper.find(MenuIcon).simulate('click', nativeEvent)
        expect(wrapper.state('activeIndex')).toEqual(-1)
    })
})
