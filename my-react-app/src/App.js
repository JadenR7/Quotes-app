import React, {useState} from 'react';
import QuoteDisplay from './components/QuoteDisplay';

function App() {

const quotes = [
  "You got this!",
  "Keep trying!",
  "You're almost there",
  "I'm going to have a good day",
  "Don't quit now, because quitting is for losers. Now are you a loser? Didn't think so. Now get up soldier and get back. on. that. grind.",
  "Great job!",
]

const colors = ["bg-red-700", "bg-blue-200", "bg-yellow-300", "bg-green-300", "bg-pink-200", "bg-orange-200",]

const [currentQuoteIndex, setcurrentQuoteIndex] = useState(0);
const [currentColorIndex, setcurrentColorIndex] = useState(0);

const nextQuote = () => {
  // update quote index
let newQuoteIndex = currentQuoteIndex + 1;
if(newQuoteIndex >= quotes.length) {
  newQuoteIndex = 0;
}
  // update the color index
  let newColorIndex = currentColorIndex + 1;
  if (newColorIndex >= colors.length) {
    newColorIndex = 0;
  }
  // set the new idexes in the state
  setcurrentQuoteIndex(newQuoteIndex);
  setcurrentColorIndex(newColorIndex);

};
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <h1 className='text-2xl font-bold'>Positive quotes generator!</h1>
      <QuoteDisplay currentQuote={quotes[currentQuoteIndex]} currentColor={colors[currentColorIndex]} />
      <button className='px-4 py-2 rounded hover:text-white bg-blue-300' onClick={nextQuote}>Next Quote</button>
    </div>
  );
}

export default App;
