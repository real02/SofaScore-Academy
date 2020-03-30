import React from "react";
import BookCard from "./BookCard";

function searchingFor(term) {
  return function(x) {
    return (
      x.volumeInfo.title.toLowerCase().includes(term.toLowerCase()) || !term
    );
  };
}

const BookList = props => {
  console.log(props.books.filter(searchingFor(props.searchField)))
  return (
    <div className="list">
      {props.books.filter(searchingFor(props.searchField)).map((book, i) => {
        return (
          <BookCard
            key={i}
            image={
              book.volumeInfo.imageLinks === undefined
                ? "https://www.muslimrosewelfare.org.uk/wp-content/uploads/2019/11/no-image-available-icon-6-300x188.png"
                : book.volumeInfo.imageLinks.thumbnail
            }
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
