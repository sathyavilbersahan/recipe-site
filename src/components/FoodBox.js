import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const FoodBox = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate()

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`food-box ${isHovered ? 'hovered' : ''}`}
      onMouseOver={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={()=>navigate(`/category/${category.strCategory}`)}
    >
      <img src={category.strCategoryThumb} alt="" loading='lazy' />
      {isHovered && (
        <p className="category-text">{category.strCategory}</p>
      )}
    </div>
  );
};

export default FoodBox;
