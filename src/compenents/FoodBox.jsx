import React from 'react'


function FoodBox(props) {
    
  return (
    <div  >
        <img height = '200px' src={props.eachFood.image}  />
        <br />
        <h3>{props.eachFood.name}</h3>
        <br />
        <span>Calories: {props.eachFood.calories}</span>
        <br />
        <span>Servings: {props.eachFood.servings}</span>
        <br />
        <span>Total calories: {props.eachFood.calories*props.eachFood.servings} </span>
    </div>
  )
}

export default FoodBox