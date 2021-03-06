import React from 'react';
import './Cocktails.css'
import './makeYourCocktail.css';
import './CocktailResult.css';
import Axios from 'axios';
import Cocktail from './Cocktail';

class CocktailPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      cocktailDescription: '',
    };
  }

  clicked = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <div>
        <div className='DivResult'>
        <div>
          <img className='ImageCocktail' src={this.props.cocktail.strDrinkThumb} alt={this.props.cocktail.strDrink} />
        </div>
        <div className="ResultDescription">
          <h1 className="cocktailName">{this.props.cocktail.strDrink}</h1>
          <button className='buttonCliked' type="button" onClick={this.clicked}>Show Recipe</button>
        </div>
        {this.state.clicked && <Cocktail clicked={this.clicked} cocktail={this.props.cocktail} />}
        </div>
      </div>
      
    );
  }
}

export default CocktailPreview;
