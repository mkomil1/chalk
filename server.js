// import validator from "validator" es6
// const validator = require("validator")  
//  console.log( validator.isEmail("olx@sd.com")); bu function agar keladigan malumot kuchukcha quyilmasa xato beradi
// console.log( validator.isEmpty(" ")); agar xech qnday malumot kelmasa true beradi

import chalk from "chalk"

let text = "hello12"
let text1 = "salom bolajonlar"

console.log(chalk.blue.underline(text, text1), chalk.red.bold.underline(text, text1));