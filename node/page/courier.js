
var app = require("express").Router();
const DBPool = require('./connDB.js')

app.get("/api/courier/courierListQuery", (req, res) => {
	let param = req.query
	let searchSql
	if (param.name) {
		searchSql = 'SELECT * from `courierlist` WHERE name = ? order by id ASC'
	} else {
		searchSql = 'SELECT * from `courierlist` order by id ASC'
	}
	DBPool.query(searchSql, [param.name], (results) => {
		let result = results.results
		res.send(result);
	})
});
app.get("/api/courier/queryCourierDetails", (req, res) => {
	let searchSql = 'SELECT * FROM `courierlist` WHERE name = ?'
	let param = req.query
	DBPool.query(searchSql, param.name, (results) => {
		let result = results.results
		res.send(result);
	})
});
app.post('/api/courier/addCourier', (req, res) => {
	let param = req.body
	let addSql =
		'INSERT INTO `courierlist`(`id`,`name`,`phone`) VALUES(?,?,?)';
	let addSqlParams = [new Date().getTime(), param.name, param.phone];
	DBPool.query(addSql, addSqlParams, (results) => {
		res.send("success");
	})
});
app.post('/api/courier/updataCourier', (req, res) => {
	let param = req.body
	DBPool.query('UPDATE courierlist SET ? WHERE id = ?', [param, param.id], (results) => {
		let result = results.results
		res.send("success")
	})
});
app.get('/api/courier/deleteCourier', (req, res) => {
	let param = req.query
	DBPool.query('delete from courierlist where id = ?', [param.id], (results) => {
		let result = results.results
		res.send("success")
	})
});


module.exports = app;