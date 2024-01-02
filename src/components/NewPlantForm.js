import React, {useState} from "react";

function NewPlantForm({addPlant}) {

  const [plantObj, setPlantObj] = useState({
    name: "",
    image: "",
    price: "",
  })

  function handleEventChange(event){

    const { name, value } = event.target;
    
    setPlantObj((prevObj) => ({
      ...prevObj,
      [name]: value,
    }));

    console.log(plantObj)
  }

  function handleAddPlantSubmit(event){
    event.preventDefault()
    console.log("Called from submit: ", plantObj)

    const configObj = {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({
        'name': plantObj.name,
        'image': plantObj.image,
        'price': plantObj.price
      })
    }

    fetch(`http://localhost:6001/plants`, configObj)
    .then(r => r.json())
    .then(data => addPlant(plantObj))

    setPlantObj({
      name: "",
      image: "",
      price: "",
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder={`Plant name`} value={plantObj.name} onChange={handleEventChange}/>
        <input type="text" name="image" placeholder="Image URL" value={plantObj.image} onChange={handleEventChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={plantObj.price} onChange={handleEventChange} />
        <button type="submit" onClick={handleAddPlantSubmit}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
