import logo from './logo.svg';
import React from 'react'
import './App.css';
import axios from 'axios';
import QuoteCard from './Components/QuoteCard'
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
     simpsons: ''
  };
  this.getQuote = this.getQuote.bind(this);
}

  getQuote = () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({simpsons: data[0]});
    });
  }

  render() {
    return(
      <div>
        <h1>Simpsons Quote Generator</h1>
        <button type='button' onClick={this.getQuote}>Generate Quote</button>
        <QuoteCard simpsons={this.state.simpsons}/>
      </div>
    )
  }
}

export default App;
 