'use strict'

const path = require('path')
const fs = require('fs')
const yaml = require('yamljs')
const shoutSuccess = require('shout-success')
const shoutError = require('shout-error')

const template = require('./../lib/template')

module.exports = () => {
  const franzFile = path.resolve(process.cwd(), 'franz.yml')
  const ctx = yaml.stringify(template, 4, 2)

  fs.writeFile(franzFile, ctx, 'utf8', err => {
    if (err) {
      return shoutError(err)
    }

    shoutSuccess('franz.yml created!')
  })
}
