import React from "react";
import './styles/DetailView.css';

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
            <center><button id="button"></button></center>

        </section>
    )
}

export default DetailView;