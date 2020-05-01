import React from 'react';
import ReactDOM from 'react-dom'

const Stores = () => {
    var stores = [<li><button onClick={showCostco}>Costco</button></li>,<li><button onClick={showSaveon}>Save-On-Foods</button></li>, <li><button onClick={showSuperstore}>Superstore</button></li>];
    
    class Costco extends React.Component{
        render(){
            return (<div><p>Address: 123 Costco drive.</p>
                    <p>Phone numebr: 604-555-5555</p></div>);
        }
    }
    function showCostco(){
        ReactDOM.render(<Costco />, document.getElementById("temp"));
    }

    class Saveon extends React.Component{
        render(){
            return (<div><p>Address: 456 Saveon street.</p>
                <p>Phone numebr: 604-444-4444</p></div>);
        }
    }
    function showSaveon(){
        ReactDOM.render(<Saveon />, document.getElementById("temp"));
    }

    class Superstore extends React.Component{
        render(){
            return (<div><p>Address: 789 Superstore crescent.</p>
                <p>Phone numebr: 604-333-3333</p></div>);
        }
    }
    function showSuperstore(){
        ReactDOM.render(<Superstore />, document.getElementById("temp"));
    }

    return (
        <div>
            <ul>
                {stores}
            </ul>
            <div id="temp">

            </div>
        </div>
    );
    
  }
  
  export default Stores; 