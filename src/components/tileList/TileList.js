import React from "react";
import { Tile } from "../tile/Tile";
export const TileList = ({ contactTiles }) => {
  // console.log(contacts)
  const mappedContacts = contactTiles.map((tile, index) => {
    // ...tile represents the rest of the properties in the
    //contacts array after extracting name
    return <Tile key={index} name={tile.name} {...tile} />;
  });

  return <div>{mappedContacts}</div>;
};
