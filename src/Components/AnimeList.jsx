import React from "react";
import AnimeItem from "./AnimeItem";

const AnimeList = ({ animeData }) => {
  return (
    <>
      <div className="animeList">
        {animeData.data.map((item) => (
          <AnimeItem dataItem={item} key={item._id} />
        ))}
      </div>
    </>
  );
};

export default AnimeList;
