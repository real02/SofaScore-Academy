import React from "react";
import SearchArea from "./SearchArea";
import axios from "axios";
import BookList from "./BookList";

class Books extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      searchField: "",
      sort: "",
      isLoading: false
    };

    this.handleSearch = this.handleSearch;
  }

  searchBook = e => {
    e.preventDefault();

    this.setState({ isLoading: true });

    const url = "https://www.googleapis.com/books/v1/volumes?q=";

    axios
      .get(
        url +
        this.state.searchField +
        "+intitle:" + // searching by title
          this.state.searchField +
          "&maxResults=40"
      )
      .then(data => {
        const cleanData = this.cleanData(data);
        this.setState({ books: cleanData, isLoading: false });
      });
  };

  handleSearch = e => {
    this.setState({ searchField: e.target.value }); // value je ono sto smo trenutno upisali
  };

  handleSort = e => {
    this.setState({ sort: e.target.value });
  };

  cleanData = data => {
    if (data.data.totalItems > 0) {
      const cleanedData = data.data.items.map(book => {
        if (book.volumeInfo.hasOwnProperty("publishedDate") === false) {
          book.volumeInfo["publishedDate"] = "0000";
        } else if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
          book.volumeInfo["imageLinks"] = {
            thumbnail:
              "https://www.muslimrosewelfare.org.uk/wp-content/uploads/2019/11/no-image-available-icon-6-300x188.png"
          };
        }
        return book;
      });
      return cleanedData;
    }
  };

  render() {
    if (this.state.books !== undefined) {
      const sortedBooks = this.state.books.sort((a, b) => {
        if (this.state.sort === "Newest") {
          return (
            parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
            parseInt(a.volumeInfo.publishedDate.substring(0, 4))
          );
        } else if (this.state.sort === "Oldest") {
          return (
            parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
            parseInt(b.volumeInfo.publishedDate.substring(0, 4))
          );
        }
      });
      return (
        <div>
          <SearchArea
            searchBook={this.searchBook}
            handleSearch={this.handleSearch}
            handleSort={this.handleSort}
            searchField={this.state.searchField}
            isLoading={this.state.isLoading}
          />
          <BookList books={sortedBooks} searchField={this.state.searchField} />
        </div>
      );
    } else {
      return (
        <div className="alert alert-info text-center" role="alert">
          No such book!
        </div>
      );
    }
  }
}

export default Books;
