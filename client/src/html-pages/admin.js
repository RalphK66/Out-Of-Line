import React from "react";
import { Button, Container, Table } from "reactstrap";
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";
import "../css/admin.css";
import { adminRemoveUser, } from "../notifications/toasts";


class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.displayQueue = this.displayQueue.bind(this);
    this.refresh = this.refresh.bind(this);

    this.state = {
      loading: true,
      result: null,
    };
    this.displayQueue();
  }


  refresh = (function (props) {
    adminRemoveUser(props)
    setTimeout(function () {
      window.location.reload();
    }, 2000);
    
  })

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
                <Table borderless className="sub-table">
                  <tbody>
                    <tr>
                      <td className="icon">
                        <FaUser />
                      </td>
                      <td className="customer">
                        <strong>{data[i].name} </strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="icon">
                        <FaEnvelope />
                      </td>
                      <td className="customer">{data[i].email}</td>
                    </tr>
                    <tr>
                      <td className="icon">
                        <FaPhone />
                      </td>
                      <td className="customer">{data[i].phone_number}</td>
                    </tr>
                  </tbody>
                </Table>
              </td>
              <td className="remove">
                <form action="http://localhost:9000/adminRemove" method="POST">
                  <Button
                    className="del-customer-btn"
                    name="id"
                    type="submit"
                    value={data[i].id}
                    onClick={() => {this.refresh(data[i].name)}}
                    size="sm"
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
    const { loading, result } = this.state;
    return (
      <Container className="container col-sm-8 shadow admin">
        <a href="/adduser">
          <Button className="add-to-queue-btn" size="lg">Add to queue</Button>
        </a>
        <br />
        <br />
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
                  <br />
                  Loading list...
                  <br />
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
