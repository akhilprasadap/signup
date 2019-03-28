
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
class SignUp extends Component {
    constructor(props) {

        super(props);

        this.state = {

        }
    }

    signup = () => {
        var username = this.refs.username.value;
        var email = this.refs.email.value;
        var password = this.refs.password.value;

        axios.post('https://dev132-cricket-live-scores-v1.p.rapidapi.com', {
                username: username,
                password: password,
                email: email,
                usertype: '1'
            })
            .then(function(response) {
                console.log(response);
                if (response.data.message) { 
                    alert(response.data.message); 
                }
                if (response.data.errorMsg) { 
                    alert(response.data.errorMsg); 
                }

            })
            .catch(function(error) {
                console.log(error);
            });

    }

render() {
        return (
                <div>
         <div className="signupform">
         <h1>SIGNUP</h1>
            <table>
                <tr>
                    
                    <td><input type="text" ref="username" placeholder="UserName" minLength="8"/></td>
                </tr>
                <tr>
                    
                    <td><input type="email" ref="email" placeholder="Email" /></td>
                </tr>
                <tr>
                    
                    <td><input type="password" ref="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"  /></td>
                </tr>
                
                <tr>                
                    <td><button onClick={this.signup}>Login</button></td>
                </tr>

            </table>
         </div>
      </div>
    );
}
}
export default SignUp;