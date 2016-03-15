var express = require('express');
var app = require('express')();
var http = require('http');
var server = http.Server(app);
var io = require('socket.io')(server);
var querystring = require('querystring');
var url = require('url');
var util = require('util');

app.use(express.static('app'));

// 在线用户信息
var onlineUsers = [];

io.on('connection', function(socket) {
	console.log('connected ===== successssss');
	socket.on('login', function(user) {
		console.log(user)
		if (onlineUsers.indexOf(user.userName) === -1) {
			onlineUsers.push(user.userName);
			socket.emit('logstate', 'true')
			console.log('在线用户：' + onlineUsers)
			io.emit('loginUser', onlineUsers)
			socket.name = user.userName
		} else {
			socket.emit('logstate', 'same')
		}
	});
	socket.on('msg', function(msg) {
		io.emit('msg', msg);
		var robotMsg = robot(msg.message);
		console.log('robot===' + robotMsg);
		console.log(msg.userName + ':' + msg.message)
	})
	socket.on('disconnect', function() {
		if (onlineUsers.indexOf(socket.name) + 1) {
			console.log('用户退出:' + socket.name)
			var i = onlineUsers.indexOf(socket.name)
			onlineUsers.splice(i, 1);
			socket.broadcast.emit('quit', socket.name);
			io.emit('loginUser', onlineUsers, 'quitinfo')
		}
	});
});

server.listen(3000, function() {
	console.log('listening on *:3000');
});


function robot(mmm) {
	var bodyQueryStr = {
		key: '', // TURING key here
		info: mmm,
		userid: '123',
	};
	var contentStr = querystring.stringify(bodyQueryStr);
	var contentLen = Buffer.byteLength(contentStr, 'utf8');
	console.log(util.format('post data: %s, with length: %d', contentStr, contentLen));
	var options = {
		hostname: 'www.tuling123.com',
		path: '/openapi/api',
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': contentLen
		}
	};
	var msg = null;
	var all = '';
	var req = http.request(options, function(res) {
		res.setEncoding('utf8');
		res.on('data', function(chunk) {
			console.log('response info=====' + chunk);
			msg = JSON.parse(chunk);
			console.log(msg);
			delete msg.code;
			console.log(msg);
			for (var listR in msg) {
				console.log(msg[listR])
				all = all + ' ' + msg[listR]
			}
			io.emit('msg', {
				userName: '穹妹',
				message: all,
			})
		});
		res.on('end', function() {
			console.log('No more data in response.')
		})
	});
	req.on('error', function(e) {
		console.log('problem with request:' + e.message);
	});
	req.write(contentStr);
	req.end();
}