'use strict'

const fs = require('fs')

module.exports = fileName => {
  return fs.existsSync(fileName)
}
