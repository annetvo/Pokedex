import React from 'react';
import './styles/Register.css';

const Register = ({viewChanger}) => {
    return (
        <div className="Register">
            <form id="form">
                <p><label>email  </label><input type="text" email="email" id="input"/></p>
                <p><label>password  </label><input type="password" password="password" id="input"/></p>
                <p><label>confirm password  </label><input type="password" confirmpassword="confirmpassword" id="input"/></p>
                <center>
                    <button id="submitbtn" onClick={() => viewChanger("PokeList")}>submit</button>
                </center>
            </form>
        </div>
    )
}



export default Register
