import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';
import OnlineUserList from './components/onlineuserlist.jsx';
import SubMsg from './components/submsg.jsx';
import ShowMsg from './components/showmsg.jsx';

let socket = io.connect('http://localhost:3000'); 
let logStateInfo = true; 
let theUserName = null; 
let onlineUser = null;

socket.on(`logstate`, info => {
	if (info === 'false') {
		logStateInfo = false
		alert('嘀嘀嘀，学生卡，账号或者密码不正确')
	} else if (info === 'same') {
		logStateInfo = false
		alert('报告长官，此账号已登录')
	} else {
		console.log('登陆L号飞船，起飞')
		ReactDOM.render(<Box />, document.getElementById('chat'));
	}
})

class LogIn extends React.Component {
	logIn(e) {
		e.preventDefault();
		var userName = this.refs.userName.value.trim();
		var userPassword = this.refs.userPassword.value.trim();
		theUserName = userName;
		socket.emit('login', {
			'userName': userName,
			'userPassword': userPassword,
		})
		return;
	}
	render() {
		return (
			<div>
			<h1>你好</h1>
			<p> 自定义账号:</p>
			<p> '习近平': '123',
    '奥巴马': '123',
    '致远星': '123',
    '战列舰': '123',
    '卡特': '123',
    '法拉利': '123',
    '自行车': '123',
    '轮子': '123',
    '汽车': '123',
    '火箭': '123',</p>
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

class Box extends React.Component { 
	constructor() {
		super()
		this.state = {
			onlineuser: [],
			message: [],
		}
	}
	getUser() {
		let msgList = [];
		socket.on('loginUser', onuser => {
			console.log('在线用户: ' + onuser);
			console.log('人数' + onuser.length);
			this.setState({
				onlineuser: onuser,
				onlinenum: onuser.length,
				newlogin: onuser[onuser.length - 1] + "加入了",
			})
			let x = document.getElementById('login');
			x.style.display = 'block';
			setTimeout(() => {
				x.style.display = 'none';
			}, 5000)
		})
		socket.on(`msg`, msg => {
			console.log('战舰状态:', msg.message, msg.userName);
			msg.token = new Date().getTime();
			msgList.push(msg);
			this.setState({
				'message': msgList
			})
		})
		socket.on('quit', quitinfo => {
			console.log('用户退出:' + quitinfo);
			this.setState({
				quituser:quitinfo + "退出了",
			})
			let y = document.getElementById('quit');
			y.style.display = 'block';
			setTimeout(() => {
				y.style.display = 'none';
			}, 5000)
		})
	}
	componentDidMount() {
		this.getUser();
	}
	handleMessageSubmit(message) {
		socket.emit(`msg`, {
			'message': message,
			'userName': theUserName,
		})
	}
	render() {  
		return (<div className="chatroom">
				<div className="header"><h2>CHAT Space V:0.1.0</h2></div>
				<div className="msgbox">
					<OnlineUserList userList={ this.state.onlineuser } userNum={ this.state.onlinenum} />
					<ShowMsg messageList={ this.state.message } newlogin={ this.state.newlogin } quitUser={ this.state.quituser }/>
				</div>
				<SubMsg onMessageSubmit={ this.handleMessageSubmit.bind(this) } />
				</div>)
	}
}