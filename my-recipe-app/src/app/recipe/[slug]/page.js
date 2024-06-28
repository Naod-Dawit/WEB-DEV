"use client";
import "/home/naex/Desktop/REACT PROJECTS/my-recipe-app/src/styles/style.css";
import { useEffect, useState } from "react";

export default function RecipeDetail({ params }) {
  console.log(params);
  const id = params.slug;

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://dummyjson.com/recipes/${id}`);
          const data = await response.json();
          setRecipe(data);
        } catch (error) {
          console.error("Failed to fetch recipe details", error);
        }
      };
      fetchData();
    }
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="item">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <div className="content">
        <h2>Ingredients</h2>
        <p>{recipe.ingredients}</p>
        <h2>Instructions</h2>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
}
