/**
 * Created by lenovo on 2016/12/7.
 */

"use strict";
//引用模块
let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')

let module4 = require('uniq')

module1.foo();
module2();
module3.bar();

console.log(module4([1,2,3,2,1]));


