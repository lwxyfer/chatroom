import React from 'react';
import ReactDOM from 'react-dom';

export default class OnlineUserList extends React.Component {
	render() {

		return (
			<div id="userlist">
				<span>在线人数：{ this.props.userNum }</span>
				<div>
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