import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Brand from './Components/Brand'
import Dropdown from './Components/Dropdown'
import Link from './Components/Link'
import MenuIcon from './Components/MenuIcon'
import Navbar from './Components/Navbar'
import './index.css'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

export { Brand, Dropdown, Link, MenuIcon, Navbar }
