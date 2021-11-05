import React from 'react';
import Register from './Register';
import './styles/Signin.css';


const SignIn = ({viewChanger}) => {
    return (
        <div className="SignIn">
            <form id="form">
                <p><label>email  </label><input type="text" email="email" id="input"/></p>
                <p><label>password  </label><input type="password" password="password" id="input"/></p>
                <center>
                    <button id="signinbtn" onClick={(SignedIn)}>sign in</button>
                    <button id="registerbtn" onClick={() => viewChanger("Register")}>register</button>
                </center>
            </form>
        </div>
    )
}

function SignedIn() {
    alert("You're signed in!");
}

export default SignIn
