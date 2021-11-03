import React from 'react';
import PokeCell from './PokeCell';
import { pokeClasses } from '../pokeClasses';
import './styles/PokeList.css';
import { useState } from 'react';


const PokeList = ({ handleOnClick }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const cells = pokeClasses.map(pokeClass => {
    return (
      <PokeCell
        key={pokeClass.id}
        pokeClass={pokeClass}
        handleOnClick={handleOnClick}
        val={pokeClasses.type}
      />
    );
  });


  return (

    <section className="poke-list">
      <input 
        type="text" 
        placeholder="Search Type..." 
        onChange={event => setSearchTerm(event.target.value)}
      />
      <div className="search">
        {cells.filter(cell => {
          // console.log(searchTerm)
          // console.log(cell)
          const type = cell.props.pokeClass.type

          if (type.toLowerCase().includes(searchTerm.toString().toLowerCase())) {
            return cell
          };
        }).map((val, key) => {
          return (
            <div className="list" key={key}>
              {val}
            </div>
          );
        })}
      </div>

    </section>

  )
}

export default PokeList;