var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('app'));

// 注册用户直接保存
var legalUsers = {
    '习近平': '123',
    '奥巴马': '123',
    '致远星': '123',
    '战列舰': '123',
    '卡特': '123',
    '法拉利': '123',
    '自行车': '123',
    '轮子': '123',
    '汽车': '123',
    '火箭': '123',
  }
  // 在线用户信息
var onlineUsers = [];

io.on('connection', function(socket) {
  console.log('connected ===== successssss');
  socket.on('login', function(user) {
    console.log(user)
    if (legalUsers.hasOwnProperty(user.userName) && legalUsers[user.userName] == user.userPassword) {
      if (onlineUsers.indexOf(user.userName) === -1) {
        onlineUsers.push(user.userName);
        socket.emit('logstate', 'true')
        console.log('在线用户：' + onlineUsers)
        io.emit('loginUser', onlineUsers)
        socket.name = user.userName
      } else {
        socket.emit('logstate', 'same')
      }
    } else {
      socket.emit('logstate', 'false')
    }
  });
  socket.on('msg', function(msg) {
    io.emit('msg', msg);
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

http.listen(3000, function() {
  console.log('listening on *:3000');
});