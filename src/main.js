// 项目的js入口文件

console.log('OK');

import './css/index.css'

import './css/index.scss'

import './css/index.less'

// 注意：如果要通过路径的形式，去引入 node_modules 中相关的文件，可以直接省略路径前面的 node_modules 这一层目录，直接写 包 的名称，然后后面
// 跟上具体的文件路径，不写这层目录，默认就会去 node_modules 中查找
import 'bootstrap/dist/css/bootstrap.css'