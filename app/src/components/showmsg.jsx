import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

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
	// 这里使用marked，有BUG ，待解决
	// markDown() {
	// 	var mark = marked(this.props.data.message.toString());
	// 	console.log(mark);
	// 	return {__html: mark }
	// }
	render() {
		console.log(this.props.data.message,'con');
		console.log(typeof this.props.data.message,'con');
		console.log(this.props.data.message.toString(),'con');
		console.log(this.props.data.message.indexOf('\n'),'posiiton'); // \n 是不可见的,那么换行解决了。
		// this.props.data.message = this.props.data.message.replace('\n','<br>')
		return (
			<div>
				<span>{ this.props.data.userName }</span>
				<div className='userMsg' dangerouslySetInnerHTML= {{ __html:marked(this.props.data.message) }} ></div>
			</div>
		)
	}
}