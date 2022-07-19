import React, { useState } from "react";
import logo from'../src/logo.png';
import './app.css'
import {AddCategory} from "./components";
import  {GifGrid } from "./components";


export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);


  };


  const handleOnRemove = index => {
    const value = [...categories];
    value.splice(index, 1);
    setCategories(value);
  };
  const handleRemoveAll = () => {
    setCategories(categories.filter((category) => category !== category));
  };
  


  return (
    <div className="App">
      {/* Titulo y logo */}
      <div className="App-tituloylogo">
      <h1>GoGif</h1>
      <img src={logo} className="App-logo" alt="logo" />
      
</div>
      {/* Input */}
      <div className="App-search">
      <AddCategory addCategory={handleAddCategory} className="App-searchFolder"/>
      <button className="reset-all" onClick={handleRemoveAll}>Reset all</button>
      </div>
      
      
      {/* Listado de Gif */}
<div className="card-columns">

       {
        React.Children.toArray(
        categories.map((category) => (
                  <div><div className= "head-categories"><h1>#{category}</h1><button className="delete-category" onClick={handleOnRemove}>Delete category</button></div><GifGrid className="categories" key={category} category={category}/> </div>
                  
        ))
      )}
      
      </div>
    </div>
  );
};
