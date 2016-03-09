import React from 'react';
import ReactDOM from 'react-dom';

export default class SubMsg extends React.Component { 
	handleSubmit(e) {
		e.preventDefault();
		let message = this.refs.message.value;
		if (!message) {
			return;
		}
		this.props.onMessageSubmit(message);
		this.refs.message.value = '';
		return;
	}
	render() {
		return (
			<form id="submsg" onSubmit={this.handleSubmit.bind(this)}>
        		<textarea ref="message"></textarea>
        		<input value="发射" type="submit" />
      		</form>
		);
	}
}