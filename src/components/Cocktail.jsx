import React from 'react';
import './Cocktails.css'
import './makeYourCocktail.css';
import Axios from 'axios';

class Cocktail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      cocktailDescription: '',
    };
  }

  componentDidMount() {
    this.description();
  }

  clicked = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  description = () => {
    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.cocktail.idDrink}`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ cocktailDescription: data.drinks[0]});
      });
  }

  render() {
    return (
      <div className='cocktailGlobal'>
        <img className="cocktailThumb" src={this.state.cocktailDescription.strDrinkThumb} alt={this.state.cocktailDescription.strDrink} />
        <div>
          <p>{this.state.cocktailDescription.strInstructions}</p>
          
          <div>
          {this.state.cocktailDescription.strDrink}
          <p>{this.state.cocktailDescription.strIngredient1}</p>
          <p>{this.state.cocktailDescription.strIngredient2}</p>
          <p>{this.state.cocktailDescription.strIngredient3}</p>
          <p>{this.state.cocktailDescription.strIngredient4}</p>
          <p>{this.state.cocktailDescription.strIngredient5}</p>
          </div>
          <button type='button' onClick={() => this.props.clicked()}>Close</button>
        </div>
      </div>
    );
  }
}

export default Cocktail;
