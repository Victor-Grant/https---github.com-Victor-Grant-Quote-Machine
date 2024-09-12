import './App.css';
import { motivationalQuotes } from './data/quotes';
import React from 'react';

const generateRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * 40);
  return motivationalQuotes[randomIndex];
}

const randomColorGenerator = () => {
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  const hexValue = `#${hexArray[Math.floor(Math.random() * 16)]}${hexArray[Math.floor(Math.random() * 16)]}${hexArray[Math.floor(Math.random() * 16)]}${hexArray[Math.floor(Math.random() * 16)]}${hexArray[Math.floor(Math.random() * 16)]}${hexArray[Math.floor(Math.random() * 16)]}`;
  return hexValue;
}

console.log(randomColorGenerator());


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...generateRandomQuote(), color: 'red'}
    this.changeQuote = this.changeQuote.bind(this);
  }
  // let quote = generateRandomQuote().quote;
  // let author = generateRandomQuote().author;
  changeQuote () {
    const newColor = randomColorGenerator();
    const body = document.querySelector('body');
    const button = document.querySelector('body');
    const link = document.querySelector('body');
    this.setState({...generateRandomQuote(), color: newColor});
    this.color = newColor;
    body.style.background = newColor;
    button.style.background = newColor;
    link.style.color = newColor;
  }
  render () {
    return (
      <div id="quote-box">
        <p id='text'>{this.state.quote}</p>
        <p id='author'>{this.state.author}</p>
        <span>
          <a id='tweet-quote' style={{color: this.state.color}} href='twitter.com/intent/tweet' target='_blank'><i class="fa-brands fa-twitter"></i></a>
          <button style={{background: this.state.color}} id='new-quote' onClick={this.changeQuote}>Change Quote</button>
        </span>
      </div>
    );
  }
}

export default App;
