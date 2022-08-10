import React from 'react';
import { useState } from "react"

function AddFoodForm(props) {

    const[name,setName] = useState("")
    const [calories, setCal] = useState(0)
    const [image, setImg] = useState('')
    const[servings,setServ ] = useState(0)

    const handleName = (event) => {
        let inputName = event.target.value
        setName(inputName)
    }

    const handleCal = (event) => {
        let inputCant =(Number(event.target.value)) 
        setCal(inputCant)
    }  
    const handleImg = (event) => {
        let inputImg = event.target.value
        setImg(inputImg)
    }

    const handleServ = (event) => {
        let inputCant =(Number(event.target.value)) 
        setServ(inputCant)
    }  

    const handleEnviar = (event) => {
        event.preventDefault() 

        const foodAdd = {
          name: name,
          calories: calories,
          image :image, 
          servings : servings
        }
        props.addNewFood(foodAdd)
        setName('')
        setCal(0)
        setImg('')
        setServ(0)
    }

  return (
    <div>
      <form onSubmit={handleEnviar}>
         <label htmlFor="image">Image:</label>
        <input
          type= 'text'
          name="image"
          onChange={handleImg}
          value={image}
        />

        <br />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleName}
          value={name}
        />

        <br />

        <label htmlFor="calories">Calories:</label>
        <input
          type="number"
          name="calories"
          onChange={handleCal}
          value={calories}
        />

        <br />
        <label htmlFor="servings">Servings:</label>
        <input
          type="number"
          name="servings"
          onChange={handleServ}
          value={servings}
        />

        <br />

        <button>Add</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
