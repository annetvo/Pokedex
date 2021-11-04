import React, { Component } from 'react';
import DetailView from './DetailView';
import PokeList from './PokeList';
import './styles/App.css';
import Pokemon from '../Pokemon';
import PokeballList from './PokeballList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);

  }
  
  handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
    .then (res => res.json())
    .then (data => {
      const pokemon = new Pokemon(data);

      this.setState ({ pokemon })
    })
    .catch(err => console.log(err));
  }

    

  render() {
    return (
      <div className="App">
        <DetailView pokemon={this.state.pokemon} />
        <div className="Divider"></div>
        <PokeList handleOnClick={this.handleOnClick} />
        <PokeballList handleOnClick={this.handleOnClick} />
      </div>
    );
  }
}


export default App;
