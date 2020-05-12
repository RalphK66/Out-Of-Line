import React from "react";
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';

class Tags extends React.Component{
    constructor(props) {
        super(props);

        // Setup fields

        this.handleText = this.handleText.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);

        this.emailField = React.createRef();
        this.phoneNumberField = React.createRef();
        this.nameField = React.createRef();
    }

    // Change the form input into an object where name: value
    handleText(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmission(event) {
        event.preventDefault();

        // Send information to database
        fetch('http://localhost:9000/adminAdd', {
            method: "POST",
            body: JSON.stringify({
                email: this.state.email,
                phoneNumber: this.state.phoneNumber,
                name: this.state.name
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

        window.location.replace("http://localhost:3000/admin");
    }


    render() {
        return(
            <div className="container col-sm-8 shadow" style={{marginTop: '50px', border: '20px solid #AAD2A9', borderRadius: '10px', padding: '20px'}}>
                <Form onSubmit={this.handleSubmission}>
                    <FormGroup>
                        <div className="container shadow" style={{textAlign: 'center', padding: '20px', borderRadius: '10px'}}>
                            <Label style={{color: "#6A6A6A"}} className="display-4">Add person to queue</Label>
                            <Input name="email" type="text" onChange={this.handleText} ref={this.emailField} placeholder="Email"/> <br />
                            <Input name="phoneNumber" type="text" onChange={this.handleText} ref={this.phoneNumberField} placeholder="Phone Number"/> <br />
                            <Input name="name" type="text" onChange={this.handleText} ref={this.nameField} placeholder="Name"/> <br />
                            <Button style={{backgroundColor: '#AAD2A9', fontWeight: 'bolder', border: 'none', width: '150px'}}>Submit</Button>
                        </div>
                    </FormGroup>
                </Form>
            </div>
            )
    }
}

export default Tags;