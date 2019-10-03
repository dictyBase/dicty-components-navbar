# dicty-components-navbar

[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](LICENSE)  
![GitHub tag](https://img.shields.io/github/v/tag/dictyBase/dicty-components-navbar)  
![GitHub action](https://github.com/dictyBase/dicty-components-navbar/workflows/Node%20CI/badge.svg)
[![codecov](https://codecov.io/gh/dictyBase/dicty-components-navbar/branch/develop/graph/badge.svg)](https://codecov.io/gh/dictyBase/dicty-components-navbar)  
[![Dependency Status](https://david-dm.org/dictyBase/dicty-components-navbar/develop.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-navbar/develop)
[![devDependency Status](https://david-dm.org/dictyBase/dicty-components-navbar/develop/dev-status.svg?style=flat-square)](https://david-dm.org/dictyBase/dicty-components-navbar/develop?type=dev)  
[![Technical debt](https://badgen.net/codeclimate/tech-debt/dictyBase/dicty-components-navbar)](https://codeclimate.com/github/dictyBase/dicty-components-navbar/trends/technical_debt)
[![Issues](https://badgen.net/codeclimate/issues/dictyBase/dicty-components-navbar)](https://codeclimate.com/github/dictyBase/dicty-components-navbar/issues)
[![Maintainability percentage](https://badgen.net/codeclimate/maintainability-percentage/dictyBase/dicty-components-navbar)](https://codeclimate.com/github/dictyBase/dicty-components-navbar)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=dictyBase/dicty-components-navbar)](https://dependabot.com)  
![Issues](https://badgen.net/github/issues/dictyBase/dicty-components-navbar)
![Open Issues](https://badgen.net/github/open-issues/dictyBase/dicty-components-navbar)
![Closed Issues](https://badgen.net/github/closed-issues/dictyBase/dicty-components-navbar)
![Total PRS](https://badgen.net/github/prs/dictyBase/dicty-components-navbar)
![Open PRS](https://badgen.net/github/open-prs/dictyBase/dicty-components-navbar)
![Closed PRS](https://badgen.net/github/closed-prs/dictyBase/dicty-components-navbar)
![Merged PRS](https://badgen.net/github/merged-prs/dictyBase/dicty-components-navbar)  
![Commits](https://badgen.net/github/commits/dictyBase/dicty-components-navbar/develop)
![Last commit](https://badgen.net/github/last-commit/dictyBase/dicty-components-navbar/develop)
![Branches](https://badgen.net/github/branches/dictyBase/dicty-components-navbar)
![Tags](https://badgen.net/github/tags/dictyBase/dicty-components-navbar)
![GitHub repo size](https://img.shields.io/github/repo-size/dictyBase/dicty-components-navbar?style=plastic)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dictyBase/dicty-components-navbar?style=plastic)
[![Lines of Code](https://badgen.net/codeclimate/loc/dictyBase/dicty-components-navbar)](https://codeclimate.com/github/dictyBase/dicty-components-navbar/code)  
[![Funding](https://badgen.net/badge/NIGMS/Rex%20L%20Chisholm,dictyBase/yellow?list=|)](https://projectreporter.nih.gov/project_info_description.cfm?aid=9476993)
[![Funding](https://badgen.net/badge/NIGMS/Rex%20L%20Chisholm,DSC/yellow?list=|)](https://projectreporter.nih.gov/project_info_description.cfm?aid=9438930)

This is a responsive, themable navbar React library with [Material-UI styled components](https://material-ui.com/).

## Demo

```bash
npm run demo
```

## Build

```bash
# builds files in the src directory to the lib directory using babel
npm run build
```

## Desktop

<img src="https://cloud.githubusercontent.com/assets/20975270/25785803/b6720fee-334e-11e7-90b0-ae5774380fe2.gif" />

## Mobile

<img src="https://cloud.githubusercontent.com/assets/20975270/25785965/1587af36-3352-11e7-92cd-cb9f1973a9b1.gif" />

## Usage

The top level `Navbar` component will take care of rendering all of the sub-components. If you'd like to include a brand, pass it an object like this:

```js
const brand = {
  title: "Hello",
  href: "http://www.google.com",
}
```

Setting the nav items is similar, but comes with a few more options:

```jsx
const items = [
  {
    // Format for a dropdown
    dropdown: true,
    title: "Drop",
    items: [
      {
        name: "Dropdown 1",
        href: "http://www.google.com",
      },
    ],
  },
  {
    // For a normal nav link
    title: "Link 1",
    href: "http://www.google.com",
  },
  {
    // Or any element you want!
    // Custom elements will be flex children of navbar, laid out in a row for desktop and a column for mobile
    element: <div className="custom">custom</div>,
  },
]
```

## Components

### Brand

A large link displayed at the far left of the desktop view and the top left of the mobile view.

#### Props

| Property | Type   | Purpose                                |
| -------- | ------ | -------------------------------------- |
| title    | string | The text to be displayed in the brand. |
| href     | string | The url for the brand to link to.      |

### Dropdown

An animated, collapsible dropdown menu.

#### Props

| Property       | Type     | Purpose                                                                                                        |
| -------------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| open           | boolean  | Determines whether the dropdown is open or closed.                                                             |
| changeDropdown | function | Function responsible for changing the active dropdown.                                                         |
| theme          | object   | An of the component's themable properties (provided if you are also using the `Navbar`).                       |
| title          | string   | The text to be displayed on the dropdown menu's toggle button.                                                 |
| index          | number   | Used by the `Navbar` to track which dropdown is open.                                                          |
| items          | Array    | An array of objects of the form `{name: string, href: string}` with name as the link text and href as the url. |

### Link

A link in the Navbar.

#### Props

| Property | Type   | Purpose                               |
| -------- | ------ | ------------------------------------- |
| title    | string | The text to be displayed in the link. |
| href     | string | The url for the link to link to.      |

### MenuIcon

A menu icon that consists of three horizontal bars. Tansforms into an 'X' when the `open` prop is `true`. Used to toggle the `Navbar` dropdown in the mobile view.

#### Props

| Property | Type     | Purpose                                                                         |
| -------- | -------- | ------------------------------------------------------------------------------- |
| open     | boolean  | Determines whether the icon is three horizontal bars (closed) or an 'X' (open). |
| onClick  | function | Function to be invoked when the icon is clicked.                                |

### Navbar

A top level component for rendering `Link`s and controlling `Dropdown`s. Can be toggled open or closed by the `MenuIcon` in the mobile view.
Note: This component adds an event listener to the document object to detect clicks outside of its `boundingClientRect` in the mobile view.

#### Props

| Property | Type   | Purpose                                                                                          |
| -------- | ------ | ------------------------------------------------------------------------------------------------ |
| brand    | object | An object of the form {title: string, href: string}. Maps to the props of the `Brand` component. |
| items    | array  | An array of objects which determines the nav items. See the usage example for options.           |

## Theming

These components expose a few themable properties, listed below. If you are using the top-level `Navbar` component, you need only provide it with the theme prop. If you are using individual components, each of them will need their own theme prop.

| Property  | Type   | Purpose                                                                                                                                                                             |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| primary   | string | An RGB, hex, or CSS color string that will be the background color for the `Navbar`.                                                                                                |
| secondary | string | An RGB, hex, or CSS color string that will be the background color for hovered links, active `Dropdown`'s, `Dropdown` borders, and the text color for non-hovered `Dropdown` links. |
| text      | string | An RGB, hex, or CSS color string that will be the primary text color for the `Navbar`.                                                                                              |

## Utility Functions

### wasClicked(e: MouseEvent, element: HTMLElement, Ref, or similar) : boolean

This function, given a `MouseEvent` and an element that supports the `getBoundingClientRect` method will return true if the mouse event occurred inside of the element's client area and false if it did not.

## Semantic Versioning

This app has been set up to use [semantic-release](https://github.com/semantic-release/semantic-release)
and [commitizen](https://github.com/commitizen/cz-cli). After adding a new commit
(`git add ...`), use `npm run cz` and follow the prompts to categorize and provide
more details about your commit. Once complete, push your changes to whatever branch
you are working on.

When you are ready to push to prod, you can use `semantic-release` to automate the
release process:

- Merge your changes into `master`
- Run `npx semantic-release`

**Important:** you MUST have an env variable stored for `GH_TOKEN` or `GITHUB_TOKEN`
that contains a GitHub [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/).
You can either pass this in manually when you run the script (i.e. `GH_TOKEN=XXX npx semantic-release`)
or you can [store your env variable locally](https://www.schrodinger.com/kb/1842).

This will look at your most recent commits since the last `git tag` and automatically
determine the appropriate version number for your release.
