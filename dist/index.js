
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dicty-components-navbar.cjs.production.min.js')
} else {
  module.exports = require('./dicty-components-navbar.cjs.development.js')
}
