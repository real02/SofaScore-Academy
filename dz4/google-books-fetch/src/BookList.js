import React from "react";
import BookCard from "./BookCard";

/*
  DID NOT SUCCEED TO IMPLEMENT FILTERING
*/

// dinamically filtering books - not working properly
function searchingFor(term) {
  return function(x) {
    return x.volumeInfo.title.toLowerCase().includes(term.toLowerCase()) || !term
  }
}

const BookList = props => {
  return (
    <div className="list">
      {props.books.map((book, i) => {
        return (
          <BookCard
            key={i}
            image={book.volumeInfo.imageLinks === undefined
              ? "https://www.muslimrosewelfare.org.uk/wp-content/uploads/2019/11/no-image-available-icon-6-300x188.png"
              : book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            published={book.volumeInfo.publishedDate}
          />
        );
      })}
    </div>
  );
};

export default BookList;
