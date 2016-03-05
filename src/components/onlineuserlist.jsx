import React from 'react';
import ReactDOM from 'react-dom';

export default class OnlineUserList extends React.Component {
	render() {

		return (
			<div>
			<span>在线人数：{ this.props.userNum }</span>
				<div className="userList">
				<span>在线用户列表：</span>
					<ul>
        {this.props.userList.map((result) => {
           return <MessageList key={result} data={result}/>;
        })}
      				</ul>
				</div>
				<div>{ this.props.name }</div>
			</div>
		)
	}
}

class MessageList extends React.Component {
	render() {
		return (
			<li>{ this.props.data }</li>
		)
	}
}
		// var userNodes = this.props.userList.map((onuser) => {
		// 	return (<li>{onuser}</li>)
		// });