import React from 'react'



export default class NavbarDropdown extends React.Component {
    displayName = 'Navigation bar dropdown button'

    static propTypes = {
        name: React.PropTypes.string,
        style: React.PropTypes.object,
        itemStyle: React.PropTypes.object,
        index: React.PropTypes.number,
        activeIndex: React.PropTypes.number,
        parentCallBack: React.PropTypes.func
    }

    state = {
        open: false
    }

    componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick)
    }

    componentWillReceiveProps(nextProps) {
        const {index, activeIndex} = nextProps
        if (index === activeIndex) {
            if (this.state.open) {
                this.setState({open: false})
              // when all the dropdowns are closed, activeIndex is set to -1
                this.props.parentCallBack(-1)
            } else {
                this.setState({open: true})
            }
        } else {
            this.setState({open: false})
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick)
    }

    getStyles = () => {
        let styles = {
            dropdown: {
                position: 'relative',
                display: 'block',
                boxSizing: 'border-box',

                '@media (min-width: 768px)': {
                    float: 'left'
                }
            },
            caret: {
                display: 'inline-block',
                width: '0px',
                height: '0px',
                marginLeft: '2px',
                verticalAlign: 'middle',
                borderTop: '4px dashed',
                borderRight: '4px solid transparent',
                borderLeft: '4px solid transparent'
            },
            link: {
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '15px',
                paddingRight: '15px',
                lineHeight: '20px',
                position: 'relative',
                display: 'block',
                boxSizing: 'border-box',
                textDecoration: 'none',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: '18px',

                ':hover': {
                    color: '#ccffcc'
                },

                ':focus': {
                    color: '#ffffff',
                    backgroundColor: '#112968'
                },

                '@media (min-width: 768px)': {
                    paddingTop: '15px',
                    paddingBottom: '15px'
                }
            }
        }
        return styles
    }

    renderChildren = () => {
        const {children, index, activeIndex} = this.props
        let active = false
        // this particular dropdown is clicked
        if (index === activeIndex) {
            active = true
        }
        const newChildren = React.Children.map(children, (child) => {
            return React.cloneElement(child,
                {
                    open: this.state.open,
                    active: active
                })
        })
        return newChildren
    }

    handleDocumentClick = () => {
        if (this.state.open) {
            this.setState({open: false})
          // when all the dropdowns are closed, activeIndex is set to -1
            this.props.parentCallBack(-1)
        }
    }

    handleDropdownClick = (e) => {
        const {index, parentCallBack} = this.props
        e.preventDefault()
        e.nativeEvent.stopImmediatePropagation()
        parentCallBack(index)
    }

    render() {
        const {style, name, itemStyle} = this.props
        const defStyle = this.getStyles()
        return (
          <li ref= "dropdown" style={ [defStyle.dropdown, style && style] }>
              <a ref="link" onClick={ this.handleDropdownClick } href="#"
                style={ [defStyle.link, itemStyle && itemStyle] }>
                  { name }{ ' ' }
                  <b style={ [defStyle.caret] }></b>
              </a>
              { this.renderChildren() }
          </li>
        )
    }
}
