import React, {Component} from 'react'

/*creating Login Form*/

export default class Login extends Component {
    render() {              /*the html that goes inside*/
        return(
        <div>
            <input type="username" placeholder="username">Username</input>
            <input type="password" placeholder="password">Password</input>
            <h3>Log In</h3>
        </div>
        )
    }
};