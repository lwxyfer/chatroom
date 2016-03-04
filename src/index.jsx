import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello.jsx';
import ChatMsg from './components/message.jsx';

let socket = io.connect('ws://localhost:8000');
let logStateInfo = true;
let theUserName = null;

class LogIn extends React.Component {
	constructor() {
		super()
		socket.on(`logstate`, info => {
			if(info === 'false') {
				logStateInfo = false
				alert('嘀嘀嘀，学生卡，账号余额不足，请充值')
			} else if(info === 'same') {
				logStateInfo = false
				alert('报告长官，此账号已登录')
			} else {
				ReactDOM.render(<Box />, document.getElementById('chat'));
			}
			console.log(info)
		})
	}
	logIn(e) {
		e.preventDefault();
		var userName = this.refs.userName.value.trim();
		var userPassword = this.refs.userPassword.value.trim();
		theUserName = userName;
		socket.emit('login',{
			'userName':userName,
			'userPassword':userPassword,
		})
		return;
	}
	render() {
		return (
			<div>
			<h1>遇见你真好</h1>
			<form className="commentForm" onSubmit={this.logIn.bind(this)} >
        		<input type="text" placeholder="账号" ref="userName" />
        		<input type="text" placeholder="密码" ref="userPassword" />
        		<input value="发射" type="submit" />
      		</form>
      		</div>
		);
	}
}
ReactDOM.render(<LogIn />, document.getElementById('chat'));


// if(logStateInfo) {
// 	ReactDOM.render(<Box />, document.getElementById('chat'));
// }

class Box extends React.Component { 
	// constructor() {
	// 	super()

		socket.on(`msg`, msg => {
			console.log(msg)
		})
	}
	handleMessageSubmit(message) {
		socket.emit(`msg`, {
			'message':message,
			'userName': theUserName,
		})
	}
	render() {  
		return <div>
				<Hello />
				<ChatMsg onMessageSubmit={ this.handleMessageSubmit.bind(this) } />
				</div> 
	}
}