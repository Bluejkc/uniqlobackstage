var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

//npm文档方法
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'uniqlo';

var ObjectId = require('mongodb').ObjectID;

//连接前端
router.get('/user',(req, res,next) => {
	//cors跨域解决
	res.header("Access-Control-Allow-Origin", "*");
	// Use connect method to connect to the server
	var user = req.query.user;
	var pass = req.query.pass;
	console.log(user,pass);
//	console.log(req);
	MongoClient.connect(url, function(err, client) {
		assert.equal(null, err);
		const db = client.db(dbName);
		//定义函数接收mongodb数据
		insertDocuments(db, function() {
			client.close();
		});
	});
	const insertDocuments  =   function(db,  callback)  {   
//		表名
		const  collection  =  db.collection('LoginSign');   
//		  查询表中数据
		collection.find({username:user,password:pass}).toArray(function(err,  docs)  {    
			assert.equal(err,  null);        
//			返回数据
			console.log(docs);
			if(docs==''){
				res.send("no");
			}else{
//				var name = docs.username;
//				var mima = docs.password;
//				var data = {name:name,mima:mima,yes:"yes"}
				res.send("yes");
			}
			callback(docs);  
		});
	}
})
module.exports = router;