import React, { Component } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import NavItem from './Components/NavItem'
import NavbarHeader from './Components/NavbarHeader'
import NavbarItems from './Components/NavbarItems'
import NavbarDropdown from './Components/NavbarDropdown'
import DropdownMenu from './Components/DropdownMenu'

const navitems = [
    {link: '#', title: 'Setup'},
    {link: '#', title: 'Usage'},
    {link: '#', title: 'Advanced'},
    {link: '#', title: 'Try it out'},
    {link: '#', title: 'FAQ'}
]

const dropdownItems = [
    {href: '#', name: 'ES2015'},
    {href: '#', name: 'Setup'},
    {href: '#', name: 'Usage'},
    {href: '#', name: 'Advanced'},
    {href: '#', name: 'Try it'},
    {href: '#', name: 'FAQ'}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
            <NavbarHeader href="http://www.google.com" name="Babel"/>
            <NavbarItems>
                { navitems.map(item => {
                    return (<NavItem key={ navitems.indexOf(item) }
                                    link={ item.link } title={ item.title }
                            />)
                }) }
                <NavbarDropdown name="Dropdown">
                    <DropdownMenu menuItems={ dropdownItems }/>
                </NavbarDropdown>
                <NavbarDropdown name="Dropdown">
                    <DropdownMenu menuItems={ dropdownItems }/>
                </NavbarDropdown>
            </NavbarItems>
        </Navbar>
      </div>
    );
  }
}

export default App;
