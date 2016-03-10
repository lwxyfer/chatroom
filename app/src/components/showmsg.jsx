import React from 'react';
import ReactDOM from 'react-dom';

export default class ShowMsg extends React.Component {
	render() {
		return (
			<div id="showmsg">
			<h3 id="login" className="tooltip">{this.props.newlogin}</h3>
			<h3 id="quit" className="tooltip">{this.props.quitUser}</h3>
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
				<span>{ this.props.data.userName }</span>
				<p className={this.props.pClass}>{ this.props.data.message }</p>
			</div>
		)
	}
}