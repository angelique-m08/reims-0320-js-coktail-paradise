import React from 'react';
import Axios from 'axios';
import SearchBar from './components/SearchBar';
import './components/makeYourCocktail.css';
import CocktailList from './components/CocktailList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
      allCocktails: [],
      ingredientsList: [],
    };

  getData = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
    alphabet.split('').forEach((letter) => {
      Axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`,
      )
        .then((response) => response.data)
        .then((data) => {
          this.setState({
            allCocktails: [...this.state.allCocktails, { coktails: data.drinks }],
          });
          if (data.drinks !== null) {
            for (let i = 0; i < data.drinks.length; i++) {
              this.setState({
                ingredientsList: [...this.state.ingredientsList, data.drinks[i].strIngredient1],
              });
            }
            for (let i = 0; i < data.drinks.length; i++) {
              this.setState({
                ingredientsList: [...this.state.ingredientsList, data.drinks[i].strIngredient2],
              });
            }
            for (let i = 0; i < data.drinks.length; i++) {
              this.setState({
                ingredientsList: [...this.state.ingredientsList, data.drinks[i].strIngredient3],
              });
            }
            for (let i = 0; i < data.drinks.length; i++) {
              this.setState({
                ingredientsList: [...this.state.ingredientsList, data.drinks[i].strIngredient4],
              });
            }
            for (let i = 0; i < data.drinks.length; i++) {
              this.setState({
                ingredientsList: [...this.state.ingredientsList, data.drinks[i].strIngredient5],
              });
            }
          }
        });
    });
  };

  render() {
    return (
      <div className="makeYourCocktail">
        <div className="searchBar">
          <SearchBar />
        </div>
        <div>
          <CocktailList list={this.state.cocktails} />
        </div>
      </div>
    );
  }
}

export default App;
