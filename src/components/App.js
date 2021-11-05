import React, { Component } from 'react';
import DetailView from './DetailView';
import PokeList from './PokeList';
import './styles/App.css';
import Pokemon from '../Pokemon';
import PokeballList from './PokeballList';
import SignIn from './Signin'
import Register from './Register';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
      currentRightView: "PokeList"
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.renderRightView = this.renderRightView.bind(this);
  }

  componentDidMount () {
    this.handleOnClick(54)
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

  renderRightView (viewName) {
    this.setState(previousState => ({
      ...previousState,
      currentRightView: viewName
    }))
  }

  render() {
    return (
      <div className="App">
        <DetailView
          pokemon={this.state.pokemon}
          viewChanger={this.renderRightView}
        />
        <div className="Divider"></div>
        {/* JavaScript short-circuit evaluation */}
        {(this.state.currentRightView === "PokeList") && <PokeList handleOnClick={this.handleOnClick} />}
        {(this.state.currentRightView === "SignIn") && <SignIn viewChanger={this.renderRightView}/>}
        {(this.state.currentRightView === "Register") && <Register viewChanger={this.renderRightView}/>}
        {(this.state.currentRightView === "PokeballList") && <PokeballList/>}
        {/* <PokeballList handleOnClick={this.handleOnClick} /> */}
      </div>
    );
  }
}

export default App;