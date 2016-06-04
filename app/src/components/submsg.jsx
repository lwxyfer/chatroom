import React from 'react';
import ReactDOM from 'react-dom';

export default class SubMsg extends React.Component { 
	handleSubmit(e) {
		e.preventDefault();
		let message = this.refs.message.value.trim();
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
        		<textarea ref="message" placeholder="ctrl+enter \n 支持MD" wrap="hard"></textarea>
        		<input value="BiuBiuBiu" type="submit" className="myButton" />
      		</form>
		);
	}
}

$(document).keydown((e) => {
	var e = e || window.event;
	if (e.ctrlKey && e.keyCode == 13) {
		$('#submsg input').click()
	}
})
