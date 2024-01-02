import React from "react";
import PlantCard from "./PlantCard";

function PlantList({allPlants, search}) {

  const regexPattern = new RegExp(search, 'i'); // 'i' flag for case-insensitive matching
  const filteredListings = allPlants.filter((plant) => regexPattern.test(plant.name))
  console.log(allPlants.length)

  return (
    <ul className="cards">{
      /* render PlantCards components in here */
        search === ""
        ? allPlants.map((plant) => <PlantCard key={`${plant.id}-${plant.name}`} plant={plant}/>)
        : filteredListings.map((plant) => <PlantCard key={`${plant.id}-${plant.name}`} plant={plant}/>)
    }</ul>
  );
}

export default PlantList;
