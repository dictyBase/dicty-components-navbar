import React, { Component } from "react"
import ReactDOM from "react-dom"
import Navbar from "../src/Components/Navbar"

const items = [
  {
    dropdown: true,
    title: "Genomes",
    items: [
      {
        name: "Genomes Home",
        href: "http://www.google.com",
      },
    ],
  },
  {
    dropdown: true,
    title: "Tools",
    items: [
      {
        name: "Tools Home",
        href: "http://www.google.com",
      },
      {
        name: "New Genome Browser",
        href: "http://wwww.google.com",
      },
    ],
  },
  {
    dropdown: true,
    title: "Explore",
    items: [
      {
        name: "Explore Home",
        href: "http://www.google.com",
      },
      {
        name: "Dicty Art",
        href: "http://wwww.google.com",
      },
      {
        name: "Gallery",
        href: "http://www.google.com",
      },
      {
        name: "Genome Resources",
        href: "http://wwww.google.com",
      },
      {
        name: "Genome Statistics",
        href: "http://www.google.com",
      },
      {
        name: "Learn About Dicty",
        href: "http://wwww.google.com",
      },
      {
        name: "Teaching Protocols",
        href: "http://www.google.com",
      },
      {
        name: "Useful Links",
        href: "http://wwww.google.com",
      },
    ],
  },
  {
    dropdown: true,
    title: "Research",
    items: [
      {
        name: "Research Home",
        href: "http://www.google.com",
      },
      {
        name: "Anatomy Ontology",
        href: "http://wwww.google.com",
      },
      {
        name: "Codon Bias Table",
        href: "http://www.google.com",
      },
      {
        name: "Nomenclature Guidelines",
        href: "http://wwww.google.com",
      },
      {
        name: "Phenotyping",
        href: "http://www.google.com",
      },
      {
        name: "Techniques",
        href: "http://wwww.google.com",
      },
    ],
  },
  {
    dropdown: true,
    title: "Dicty Stock Center",
    items: [
      {
        name: "Stock Center Home",
        href: "http://www.google.com",
      },
    ],
  },
  {
    dropdown: true,
    title: "Community",
    items: [
      {
        name: "Community Home",
        href: "http://www.google.com",
      },
      {
        name: "Cite Us",
        href: "http://www.google.com",
      },
      {
        name: "Dicty Annual Conferences",
        href: "http://www.google.com",
      },
    ],
  },
  {
    dropdown: false,
    title: "Bananas",
    href: "/bananas",
  },
]

const brand = {
  title: "Brand",
  href: "http://www.google.com",
}
// primary: Nav background,
// secondary: Borders, highlights, dropdowns
// text: color of text

const theme1 = {
  primary: "#004080",
  secondary: "#0059b3",
  text: "white",
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar brand={brand} theme={theme1} items={items} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
