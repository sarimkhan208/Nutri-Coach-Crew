import axios from 'axios';
import { useEffect, useState } from 'react';

interface Recipe {
    name: string;
    description: string;
    prepareTime: number;
    cookTime: number;
    tags: Array<string>;
    steps: Array<string>;
    ingredients: Array<{
      name: string;
      servingSize: {
        qty: number;
        units: string;
      };
    }>;
    image: string;
    nutrients: {
    caloriesKCal: number;
    totalCarbs: number;
    fiber: number;
    starch: number;
    sugar: number;
    addedSugar: number;
    sugarAlcohols: number;
    protein: number;
    fat: number;
    transFat: number;
    monousatFat: number;
    polyunsatFat: number;
    omega3Fat: number;
    omega6Fat: number;
    saturatedFat: number;
    cholesterol: number;
    vitaminA: number;
    vitaminC: number;
    vitaminD: number;
    potassium: number;
    magnesium: number;
    calcium: number;
    alcohol: number;
    caffeine: number;
    gluten: number;
    }
  }
  

function Recipes(): JSX.Element {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  const options = {
    method: 'GET',
    url: 'https://low-carb-recipes.p.rapidapi.com/random',
    headers: {
      'X-RapidAPI-Key': '58e608d9d3msh96f55c7822176e3p116ec7jsnd167d5bc5a97',
      'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com',
    },
  };

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await axios.request<Recipe>(options);
        console.log(response.data);
        setRecipe(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRecipes();
  }, []);

  return (
    <>
      {recipe && (
        <div className="bg-gray-100 py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h1 className="text-3xl font-bold text-gray-800">{recipe.name}</h1>
              <div className="flex justify-center text-gray-600 space-x-2 mt-2">
                <span>Prep Time: {recipe.prepareTime} min</span>
                <span>&middot;</span>
                <span>Cooking Time: {recipe.cookTime} min</span>
                <span>&middot;</span>
                <span>{recipe.tags.join(", ")}</span>
              </div>
            </div>
  
            <div className="mt-8 lg:flex lg:justify-center">
              <div className="lg:w-1/2 lg:pr-8">
                {recipe.image && (
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="rounded-lg shadow-md"
                  />
                )}
              </div>
  
              <div className="mt-8 lg:w-1/2 lg:pl-8">
                <div className="text-gray-700 leading-7">{recipe.description}</div>
  
                <div className="my-8">
                  <h2 className="text-xl font-bold text-gray-800">Ingredients:</h2>
                  <ul className="list-disc list-inside">
                    {recipe.ingredients.map((ingredient) => (
                      <li key={ingredient.name}>
                        {ingredient.name}{" "}
                        {ingredient.servingSize.qty &&
                          ingredient.servingSize.units && (
                            <span className="text-gray-600">
                              (
                              {`${ingredient.servingSize.qty} ${ingredient.servingSize.units}`}
                              )
                            </span>
                          )}
                      </li>
                    ))}
                  </ul>
                </div>
  
                <div className="my-8">
                  <h2 className="text-xl font-bold text-gray-800">Instructions:</h2>
                  <ol className="list-decimal list-inside">
                    {recipe.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
  
                {recipe.nutrients && (
                  <div className="my-8">
                    <h2 className="text-xl font-bold text-gray-800">Nutrients:</h2>
                    <ul className="list-disc list-inside">
                      <li>Calories: {recipe.nutrients.caloriesKCal}</li>
                      <li>Total Carbs: {recipe.nutrients.totalCarbs}</li>
                      <li>Fiber: {recipe.nutrients.fiber}</li>
                      <li>Starch: {recipe.nutrients.starch}</li>
                      <li>Sugar: {recipe.nutrients.sugar}</li>
                      <li>Added Sugar: {recipe.nutrients.addedSugar}</li>
                      <li>Sugar Alcohols: {recipe.nutrients.sugarAlcohols}</li>
                      <li>Protein: {recipe.nutrients.protein}</li>
                      <li>Fat: {recipe.nutrients.fat}</li>
                      <li>Trans Fat: {recipe.nutrients.transFat}</li>
                      <li>Monounsaturated Fat: {recipe.nutrients.monousatFat}</li>
                      <li>Polyunsaturated Fat: {recipe.nutrients.polyunsatFat}</li>
                      <li>Omega-3 Fat: {recipe.nutrients.omega3Fat}</li>
                      <li>Omega-6 Fat: {recipe.nutrients.omega6Fat}</li>
                      <li>Saturated Fat: {recipe.nutrients.saturatedFat}</li>
                      <li>Cholestrol: {recipe.nutrients.cholesterol}</li>
                      <li>Vitamin A: {recipe.nutrients.vitaminA}</li>
                      <li>Vitamin C: {recipe.nutrients.vitaminC}</li>
                      <li>Vitamin D: {recipe.nutrients.vitaminD}</li>
                      <li>Potassium: {recipe.nutrients.potassium}</li>
                      <li>Magnesium: {recipe.nutrients.magnesium}</li>
                      <li>Calcium: {recipe.nutrients.calcium}</li>
                      <li>Alcohol: {recipe.nutrients.alcohol}</li>
                      <li>Caffeine: {recipe.nutrients.caffeine}</li>
                      <li>Gluten: {recipe.nutrients.gluten}</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
  
}

export default Recipes