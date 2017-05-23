import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../src/Components/Navbar'

const items = [
    {
        dropdown: true,
        title: 'Genomes',
        items: [
            {
                name: 'Genomes Home',
                href: 'http://www.google.com'
            }
        ]
    },
    {
        dropdown: true,
        title: 'Tools',
        items: [
            {
                name: 'Tools Home',
                href: 'http://www.google.com'
            },
            {
              name: 'New Genome Browser',
              href: 'http://wwww.google.com'
            }
        ]
    },
    {
        dropdown: true,
        title: 'Explore',
        items: [
            {
                name: 'Explore Home',
                href: 'http://www.google.com'
            },
            {
              name: 'Dicty Art',
              href: 'http://wwww.google.com'
            },
            {
                name: 'Gallery',
                href: 'http://www.google.com'
            },
            {
              name: 'Genome Resources',
              href: 'http://wwww.google.com'
            },
            {
                name: 'Genome Statistics',
                href: 'http://www.google.com'
            },
            {
              name: 'Learn About Dicty',
              href: 'http://wwww.google.com'
            },
            {
                name: 'Teaching Protocols',
                href: 'http://www.google.com'
            },
            {
              name: 'Useful Links',
              href: 'http://wwww.google.com'
            }
        ]
    },
    {
        dropdown: true,
        title: 'Research',
        items: [
            {
                name: 'Research Home',
                href: 'http://www.google.com'
            },
            {
              name: 'Anatomy Ontology',
              href: 'http://wwww.google.com'
            },
            {
                name: 'Codon Bias Table',
                href: 'http://www.google.com'
            },
            {
              name: 'Nomenclature Guidelines',
              href: 'http://wwww.google.com'
            },
            {
                name: 'Phenotyping',
                href: 'http://www.google.com'
            },
            {
              name: 'Techniques',
              href: 'http://wwww.google.com'
            }
        ]
    },
    {
        dropdown: true,
        title: 'Dicty Stock Center',
        items: [
            {
              name: 'Stock Center Home',
              href: 'http://www.google.com'
            }
        ]
    },
    {
        dropdown: true,
        title: 'Community',
        items: [
            {
              name: 'Community Home',
              href: 'http://www.google.com'
            },
            {
              name: 'Cite Us',
              href: 'http://www.google.com'
            },
            {
              name: 'Dicty Annual Conferences',
              href: 'http://www.google.com'
            }
        ]
    }
]

// eslint-disable-next-line
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
// eslint-disable-next-line
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
