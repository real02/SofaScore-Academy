import React from "react";

function loadAnimation(flag) {
  if (flag) {
    return (
      <div className="animation">
        <div className="loader"></div>
      </div>
    );
  } else {
    return (
      <div className="animation">
        <div className="loader hidden"></div>
      </div>
    );
  }
}

const SearchArea = props => {
  const { isLoading } = props

  return (
    <div className="search-area">
      <form onSubmit={props.searchBook} action="">
        <input
          onChange={props.handleSearch}
          placeholder="Search books"
          type="text"
          value={props.searchField}
        />
        <button
          type="submit"
        >
          Search
        </button>
        <select defaultValue="Sort" onChange={props.handleSort}>
          <option disabled value="Sort">
            Sort
          </option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </form>
      {loadAnimation(isLoading)}
    </div>
  );
};

export default SearchArea;
