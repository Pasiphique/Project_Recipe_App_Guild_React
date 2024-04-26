import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const addToRecipe = (form) =>{
    setRecipes([...recipes, form])
  }
  const deleteRecipe = (id) =>{
    setRecipes(recipes.filter((item,index) => id !== index))
  }
  return (
    <div className="App">
      <header className="title"><h1>Delicious Food Recipes</h1></header>
      <RecipeList deleteRecipe={deleteRecipe} recipes={recipes}/>
      <RecipeCreate addToRecipe={addToRecipe}/>
    </div>
  );
}

export default App;
