import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import { Form, FormGroup, Input, Button, Label } from "reactstrap";

const login = () => {
  return (

    <div className="container col-sm-8 shadow" style={{marginTop: '50px', border: '20px solid #AAD2A9', borderRadius: '10px', padding: '20px'}}>
    <Form>
        <FormGroup>
            <div className="container shadow" style={{textAlign: 'center', padding: '20px', borderRadius: '10px'}}>
                <Label style={{color: "#6A6A6A"}} className="display-4">Login</Label>
                <Input type="username" name="username" id="Username" placeholder="username" bsSize="lg"/> <br/>
                <Input type="password" name="password" id="Password" placeholder="password" bsSize="lg"/><br/>
                <Button style={{backgroundColor: '#AAD2A9', fontWeight: 'bolder', border: 'none', width: '150px'}}>Login</Button><br/>

            </div>

        </FormGroup>

    </Form>
</div>
  );
};

export default login;
