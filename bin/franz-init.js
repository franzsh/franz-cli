'use strict'

const shoutSuccess = require('shout-success')
const shoutError = require('shout-error')
const franzInit = require('franz-init')

module.exports = opts => {
  franzInit(process.cwd(), opts)
    .then(() => shoutSuccess('franz.yml created!'))
    .catch(err => shoutError(err))
}
