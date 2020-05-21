import React from "react";
import Cookies from 'js-cookie';

class InQueue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isQueued: false,
            queueNumber: null,
            storeName: null,
            waitTime: 0,
            setStateOnce: 0
        }

        this.displayInQueue = this.displayInQueue.bind(this);
    }

    getQueueNumber() {
        fetch(process.env.REACT_APP_API_URL + "/queue/get-queue-number", {
          method: "POST",
          body: JSON.stringify({
            user_id: Cookies.get('id')
          }),
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              return "Errorrororororororor";
            }
          })
          .then(data => {
            if (this.state.setStateOnce === 0) {
              this.setState({queueNumber: data.queue_number});  
              console.log(data.queue_number);
              this.state.setStateOnce = 1;
              console.log(this.state.setStateOnce);
            }
        })
          .catch(err => console.log(err));
      }
    

    displayInQueue() {
        this.state.storeName = Cookies.get("store_id");
        this.getQueueNumber();
    }
    
    render() {
      let renderedOnce = 0;

      if (renderedOnce === 0) {
        this.displayInQueue();
      }

        if (Cookies.get('enqueued') === undefined) {
            window.location = '/stores';
        } else if (Cookies.get('enqueued')) {
            this.state.isQueued = true;
            renderedOnce = 1;
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