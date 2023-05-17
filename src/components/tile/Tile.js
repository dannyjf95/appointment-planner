import React from "react";

export const Tile = ({ name, ...tile }) => {
  //not Object.keys as we only want values set on tile under names
  const mappedContactTile = Object.values(tile).map((info, index) => {
    return (
      <p className="tile" key={index}>
        {info}
      </p>
    );
  });

  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {mappedContactTile}
    </div>
  );
};
