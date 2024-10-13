// node建立接口线程池
class DBPool {
	constructor() {
		this.mysql = require("mysql");
		this.config = {
			host: '101.200.179.180', //数据库服务器的地址
			port: 3306, //端口号
			user: 'root', //连接数据库的用户名
			password: 'Chaser%2021-09-24', //连接数据库的密码
			database: 'wuliu', //数据库名
			connectionLimit: 10, //用于指定连接池中最大的链接数，默认属性值为10.
			multipleStatements: false, //是否允许执行多条sql语句，默认值为false
			waitForConnections: true, //是否排队从连接池获取数据库链接
		};
		//1.创建mysql连接对象
		this.pool = this.mysql.createPool(this.config);
	}
	query(sql, params, callBack) {
		// console.log(this.config)
		//2.打开
		this.pool.getConnection((err, connection) => {
			if (err) {
				console.log("数据库连接失败");
				throw err;
			}
			// console.log("数据库连接成功");
			//3.执行sql查询
			connection.query(sql, params, (err, results, fields) => {
				//4.释放连接
				connection.release();
				//5.销毁连接： 当连接不需要使用且需要从连接池中移除的时候，我们可以使用destory方法，该方法使用如下所示：
				// connection.destroy();
				if (err) {
					console.log("数据库操作失败");
					throw err;
				}
				// console.log("数据库操作成功");
				callBack && callBack({ results, fields });
			});
		});
	}

	queryAsync(sql, params) {
		const self = this;
		return new Promise((resolve, reject) => {
			//2.获取连接
			this.pool.getConnection((err, connection) => {
				if (err) {
					console.log("数据库连接失败");
					reject(err);
					return;
				}
				console.log("数据库连接成功");
				//3.执行sql查询
				connection.query(sql, params, (err, results, fields) => {
					connection.release(); //释放链接
					// connection.destroy();//销毁链接
					if (err) {
						console.log("数据库操作失败");
						reject(err);
						return;
					}
					console.log("数据库操作成功");
					resolve({
						results,
						fields,
					});
				});
			});
		});
	}
}

module.exports = new DBPool();