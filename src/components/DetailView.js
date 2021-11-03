import React from "react";
import './styles/DetailView.css';
import history from "./history";

const DetailView = ({ pokemon }) => {
    const { id, name, sprite, type, ability, move4, move, move2, move3 } = pokemon;
    return (
        <section className="detail-view">
            <img src={sprite} className="sprite-image" alt="sprite"/>
            <div className="data-wrapper">
                <h1 className="data-name"><center>= {id} {name} =</center></h1>
                <p className="data-char">type: {type}</p>
                <p className="data-char">ability: {ability}</p>
                <p className="data-char">moves: {move}, {move2}, {move3}, {move4}</p>
            </div>
            <div className="buttons">
            <button id="shopbtn" onClick={() => history.push('/Shop')}><h5>SHOP</h5></button>
            <button id="button" onClick={() => history.push('/')}></button>
            <button id="signbtn" onClick={() => history.push('/Signin')}><h5>SIGN IN</h5></button>
            </div>

        </section>
    )
}

export default DetailView;