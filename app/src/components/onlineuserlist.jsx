import React from 'react';
import ReactDOM from 'react-dom';

export default class OnlineUserList extends React.Component {
	render() {

		return (
			<div className="userlist">
			<span>在线人数：{ this.props.userNum }</span>
				<div className="userlists">
				<span>在线用户：</span>
					<ul>
        {this.props.userList.map((result) => {
           return <OnlineList key={result} data={result}/>;
        })}
      				</ul>
				</div>
			</div>
		)
	}
}

class OnlineList extends React.Component {
	render() {
		return (
			<li>{ this.props.data }</li>
		)
	}
}
		// var userNodes = this.props.userList.map((onuser) => {
		// 	return (<li>{onuser}</li>)
		// });