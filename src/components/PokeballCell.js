import React from 'react';
import allpokeballs from '../assets/allpokeballs.png';
import './styles/PokeballCell.css';
import { pokeballClasses } from '../pokeballClasses';

const PokeballCell = ({ pokeballClass, handleOnClick }) => {

  const style = { backgroundImage: `url(${allpokeballs})` };

  return <button onClick={() => handleOnClick()} 
  style={style} className="pokeball-cell"></button>
};

export default PokeballCell;

