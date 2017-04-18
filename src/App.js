import React, { Component } from 'react'
import Navbar from './Components/Navbar'

const items = [
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
        title: 'Link 3',
        href: 'google.com'
    },
    {
        title: 'Link 4',
        href: 'google.com'
    },
    {
        title: 'Link 5',
        href: 'google.com'
    },
    {
        title: 'Link 6',
        href: 'google.com'
    }
]
const brand = {
    title: 'Brand',
    href: 'google.com'
}
// Primary: Nav background,
// Secondary: Borders, highlights, dropdowns
// primaryText: all on the primary background,
// secondaryText: all text on the secondary color

const theme = {
    primary: '#3AAED8',
    secondary: '#2BD9FE',
    text: 'white'
}
export default class App extends Component {
    render() {
        return (
            <div>
              <Navbar theme={ theme } brand={ brand } items={ items } />
            </div>
        )
    }
}
