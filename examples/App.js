import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../src/Components/Navbar'

const items = [
    {
        dropdown: true,
        title: 'Dropdown 1',
        items: [
            {
                name: 'Link 1',
                href: 'http://www.google.com'
            },
            {
              name: 'Link 2',
              href: 'http://wwww.google.com'
            }
        ]
    },
    {
        dropdown: true,
        title: 'Dicty Stock Center',
        items: [
            {
                name: 'Link 1',
                href: 'http://www.google.com'
            },
            {
              name: 'Link 2',
              href: 'http://wwww.google.com'
            },
            {
                name: 'Link 3',
                href: 'http://www.google.com'
            },
            {
              name: 'Link 4',
              href: 'http://wwww.google.com'
            }
        ]
    },
    {
        title: 'Link 1',
        href: 'http://www.google.com'
    },
    {
        title: 'Link 2',
        href: 'http://www.google.com'
    },
    {
        title: 'Link 3',
        href: 'http://www.google.com'
    },
    {
        title: 'Link 4',
        href: 'http://www.google.com'
    },
    {
        title: 'Link 5',
        href: 'http://www.google.com'
    },
    {
        title: 'Link 6',
        href: 'http://www.google.com'
    }
]
const brand = {
    title: 'Brand',
    href: 'http://www.google.com'
}
// Primary: Nav background,
// Secondary: Borders, highlights, dropdowns
// primaryText: all on the primary background,
// secondaryText: all text on the secondary color

const theme1 = {
    primary: '#3AAED8',
    secondary: '#2BD9FE',
    text: 'white'
}
const theme2 = {
    primary: '#6E2594',
    secondary: '#05668D',
    text: 'white'
}
export default class App extends Component {
    render() {
        return (
            <div>
              <Navbar theme={ theme1 }  items={ items } />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
