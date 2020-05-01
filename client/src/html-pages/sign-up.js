import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {newUser:{}};

        this.handleText = this.handleText.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);

        this.emailField = React.createRef();
        this.phoneNumberField = React.createRef();
        this.usernameField = React.createRef();
        this.passwordField = React.createRef();
    }

    handleText(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmission(event) {
        event.preventDefault();

        // POST http://localhost:3000/signup 404 (Not Found) <- there is an error with the route here
        fetch('/signup', {
            method: "POST",
            body: JSON.stringify({
                email: this.emailField.current.value,
                phoneNumber: this.phoneNumberField.current.value,
                username: this.usernameField.current.value,
                password: this.passwordField.current.value
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
                <input  name="email" type="text" onChange={this.handleText} ref={this.emailField} placeholder="Email"/> <br />
                <input  name="phoneNumber" type="text" onChange={this.handleText} ref={this.phoneNumberField} placeholder="Phone Number"/> <br />
                <input  name="username" type="text" onChange={this.handleText} ref={this.usernameField} placeholder="Username"/> <br />
                <input  name="password" type="text" onChange={this.handleText} ref={this.passwordField} placeholder="Password"/> <br />
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default SignUp;