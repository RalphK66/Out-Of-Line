import React from 'react';

const login = () =>{
    return (
        <div>
            <h1>Login</h1>
            <form id="login" value="login">
                <input type="text" placeholder="username"></input>
                <input type="password" placeholder="password"></input>
                <button type="submit">Login</button>
            </form>
            <a href="#signup">Sign up</a>
        </div>
    );
}

export default login;