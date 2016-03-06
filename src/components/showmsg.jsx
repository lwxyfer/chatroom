import React from 'react';
import ReactDOM from 'react-dom';

export default class ShowMsg extends React.Component {
	render() {
		return (
			<div className="showmsg">
			<span>消息列表</span>
				{this.props.messageList.map((msg) => {
           return <MessageList key={msg.token} data={ msg }/>;
        })}
			</div>
			)
	}
}
class MessageList extends React.Component {
	render() {
		return (
			<div>
				<span>{ this.props.data.userName } ： </span>
				<p className="usermsg">{ this.props.data.message }</p>
			</div>
			)
	}
}