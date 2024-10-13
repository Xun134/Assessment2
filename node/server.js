const express = require('express')
const app = express()
const cors = require('cors')
const CryptoJS = require('crypto-js');
const fs = require('fs')
let path = require("path");

//2.设置跨域访问
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

//解决接受到前端req数据为{}的问题
app.use(express.json())
app.use(cors())

let address = require('./page/address.js');//地址信息
app.use(address);
let courier = require('./page/courier.js');//快递员信息
app.use(courier);

module.exports = app
const port = 9013
//3.1 监听端口
app.listen(port, () => {
	console.log(`app is running at http://localhost:${port}`)
})