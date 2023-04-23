import React from "react";

const SearchInput = ({ changeHandler, subitHandler, searchString }) => {
  return (
    <>
      <h1 className="mainTitle">Anime</h1>
      <form className="animeForm" onSubmit={subitHandler}>
        <input
          className="input"
          type="text"
          onChange={changeHandler}
          value={searchString}
          placeholder="Search anime"
          autoFocus
        />
        <button className="submitButton" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchInput;
