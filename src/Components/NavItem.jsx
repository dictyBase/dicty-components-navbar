import React from 'react'



export default class NavItem extends React.Component {
    displayName = 'Navigation bar item'

    static propTypes = {
        link: React.PropTypes.string,
        title: React.PropTypes.string,
        style: React.PropTypes.object,
        itemStyle: React.PropTypes.object
    }

    getStyles = () => {
        return {
            base: {
                position: 'relative',
                display: 'block',
                boxSizing: 'border-box',

                '@media (min-width: 768px)': {
                    float: 'left'
                }
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
    }

    render() {
        const defStyle = this.getStyles()
        const {style, link, title, itemStyle} = this.props
        return (
          <li ref="list" style={ [defStyle.base, style && style] }>
              <a ref="link"
                href={ link }
                style={ [defStyle.link, itemStyle && itemStyle] }>
                { title }
              </a>
          </li>
        )
    }
}
