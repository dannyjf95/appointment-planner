import React from "react";
import { Tile } from "../tile/Tile";
export const TileList = ({ bothTiles }) => {
  console.log(bothTiles);

  const mappedTiles = bothTiles.map((tile, index) => {
    return <Tile key={index} name={tile.name} {...tile} />;
  });

  return <div>{mappedTiles}</div>;
};
