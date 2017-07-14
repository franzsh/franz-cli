'use strict'

const path = require('path')
const yaml = require('yamljs')
const shoutSuccess = require('shout-success')
const shoutError = require('shout-error')
const franzValidate = require('franz-validate')

const hasFile = require('./../lib/utils/has-file')

module.exports = () => {
  const franzFile = path.resolve(process.cwd(), 'franz.yml')
  const dockerFile = path.resolve(process.cwd(), 'Dockerfile')
  const franzExist = hasFile(franzFile)
  const hasDocker = hasFile(dockerFile)

  if (franzExist) {
    const franz = yaml.load(franzFile)
    const valid = franzValidate(franz, { docker: hasDocker })

    return valid
      ? shoutSuccess('franz.yml is valid!')
      : shoutError('franz.yml is invalid!')
  }

  return shoutError("Couldn't find `franz.yml` in your project.")
}
