import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
      fetch(`http://localhost:6001/plants`)
      .then(r => r.json())
      .then(data => setListings(data))
  }, [])

const handleAddPlant = (newPlant) => {
  setListings([...listings, newPlant])
}

  return (
    <main>
      <NewPlantForm addPlant={handleAddPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList allPlants={listings} search={search}/>
    </main>
  );
}

export default PlantPage;
