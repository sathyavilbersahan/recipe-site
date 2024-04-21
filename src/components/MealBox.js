import React from 'react'
import { Link } from 'react-router-dom'

const MealBox = ({ meal }) => {
    return (
        
           <div className='meal-box'>
           <img src={meal.strMealThumb} alt={meal.strMeal} loading='lazy'/>
            <p>{meal.strMeal.slice(0,25)}</p>
            <Link to={`/meal/${meal.idMeal}`}>
            <i className="ri-arrow-right-up-line"></i>
            </Link>
           </div>
       
    )
}

export default MealBox