import React from "react";
import './App.css'
function RecipeList({deleteRecipe, recipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th style={{width: '10%'}}>Name</th>
            <th style={{width: '10%'}}>Cuisine</th>
            <th style={{width: '10%'}}>Photo</th>
            <th style={{width: '30%'}}>Ingredients</th>
            <th style={{width: '30%'}}>Preparation</th>
            <th style={{width: '10%'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((formData,index)=>{
            return(
       
              <tr className="recipe-td" key={index}>
                <td><p>{formData.name}</p></td>
                <td>{formData.cuisine}</td>
                <td ><img src={formData.photo} className="image-content"/></td>
                <td className="content_td"><p>{formData.ingredients}</p></td>
                <td className="content_td"><p>{formData.preparation}</p></td>
                <td><button name="delete" onClick={()=>{deleteRecipe(index)}}>delete</button></td>
              </tr>
         
          )})}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
