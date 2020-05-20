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

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + '/something')
        .then(response =>  response.json())
        .then(data => {
            this.setState({
                queueNumber: data.queueNumber,
                storeName: data.storeName,
                waitTime: data.waitTime,
                isQueued: true
            })
        });
    }

    
    render() {
        return(
            <div className="container col-sm-8 shadow profile-page">
                <p>Store Name: {this.state.storeName}</p>
                <p>Queue Number: {this.state.storeName}</p>
                <p>Store Name: {this.state.storeName}</p>
            </div>
        );
    }
}

export default InQueue;