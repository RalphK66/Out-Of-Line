import React from 'react';
import firebase from '../firebase/firebase'
import { Link } from 'react-router-dom';

class SignInGoogle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }

        this.handleSubmission = this.handleSubmission.bind(this);
    }
    
    handleSubmission(event) {
        event.preventDefault();

        this.props.firebase
    }
    
}