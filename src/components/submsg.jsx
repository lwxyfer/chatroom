import React from 'react';
import ReactDOM from 'react-dom';

export default class SubMsg extends React.Component { 
	// constructor(props) {
	//    super(props);
	//    this.refs.message.value= data
	//  	}
	handleSubmit(e) {
		e.preventDefault();
		let message = this.refs.message.value.trim();
		if (!message) {
			return;
		}
		//传递给上层： emit(message)
		this.props.onMessageSubmit(message);
		this.refs.message.value = '';
		return;
	}
	render() {
		return (
			<form className="submsg" onSubmit={this.handleSubmit.bind(this)}>
        		<textarea ref="message"></textarea>
        		<input value="发射" type="submit" />
      		</form>
		);
	}
}