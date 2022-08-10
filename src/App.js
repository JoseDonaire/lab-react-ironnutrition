// src/App.js
import './App.css';
import foods from './foods.json';
import { useState } from "react"
import FoodBox from './compenents/FoodBox';
import AddFoodForm from './compenents/AddFoodForm';
import Search from './compenents/Search';




function App() {
  const [food, setFoods] = useState(foods);
  const [visibleFood,setVisibleFood] =useState(foods);

  const addNewFood = (food1) => {
    setFoods( [...food, food1] )
    setVisibleFood([...visibleFood,food1])
  }
  
  const filterFood = (search) => {
    const filteredArr = food.filter((eachFood) => {
    return eachFood.name.includes(search);
   });
   setVisibleFood(filteredArr);
  }; 
  const deleteFood = (name) => {
    const filteredArr = visibleFood.filter((eachFood)=>{
      return eachFood.name !== name;
    })
    setVisibleFood(filteredArr)
  }


  return (
  <div className="App">



      
      <div className='Form'>
      <AddFoodForm addNewFood={addNewFood}/>
      </div>
      <div>
        <Search filterFood={filterFood}/>
      </div>
      <div className='Cards'>
      {visibleFood.map((eachFood) => {
        return (
          <div>
          <FoodBox eachFood = {eachFood}/>

          <button onClick={() =>deleteFood(eachFood.name)}>Delete Food</button>
          </div>
        )
      })}
      </div>
  </div>
)}
export default App;

