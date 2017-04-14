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
        title: 'Dropdown 2',
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
    }
]
const brand = {
    title: 'Brand',
    href: 'google.com'
}
const theme = {}
export default class App extends Component {
    render() {
        return (
            <Navbar theme={ theme } brand={ brand } items={ items } />
        )
    }
}
