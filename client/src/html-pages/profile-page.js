import React from "react";
import Cookies from 'js-cookie';

class InQueue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isQueued: false,
            queueNumber: null,
            storeName: null,
            waitTime: 0
        }
    }

    // displayInQueue() {
        
    // }
    
    render() {
        if (Cookies.get('enqueued') === undefined) {
            window.location = '/stores';
        } else if (Cookies.get('enqueued')) {
            this.state.isQueued = true;
        }
        return(
            <div className="container col-sm-8 shadow profile-page">
                <p>Store Name: {this.state.storeName}</p>
                <p>Queue Number: {this.state.queueNumber}</p>
                <p>Wait Time: {this.state.waitTime}</p>
            </div>
        );
    }
}

export default InQueue;