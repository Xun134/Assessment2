
var app = require("express").Router();
const DBPool = require('./connDB.js')

//查询地址列表
app.get("/api/address/addressListQuery", (req, res) => {
	let param = req.query
	let searchSql = 'SELECT * from `addresslist`order by id ASC'
	DBPool.query(searchSql, [param.userName, param.id], (results) => {
		let result = results.results
		res.send(result);
	})
});
//根据id查询地址详情（暂未使用）
app.get("/api/address/queryaddressDetails", (req, res) => {
	let searchSql = 'SELECT * FROM `addresslist` WHERE name = ?'
	let param = req.query
	DBPool.query(searchSql, param.name, (results) => {
		let result = results.results
		res.send(result);
	})
});
//添加地址数据
app.post('/api/address/addaddress', (req, res) => {
	let param = req.body
	console.log(param);
	if(param.ifStar){
		DBPool.query('UPDATE addresslist SET ifStar = ? WHERE ifStar = ?', ['0', '1'], (results) => {
			console.log('默认地址更新成功！！');
		})
	}
	let addSql =
		'INSERT INTO `addresslist`(`id`,`name`,`phone`,`address`,`address1`,`ifStar`,`userName`) VALUES(?,?,?,?,?,?,?)';
	let addSqlParams = [new Date().getTime(), param.name, param.phone, param.address, param.address1, param.ifStar, param.userName];
	DBPool.query(addSql, addSqlParams, (results) => {
		res.send("添加数据成功！！");
	})
});
//修改地址数据
app.post('/api/address/updataaddress', (req, res) => {
	let param = req.body
	if(param.ifStar){
		DBPool.query('UPDATE addresslist SET ifStar = ? WHERE ifStar = ?', ['0', '1'], (results) => {
			console.log('默认地址更新成功！！');
		})
	}
	DBPool.query('UPDATE addresslist SET ? WHERE id = ?', [param, param.id], (results) => {
		let result = results.results
		res.send("修改数据成功！！")
	})
});
//删除地址数据
app.get('/api/address/deleteaddress', (req, res) => {
	let param = req.query
	DBPool.query('delete from addresslist where id = ?', [param.id], (results) => {
		let result = results.results
		res.send("数据删除成功！！")
	})
});


module.exports = app;