import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello.jsx';
import ChatMsg from './components/input.jsx';


// class LogIn extends React.Component {

// }
// ReactDOM.render(<LogIn />, document.getElementById('chat'));

let socket = io.connect('ws://localhost:8000');

// function init() {
// 	// LonIn 传出数据到 IO ，再检测数据合法性。
// 	var socket = io.connect('ws://localhost:8000');
// 	socket.emit('test', {
// 		password: 'password',
// 		username: 'usename',
// 	});
// 	// 获取判断结果，判断用户是否是合法用户
// }
// // 设置当前用户，
// init();

class Box extends React.Component { 
	constructor() {
		super()

		socket.on(`testSend`, data => {
			this.setState({
				data
			})
			console.log(data)
		})
	}
	handleMessageSubmit(message) {
		socket.emit(`test`, message)
	}
	// handleMessageSubmit(msg) {
	// 	console.log(msg)
	// }

	// 自动调用
	// componentDidMount() {
	// 	this.loadCommentsFromServer();
	// 	setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
	// }
	render() {  
		return <div>
				<Hello />
				<ChatMsg onMessageSubmit={ this.handleMessageSubmit.bind(this) } />
				</div> 
	}
}
ReactDOM.render(<Box />, document.getElementById('chat'));