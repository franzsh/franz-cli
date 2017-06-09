const inquirer = require('inquirer')

module.exports = (message, prompts) => {
  console.log(`\n${message}\n`)
  prompts.forEach(prompt => {
    prompt.type = 'list'
    return prompt
  })

  return inquirer.prompt(prompts)
}
