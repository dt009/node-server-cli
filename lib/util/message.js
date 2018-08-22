/*
 * @Author: duantao-ds
 * @Date: 2018-05-22 10:48:12
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-22 10:17:33
 */

const chalk = require('chalk');

module.exports = {
    suc: msg => console.log(chalk.green.bold(`\n ✅   ${msg}\n`)),
    fail: msg => console.log(chalk.red.bold(`\n ❌   ${msg}\n`)),
    warning: msg => console.log(chalk.yellow.bold(`\n ❗️   ${msg}\n`)),
    message: msg => console.log(chalk.blue.bold(msg))
}
