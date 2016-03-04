import React from 'react';
import ReactDOM from 'react-dom';

export default class ChatMsg extends React.Component { 
	// constructor(props) {
	//    super(props);
	//    this.state = { messsage:''}
	//  	}
	handleSubmit(e) {
		e.preventDefault();
		var message = this.refs.message.value.trim();
		if (!message) {
			return;
		}
		console.log(message);
		//传递给上层： emit(message)
		this.props.onMessageSubmit({
			message:message,
		});
		this.refs.message.value = '';
		return;
	}
	render() {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        		<textarea ref="message"></textarea>
        		<input value="发射" type="submit" />
      		</form>
		);
	}
}