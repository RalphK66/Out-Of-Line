import React from "react";

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