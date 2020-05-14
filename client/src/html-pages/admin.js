import React from "react";
import { Button, Container, Table } from "reactstrap";
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";
import "../css/admin.css";
import { adminAddUser} from "../notifications/notifications";

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.displayQueue = this.displayQueue.bind(this);
    this.refresh = this.refresh.bind(this);

    this.state = {
      loading: true,
      result: null,
    };
  }

  refresh() {
    setTimeout(function () {
      window.location.reload();
    }, 100);
  }

  displayQueue(event) {
    fetch("http://localhost:9000/tempUsers", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        let tags = [];
        // notification for last person joining the queue - some issues
        let newPerson = data[data.length-1]
        adminAddUser(newPerson.name)
        
        for (let i = 0; i < data.length; i++) { 
          tags.push(
            <tr key={data[i].id}>
              <td>
                <Table borderless>
                  <tbody>
                    <tr>
                      <td className="icon">
                        <FaUser />
                      </td>
                      <td style={{ textAlign: "left" }}>
                        <strong>{data[i].name} </strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="icon">
                        <FaEnvelope />
                      </td>
                      <td style={{ textAlign: "left" }}>{data[i].email}</td>
                    </tr>
                    <tr>
                      <td className="icon">
                        <FaPhone />
                      </td>
                      <td style={{ textAlign: "left" }}>
                        {data[i].phone_number}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </td>
              <td>
                <form action="http://localhost:9000/adminRemove" method="POST">
                  <button
                    className="del-btn"
                    name="id"
                    type="submit"
                    value={data[i].id}
                    onClick={this.refresh}
                  >
                    DELETE
                  </button>
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
    window.onload = this.displayQueue;
    const { loading, result } = this.state;
    return (
      <Container className="container col-sm-8 shadow admin">
        <a href="/adduser">
          <Button className="add-user">Add to queue</Button>
        </a>
        <br />
        <br />
        <Table size="sm">
          <thead>
            <tr>
              <th className="column-name">Customer</th>
              <th className="column-name">Remove</th>
            </tr>
          </thead>
          {loading && (
            <tbody>
              <tr>
                <td colSpan="2"><br/>Loading list...<br/></td>
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
