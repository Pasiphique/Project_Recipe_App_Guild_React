import { use } from "marked";
import React, { useState } from "react";

function RecipeCreate({addToRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  const formData= {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  }
  const [form,setForm] = useState({...formData})
 
  const handleInput = ({target}) =>{
    setForm({...form, [target.name]: target.value})
  }

 const handleSubmit = (e) =>{
  e.preventDefault()
  addToRecipe(form)
  setForm({...formData})
 }
 
  
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label>
                Name
              <input type='text' name="name" value={form.name} onChange={handleInput}/>
              </label>
            </td>
            <td>
              <label>
                Cuisine
              <input type='text' name="cuisine" value={form.cuisine} onChange={handleInput}/>
              </label>
            </td>
            <td>
              <label>
              Photo
              <input type='url' name="photo" value={form.photo} onChange={handleInput}/>
              </label>
            </td>
            <td>
              <label>
               Ingredients
               <textarea name="ingredients" value={form.ingredients} onChange={handleInput}/>
              </label>
            </td>
            <td>
              <label>
               Preparation
               <textarea name="preparation" value={form.preparation} onChange={handleInput}  />
              </label>
            </td>
            <td>
              <label>
                Actions
                <button type="submit">Create</button>
              </label>
              
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
