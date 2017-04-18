import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import Navbar from '../Components/Navbar'
import Brand from '../Components/Brand'
import Dropdown from '../Components/Dropdown'
import Link from '../Components/Link'
import MenuIcon from '../Components/MenuIcon'

describe('Navbar', () => {
    const props = {
      items: [
          {
              dropdown: true,
              title: 'Dropdown 1',
              links: [
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
              links: [
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
          }
      ],
      brand: {
          title: 'Brand',
          href: 'google.com'
      }
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
      const el = <Navbar />
      ReactDOM.render(el, div)
    })
})
