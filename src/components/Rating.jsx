import React, { useState } from 'react';
import Card from "../components/Card";
import "./Rating.css";
import starImg from "../assets/icon-star.svg";


const Rating = ({rating, setRating, setShowSubmitPage}) => {
  const [activeRating, setActiveRating] = useState({
    oneStar: false,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false,
});

const handleSubmit = () => {
  if(rating) return setShowSubmitPage(true);
}



  return (
    <Card>
    <div className='img-container'>
        <img src={starImg} alt='Star'/>
    </div>
    <h2 className='title'>How did we do?</h2>
    <p className='text'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering</p>
    <div className='rating'>
    <div className={activeRating.oneStar ? "rating-container active"  : "rating-container"} onClick={() => {
      setActiveRating({
        oneStar: true,
        twoStars: false,
        threeStars: false,
        fourStars: false,
        fiveStars: false,
      });
      setRating(1);
    }}>1</div>
    <div className={activeRating.twoStars ? "rating-container active"  : "rating-container"} onClick={() => {
      setActiveRating({
        oneStar: false,
        twoStars: true,
        threeStars: false,
        fourStars: false,
        fiveStars: false,
      });
      setRating(2);
    }}>2</div>
    <div className={activeRating.threeStars ? "rating-container active"  : "rating-container"} onClick={() => {
      setActiveRating({
        oneStar: false,
        twoStars: false,
        threeStars: true,
        fourStars: false,
        fiveStars: false,
      });
      setRating(3);
    }}>3</div>
    <div className={activeRating.fourStars ? "rating-container active"  : "rating-container"} onClick={() => {
      setActiveRating({
        oneStar: false,
        twoStars: false,
        threeStars: false,
        fourStars: true,
        fiveStars: false,
      });
      setRating(4);
    }}>4</div>
    <div className={activeRating.fiveStars ? "rating-container active"  : "rating-container"} onClick={() => {
      setActiveRating({
        oneStar: false,
        twoStars: false,
        threeStars: false,
        fourStars: false,
        fiveStars: true,
      });
      setRating(5);
    }}>5</div>
    </div>
    <button className='submit-btn' onClick={handleSubmit}>Submit</button>
    </Card>
  )
}

export default Rating