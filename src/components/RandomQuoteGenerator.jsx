import  { useState } from 'react';

const RandomQuoteGenerator = () => {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats"
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-container">
      <h1>Random Quote Generator</h1>
      <p className="quote">{quote}</p>
      <button onClick={generateRandomQuote}>Get New Quote</button>
    </div>
  );
};

export default RandomQuoteGenerator;
