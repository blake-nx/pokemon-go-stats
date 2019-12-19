import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import "./App.css";
import Header from '../components/Header';
import Footer from "../components/Footer";

import { setSearchField, requestPokemon } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchPokemon.searchField,
    pokemon: state.requestPokemon.pokemon,
    isPending: state.requestPokemon.isPending,
    error: state.requestPokemon.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestPokemon: () => dispatch(requestPokemon())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestPokemon();
  }

  render() {
    const { searchField, onSearchChange, pokemon, isPending } = this.props;
    const filteredPokemon = pokemon.filter(pokemon => {
      if (pokemon.type2) {
        return (
          pokemon.name.toLowerCase().includes(searchField.toLowerCase()) ||
          pokemon.type1.toLowerCase().includes(searchField.toLowerCase()) ||
          pokemon.type2.toLowerCase().includes(searchField.toLowerCase())
        );
      } else {
        return (
          pokemon.name.toLowerCase().includes(searchField.toLowerCase()) ||
          pokemon.type1.toLowerCase().includes(searchField.toLowerCase())
        );
      }
    });

    return isPending
      ? <h1>Loading...</h1>
      : <div className="tc bg-light-gray cover bg-left bg-center-l">
          <Header onSearchChange={onSearchChange}/>
          <Scroll>
            <CardList pokemon={filteredPokemon} />
          </Scroll>
          <Footer />
        </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
