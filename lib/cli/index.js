/*
 * @Author: duantao-ds
 * @Date: 2018-08-21 19:03:52
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-21 19:55:27
 */

const program = require('commander');

const packageInfo = require('../../package.json');


program
    .version(packageInfo.version)
    .description('自己 linux 的工具');


program
    .command('download [filename]')
    .description('下载文件')
    .alias('d')
    .action((filename) => {
        console.log('正在下载', filename);
    })

program
    .command('clone')
    .description('使用 git 克隆一个仓库')
    .alias('c')
    .action(url => {
        require('../cmd/clone')();
    })


program.parse(process.argv);

if (!program.args.length) {
    program.help()
}
