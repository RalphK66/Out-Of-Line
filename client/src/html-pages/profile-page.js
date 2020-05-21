import React from "react";
import Cookies from "js-cookie";
import { Container } from "reactstrap";
import "../css/profile-page.css";

class InQueue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isQueued: false,
      queueNumber: null,
      storeName: null,
      waitTime: 0,
    };

    this.getQueueNumber = this.getQueueNumber.bind(this);
    this.displayInQueue = this.displayInQueue.bind(this);
  }

  getQueueNumber() {
    fetch(process.env.REACT_APP_API_URL + "/queue/get-queue-number", {
      method: "POST",
      body: JSON.stringify({
        user_id: Cookies.get("id"),
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return "Errorrororororororor";
        }
      })
      .then((data) => {
        if (!this.state.queueNumber) {
          this.setState({ queueNumber: data.queue_number });
          console.log(data.queue_number);
        }
      })
      .catch((err) => console.log(err));
  }

  displayInQueue() {
    if (!this.state.storeName) {
      this.setState({ storeName: Cookies.get("store_id") });
      this.getQueueNumber();
    }
  }

  render() {
    if (Cookies.get("enqueued")) {
      if (!this.state.isQueued) {
        this.setState({ isQueued: true });
        this.displayInQueue();
      }
    }
    return (
      <div>
        <Container className="col-sm-8 shadow profile-box">
          <Container>
            <h3> You're now in queue for: </h3>
            <br />
            <h1 className="profile-store-name"> {this.state.storeName} </h1>
          </Container>
          <Container className="profile-number shadow">
            <h1 className="profile-queue"> {this.state.queueNumber}</h1>
          </Container>
          <Container>
            <h3> Wait Time: </h3>
            <br />
            <h1 className="profile-waiting-time"> {this.state.waitTime} </h1>
            <br />
          </Container>
        </Container>
      </div>
    );
  }
}

export default InQueue;
