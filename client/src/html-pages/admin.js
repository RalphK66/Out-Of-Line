import React from "react";
import { Button, Container, Table, Col, Row } from "reactstrap";
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";
import "../css/admin.css";
import { adminRemoveUser } from "../notifications/toasts";

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.displayQueue = this.displayQueue.bind(this);
    this.refresh = this.refresh.bind(this);

    this.state = {
      loading: true,
      result: null,
      disabled: false,
    };
    this.displayQueue();
  }

  refresh = function (props) {

    console.log(this.state.disabled);

    this.setState({ disabled: true }, () => {
      
      console.log(this.state.disabled);
      adminRemoveUser(props);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  };

  displayQueue(event) {
    fetch(process.env.REACT_APP_API_URL + "/tempUsers", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        let tags = [];
        for (let i = 0; i < data.length; i++) {
          tags.push(
            <tr key={data[i].id}>
              <td>
                <Container className="sub-table">
                  <Row xs="2">
                    <Col className="icon" xs="1">
                      <FaUser />
                    </Col>
                    <Col className="customer">
                      <strong>{data[i].name} </strong>
                    </Col>
                  </Row>
                  <Row xs="2">
                    <Col className="icon" xs="1">
                      <FaEnvelope />
                    </Col>
                    <Col className="customer">{data[i].email}</Col>
                  </Row>
                  <Row xs="2">
                    <Col className="icon" xs="1">
                      <FaPhone />
                    </Col>
                    <Col className="customer">{data[i].phone_number}</Col>
                  </Row>
                </Container>
              </td>
              <td className="remove">
                <form action="/adminRemove" method="POST">
                  <Button
                    className="del-customer-btn"
                    name="id"
                    type="submit"
                    value={data[i].id}
                    onClick={() => {
                      this.refresh(data[i].name);
                    }}
                    size="sm"
                    disabled={this.state.disabled}
                  >
                    DELETE
                  </Button>
                </form>
              </td>
            </tr>
          );
        }
        this.setState({
          loading: false,
          result: tags,
        });
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  render() {
    const {loading, result} = this.state;
    return (
      <Container className="container col-sm-8 shadow admin">
        <a href="/adduser">
          <Button className="add-to-queue-btn" size="lg">
            Add to queue
          </Button>
        </a>
        <br/>
        <br/>
        <Table size="sm" className="main-table">
          <thead>
          <tr>
            <th className="customer-header">Customer</th>
            <th className="remove">Remove</th>
          </tr>
          </thead>
          {loading && (
            <tbody>
            <tr>
              <td colSpan="2">
                <br/>
                Loading list...
                <br/>
              </td>
            </tr>
            </tbody>
          )}
          <tbody>{result}</tbody>
        </Table>
        <div></div>
      </Container>
    );
  }
}

export default Tags;
