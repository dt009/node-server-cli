/*
 * @Author: duantao-ds
 * @Date: 2018-08-21 19:45:34
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-22 10:56:16
 */

 const exec = require('child_process').exec;

 const info = require('../util/message');
 const path = require('path');

 const co = require('co');
 const ora = require('ora');
 const prompt = require('co-prompt');

 const spinner = ora('正在克隆代码库...');


module.exports = () => {
    co(function *() {
        const url = yield prompt('git 地址: ');

        return new Promise((resolve, reject) => {
            let end = url.indexOf('.git');
            let start = url.lastIndexOf('/');
            let projectName = url.substring(start + 1, end);
            resolve({url, projectName});
        })
    }).then(data => {
       clone(data);
    })
}

const clone = data => {
    let {url, projectName} = data;

    let cmdStr = `git clone ${url} && cd ${projectName}`;

    spinner.start();

    exec(cmdStr, err => {
        download(err, projectName);
    })
}

const download = (err, projectName) => {
    if (err) {
        console.log(err);
        info.fail('请重新运行....');
        process.exit();
    }
    spinner.stop();
    info.suc('克隆完成...');

    let cmdStr = `cd ${projectName} && npm install`;

    info.message('正在下载依赖....');

    exec(cmdStr, err => {
        step(err, projectName);
    })
}

const step = (err, projectName) => {
    if (err) {
        console.log(err);
        info.fail('请重新运行...');
        process.exit();
    }

    info.suc('依赖安装完成..');

    info.message(`cd ${projectName} && npm start`);

    process.exit();
}
