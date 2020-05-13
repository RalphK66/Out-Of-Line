import React from "react";
import { Button } from 'reactstrap';
import "../css/admin.css"

class Tags extends React.Component{

    constructor(props) {
        super(props);
        this.displayQueue = this.displayQueue.bind(this);
        this.refresh = this.refresh.bind(this);

        this.state = {
            loading: true,
            result: null
        }
    }

    refresh(){
        setTimeout(function(){window.location.reload();},100);
    }

    displayQueue(event) {
        fetch("http://localhost:9000/tempUsers", {
            method: "GET",
        })
        .then(response => 
            response.json())
        .then(data => {
            let tags = [];
            for(let i = 0; i < data.length; i++){
                tags.push(<tr key={data[i].id}>
                        <td>{data[i].name}</td>
                        <td>{data[i].email}</td>
                        <td>{data[i].phone_number}</td>
                        <td><form action="http://localhost:9000/adminRemove" method="POST">
                            <button name="id" type="submit" value={data[i].id} onClick={this.refresh}>DELETE</button>
                        </form></td>
                    </tr>);
            }
            this.setState({
                loading: false,
                result: tags
            })
        })
        .catch(function(err) {
            console.error(err);
        })
    }

    render() {
        window.onload = this.displayQueue;
        const {loading, result} = this.state;
        return(
            <div className="container col-sm-8 shadow admin">
                <a href="/adduser">
                    <Button className="add-user">Add to queue</Button>
                </a>
                <div>
                    
                    {loading && <p>Loading list...</p>}
                    {result && <h1>Result is: {<table><tbody>{result}</tbody></table>}</h1>}
            </div>
        </div>
        )
    }
}


export default Tags;
