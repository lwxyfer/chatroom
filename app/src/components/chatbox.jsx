import React from 'react';
import ReactDOM from 'react-dom';
import OnlineUserList from './onlineuserlist.jsx';
import SubMsg from './submsg.jsx';
import ShowMsg from './showmsg.jsx';
import { socket ,logStateInfo,onlineUser,theUserName} from './login.jsx'

export default class ChatBox extends React.Component { 
	constructor() {
		super()
		this.state = {
			onlineuser: [],
			message: [],
		}
	}
	getEverything() {
		let msgList = [];
		socket.on('loginUser', (onuser, info) => {
			console.log('在线: ' + onuser + '   人数:' + onuser.length);
			this.setState({
				onlineuser: onuser,
				onlinenum: onuser.length,
				newlogin: onuser[onuser.length - 1] + "加入了",
			})
			if (!info) {
				$('#loginTooltip').slideDown("slow", () => {
					setTimeout(() => {
						$('#loginTooltip').fadeOut('fast')
					}, 3000)
				})
			}
			let a = 1;
			let m = $('#mobMenu');
			let u = $('#userlist');
			m.click(() => {
				if (a === 1) {
					u.animate({
						marginLeft: '3%'
					}, 'fast')
					a = 0;
				} else {
					u.animate({
						marginLeft: '-30%'
					}, 'fast');
					a = 1;
				}
			})
		})
		socket.on(`msg`, msg => {
			console.log('战舰状态:', msg.message, msg.userName);
			msg.token = new Date().getTime();
			msgList.push(msg);
			this.setState({
				'message': msgList,
			})
			let allS = document.querySelectorAll('#showmsg span')
			for (let i = 0; i < allS.length; i++) {
				if (allS[i].innerHTML === theUserName) {
					allS[i].nextSibling.className = "thisuser"
				}
			}
			$('#showmsg').scrollTop($('#showmsg')[0].scrollHeight)
		})
		socket.on('quit', quitinfo => {
			console.log('用户退出:' + quitinfo);
			this.setState({
				quituser: quitinfo + "退出了",
			})
			$('#quitTooltip').slideDown("slow", () => {
				setTimeout(() => {
					$('#quitTooltip').fadeOut('fast')
				}, 3000)
			})
		})
	}
	componentDidMount() {
		this.getEverything();
	}
	handleMessageSubmit(message) {
		socket.emit(`msg`, {
			'message': message,
			'userName': theUserName,
		})
	}
	render() {  
		return (<div id="chatroom">
				<div id="msgbox">
					<OnlineUserList userList={ this.state.onlineuser } userNum={ this.state.onlinenum} />
					<ShowMsg messageList={ this.state.message } newlogin={ this.state.newlogin } quitUser={ this.state.quituser }/>
				</div>
				<SubMsg onMessageSubmit={ this.handleMessageSubmit.bind(this) } />
				</div>)
	}
}