import React from 'react';
import Card from "./Card";
import submitImg from "../assets/illustration-thank-you.svg";
import "./Submit.css";


const Submit = ({rating}) => {
  

  return (
    <Card>
    <div className='thank-you-img-container'>
        <img src={submitImg} alt='thankYou-img'/>
    </div>

    <div className='selected-text'>
        <p>You selected {rating} out of 5</p>
    </div>
    <h2 className='title'>Thank You!</h2>
    <p className='parragraph'>We appreciate you taking the time to give a rating. If you ever need more support. don't hesitate to get in touch!</p>
    </Card>
  )
}

export default Submit