#!/usr/bin/env node
'use strict'

const meow = require('meow')
const updateNotifier = require('update-notifier')

const init = require('./franz-init')
const validate = require('./franz-validate')

const cli = meow(
  `
  Usage:
    $ franz init              Create a franz.yml file
    $ franz validate          Validate a franz.yml file

  Example:
    $ franz init
    $ franz init --docker
    $ franz validate

  Options:
    -d, --docker              Init franz for docker
    -h, --help                Show help options
    -v, --version             Show version
`,
  {
    alias: {
      d: 'docker',
      h: 'help',
      v: 'version'
    }
  }
)

updateNotifier({ pkg: cli.pkg }).notify()

const run = () => {
  const cmd = cli.input[0]
  const opts = {}

  switch (cmd) {
    case 'init':
      if (cli.flags.d) {
        opts.docker = true
      }
      return init(opts)

    case 'validate':
      return validate()

    default:
      return cli.showHelp()
  }
}

run()
