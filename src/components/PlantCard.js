import React, {useState} from "react";

function PlantCard({plant}) {

  const [inStock, setInStock] = useState(true)
  const {id, name, image, price} = plant

  const handleStockChange = () => {setInStock(!inStock)}
  // const handleDelete = (id) => {

  // }

  return (
    <li className="card">
      <img src={image || "https://via.placeholder.com/400"} alt={name || "plant name"} />
      <h4>{name || "plant name"}</h4>
      <p>Price: {price || "plant price"}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockChange}>In Stock</button>
      ) : (
        <button onClick={handleStockChange}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
