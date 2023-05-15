import { useState } from 'react';
import './App.css';
import Rating from './components/Rating.jsx';
import Submit from './components/Submit.jsx';

function App() {
  const [showSubmitPage, setShowSubmitPage] = useState(false);
  const [rating, setRating] = useState(null);

  return (
    <>
    {showSubmitPage ? (
      <Submit rating={rating}/>
      ) : (
        <Rating 
          rating={rating}
          setRating={setRating}
          setShowSubmitPage={setShowSubmitPage}
          />
        )}
      </>
  );
}

export default App;
