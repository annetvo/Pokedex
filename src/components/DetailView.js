import React from "react";
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
    const { id, name, sprite, type, ability, ability2, move, move2, move3 } = pokemon;
    return (
        <section className="detail-view">
            <img src={sprite} className="sprite-image" alt="sprite"/>
            <div className="data-wrapper">
                <h1 classname="data-name">ID: {id} {name}</h1>
                <p className="data-char">Type: {type}</p>
                <p className="data-char">Abilities: {ability}, {ability2}</p>
                <p className="data-char">Moves: {move}, {move2}, {move3}</p>
            </div>
            <center><button id="button"></button></center>

        </section>
    )
}

export default DetailView;