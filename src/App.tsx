import React, { useState } from 'react';
import './App.css';

const quotes = [
  "You can do it, Diana!",
  "Believe in yourself, Diana!",
  "You're awesome, Diana!",
  "Never give up, Diana!",
  "Sky's the limit, Diana!",
  "Stay focused, Diana!",
  "You're capable of more than you know, Diana!",
  "Be fearless, Diana!",
  "Keep pushing forward, Diana!",
  "You're doing great, Diana!"
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome, Diana!</h1>
        <p className="quote">{quote}</p>
        <button onClick={getRandomQuote}>Get New Quote</button>
      </header>
    </div>
  );
}

export default App;
