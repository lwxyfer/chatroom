import React from 'react';
import ReactDOM from 'react-dom';

export default class OnlineUserList extends React.Component {
    render() {

        return (
            <div id="userlist">
                <span>在线人数：{this.props.userNum}</span>
                <div>
                    <span>在线用户：</span>
                    <ul>
                        {this.props.userList.map((result) => {
                            return <OnlineLists key={result} data={result}/>;
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

class OnlineLists extends React.Component {
    render() {
        return (
            <li>
                <span>{this.props.data}</span>
            </li>
        )
    }
}