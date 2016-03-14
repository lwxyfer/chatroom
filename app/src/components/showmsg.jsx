import React from 'react';
import ReactDOM from 'react-dom';

export default class ShowMsg extends React.Component {
	render() {
		return (
			<div id="showmsg">
			<span id="loginTooltip" className="tooltip">{this.props.newlogin}</span>
			<span id="quitTooltip" className="tooltipa">{this.props.quitUser}</span>
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