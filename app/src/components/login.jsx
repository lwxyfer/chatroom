import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';
import ChatBox from './chatbox.jsx';

// 初始
export let socket = io.connect('http://localhost:3000');
export let logStateInfo = true;
export let onlineUser = null;
export let theUserName = null;

export default class LogIn extends React.Component {
	logIn(e) {
		e.preventDefault();
		let theUserName = null;
		let userName = this.refs.userName.value.trim();
		let userPassword = this.refs.userPassword.value.trim();
		theUserName = userName;
		socket.emit('login', {
			'userName': userName,
			'userPassword': userPassword,
		})
		return;
	}
	render() {
		return (
			<div id="loginbox">
			<h1>你好</h1>
			<form onSubmit={this.logIn.bind(this)} >
        		<input type="text" placeholder="ID" ref="userName" />
        		<input type="text" placeholder="输入：123" ref="userPassword" />
        		<input value="嗨起来" type="submit" />
      		</form>
      		</div>
		);
	}
}

// 登录状态确定
socket.on(`logstate`, info => {
	if (info === 'false') {
		logStateInfo = false
		alert('嘀嘀嘀，学生卡，账号或者密码不正确')
	} else if (info === 'same') {
		logStateInfo = false
		alert('报告长官，此账号已登录')
	} else {
		console.log('登陆L号飞船，起飞')
		// 确认登录，聊天窗口渲染
		ReactDOM.render(<ChatBox />, document.getElementById('chat'));
	}
});