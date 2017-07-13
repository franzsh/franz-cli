#!/usr/bin/env node
'use strict'

const meow = require('meow')
const updateNotifier = require('update-notifier')

const init = require('./franz-init')

const cli = meow(
  `
  Usage:
    $ franz init              Create a franz.yml file

  Example:
    $ franz init

  Options:
    -h, --help                Show help options
    -v, --version             Show version
`,
  {
    alias: {
      h: 'help',
      v: 'version'
    }
  }
)

updateNotifier({ pkg: cli.pkg }).notify()

const run = () => {
  const cmd = cli.input[0]

  switch (cmd) {
    case 'init':
      return init()

    default:
      return cli.showHelp()
  }
}

run()
