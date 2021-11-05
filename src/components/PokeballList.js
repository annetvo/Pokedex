import React from 'react';
import PokeballCell from './PokeballCell';
import { pokeballClasses } from '../pokeballClasses';
import './styles/PokeList.css';



const PokeballList = ({ handleOnClick }) => {
  const pokeballcells = pokeballClasses.map(pokeballClass => {
    return (
      <PokeballCell
        key={pokeballClass.id}
        pokeballClass={pokeballClass}
        handleOnClick={handleOnClick}
      />
    );
  });


  return (

    <section className="pokeball-list">
      {pokeballcells}
    </section>

  )
}

export default PokeballList;