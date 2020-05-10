import React from "react";

class Admin extends React.Component{
    createTags = () => {
        let customers = [{"name":"Nathan"}, {"name":"Chris"}, {"name":"Armaan"}, {"name":"Patrick"}, {"name":"Amir"}];
        let tags = [];
        let table = [];
        for (const name in customers) {
            tags.push(<td key={customers[name]["name"]}>{customers[name]["name"]}</td>);
        }
        table.push(<tr key={tags}>{tags}</tr>);
        return table;
    }

    render() {
        return(
            <div>
            <h1>Customer details</h1>
            <table>
                <tbody>
                    {this.createTags()}
                </tbody>
            </table>
            </div>
        )
    }
}

export default Admin;