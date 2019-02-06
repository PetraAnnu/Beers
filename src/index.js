import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class App extends React.Component {
  state = {
    beers: []
  };

  constructor() {
    super();
    //this.getBeers();  ???
  }

  getBeers() {
    fetch("https://api.punkapi.com/v2/beers") // vraci objekt a v tom objektu jsou data a ty data chceme v jsonu a v tech datech máme vnitřek api
      .then(data => data.json())
      .then(beers => {
        this.setState({ beers });
      }) ///uloží se to do toho naseho state-u
      .catch(error => {
        console.log(error);
      }); //vezme návratovou hodnotu z predchozí funkce a dál s ní pracuje, párkrát to zařetezujeme a dostaneme to co chceme
  }

  render() {
    let beers = this.state.beers.map(beer => (
      <li>
        <strong>{beer.name} </strong> {beer.tagline}
      </li>
    ));
    return <ol> {beerNames} </ol>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
