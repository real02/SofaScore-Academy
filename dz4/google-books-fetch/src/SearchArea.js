import React from "react";

//var active = true;

/*
    DON'T KNOW HOW TO SET LOADING SPINNER TO WORK PROPERLY
*/
// function loadAnimation(flag) {
//   if (flag) {
//     const loader = document.querySelector(".loader");
//     loader.className = "loader hidden";
//     active = false;
//     return (
//       <div className="animation">
//         <div className="loader hidden"></div>
//       </div>
//     );
//   } else {
//     const loader = document.querySelector(".loader.hidden");
//     loader.className = "loader";
//     active = true;
//     return (
//       <div className="animation">
//         <div className="loader"></div>
//       </div>
//     );
//   }
// }

const SearchArea = props => {
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
        //   onClick={() => {
        //     console.log(active);
        //     loadAnimation(props.isLoading);
        //   }}
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
    </div>
  );
};

export default SearchArea;
