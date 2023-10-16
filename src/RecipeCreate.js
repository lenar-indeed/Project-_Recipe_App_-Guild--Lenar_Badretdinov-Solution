import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({name, cuisine, photo, ingredients, preparation});
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };
  const handleNameChange = (event) => setName(event.target.value);
  const handleCuisineChange = (event) => setCuisine(event.target.value);
  const handlePhotoChange = (event) => setPhoto(event.target.value);
  const handleIngredientsChange = (event) => setIngredients(event.target.value);
  const handlePreparationChange = (event) => setPreparation(event.target.value);
  
  return (
    <form name="create" onSubmit={handleSubmit} >
      <table>
        <tbody>
          <tr>
            <td><input id="name" type="text" name="name" onChange={handleNameChange} value={name} /></td>
            <td><input id="cuisine" type="text" name="cuisine" onChange={handleCuisineChange} value={cuisine} /></td>
            <td><input id="photo" type="text" name="photo" onChange={handlePhotoChange} value={photo} /></td>
            <td><textarea id="ingredients" name="ingredients" onChange={handleIngredientsChange} value={ingredients} /></td>
            <td><textarea id="preparation" name="preparation" onChange={handlePreparationChange} value={preparation} /></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
