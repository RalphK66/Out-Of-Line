import React from 'react';
import { Redirect } from 'react-router-dom'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleText = this.handleText.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);

        this.emailField = React.createRef();
        this.phoneNumberField = React.createRef();
        this.usernameField = React.createRef();
        this.passwordField = React.createRef();
        this.isEmployeeField = React.createRef();
    }

    handleText(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleCheckbox(event) {
        if (event.target.checked) {
            this.setState({[event.target.name]: "on"});
        } else {
            this.setState({[event.target.name]: "off"});
        }
    }

    handleSubmission(event) {
        event.preventDefault();

        console.log(this);
        fetch('http://localhost:9000/signup', {
            method: "POST",
            body: JSON.stringify({
                email: this.state.email,
                phoneNumber: this.state.phoneNumber,
                username: this.state.username,
                password: this.state.password,
                isEmployee: this.state.isEmployee
            }),
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            console.log(response.json());
          })
        .catch(function(err) {
            console.error(err);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmission}>
                <input name="email" type="email" onChange={this.handleText} ref={this.emailField} placeholder="Email"/> <br />
                <input name="phoneNumber" type="text" onChange={this.handleText} ref={this.phoneNumberField} placeholder="Phone Number"/> <br />
                <input name="username" type="text" onChange={this.handleText} ref={this.usernameField} placeholder="Username"/> <br />
                <input name="password" type="password" onChange={this.handleText} ref={this.passwordField} placeholder="Password"/> <br />
                <input name="isEmployee" type="checkbox" defaultChecked={false} onChange={this.handleCheckbox} ref={this.isEmployeeField}/> <label for="employee">Employee</label> <br />
                <input type="submit" value="Submit"/>
            </form>

        );
    }
}

export default SignUp;