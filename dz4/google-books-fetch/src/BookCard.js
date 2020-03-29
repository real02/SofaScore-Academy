import React from "react";

const BookCard = props => {
  return (
    <div className="card-container">
      <img src={props.image} alt="" />
      <div className="desc">
        <h2>{props.title.length > 30 ? props.title.substring(0, 30).concat("...") : props.title}</h2>
        <h3>Author: {props.author !== undefined ? 
           props.author[0] : 'Not available'}</h3>
        <p>Year Published: {props.published === '0000' ? 'Not available' : props.published.substring(0, 4)}</p>
      </div>
    </div>
  );
};

export default BookCard;
