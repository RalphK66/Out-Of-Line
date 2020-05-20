import React from "react";
import Cookies from 'js-cookie';
import { Container, Jumbotron, Row, Col } from 'reactstrap'
import '../css/profile-page.css'

class InQueue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isQueued: false,
            queueNumber: null,
            storeName: null,
            waitTime: 0
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
            this.setState({queueNumber: data.queue_number});  
            console.log(data.queue_number);
        })
          .catch(err => console.log(err));
      }
    

    displayInQueue() {
        this.state.storeName = Cookies.get("store_id");
        this.getQueueNumber();
    }
    
    render() {
        if (Cookies.get('enqueued') === undefined) {
            window.location = '/stores';
        } else if (Cookies.get('enqueued')) {
            this.state.isQueued = true;
        }

        this.displayInQueue();

        return(
            <Container className="col-sm-8 shadow profile-page">
                <Row style={{height: "10vh"}}>
                    <Col>
                        You're now in queue for:
                        {this.state.storeName}
                    </Col>
                
                </Row> 
                <Row style={{height: "50vh"}}>
                    <Col>
                        <Jumbotron>
                        <h1 style={{fontSize: "200px"}}>
                        {this.state.queueNumber}
                        </h1> 
                        </Jumbotron>
                    </Col>
                 </Row> 
            <Row style={{height: "10vh"}}>  
       
                <p>Wait Time: {this.state.waitTime}</p>
                </Row> 
            </Container>
        );
    }
}

export default InQueue;