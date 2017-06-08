const chalk = require('chalk')

module.exports = msg => {
  console.log(`${chalk.cyan('> Success!')} ${msg}`)
}
