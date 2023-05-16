import React from "react";
import { Tile } from "../tile/Tile";
export const TileList = ({ contactTiles }) => {
  // console.log(contacts)
  const mappedContacts = contactTiles.map((tile, index) => {
    //extract name out & description = email, phone info
    return <Tile key={index} name={tile.name} description={tile}/>;
  });
  return (
    <div>
      {mappedContacts}
    </div>
  );
};
