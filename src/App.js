import React from 'react'
import "./App.css"
import Menu from './menu/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from './category/Category'
import Home from './home/Home'
import Meal from './meal/Meal'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
     <Navbar/> 
    <Routes>
      
       <Route path='/' element={<Home/>}/> 
      <Route path='/menu' element={<Menu/>}/> 
      <Route path='category/:category' element={<Category/>}/>
       <Route path='meal/:id' element={<Meal/>}/> 
    </Routes>  
     <Footer/>
    </BrowserRouter>
  )
}

export default App
