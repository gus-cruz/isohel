import { getRepository, getCustomRepository } from 'typeorm';

import Recipe from '../models/Recipe';
import RecipeIngredient from '../models/RecipeIngredient';

import RecipesIngredientRepository from '../repositories/RecipesIngredientRepository';

interface Request {
    recipe_id: string;
    title: string;
    description: string;
    ingredients: {
        ingredient_id: string;
        ingredient: string;
    }[]
}

class AlterRecipeData {
    public async execute({
        recipe_id,
        title,
        description,
        ingredients,
    }: Request): Promise<Recipe>{
        const recipeRepository = getRepository(Recipe);
        const ingredientRepository = getCustomRepository(RecipesIngredientRepository);
        const recipe = await recipeRepository.findOne(recipe_id);

        if(!recipe){
            throw new Error ('Error');
        }

        recipe.title = title;
        recipe.description = description;

        await recipeRepository.save(recipe);

        ingredients.forEach(async ingredient => {
            let newIngredient = await ingredientRepository.findOne(ingredient.ingredient_id);

            if(!newIngredient){
                return;
            }

            newIngredient.ingredient = ingredient.ingredient

            await ingredientRepository.save(newIngredient);
        })

        console.log(recipe, ingredients);
        
        return recipe;
    }
}

export default AlterRecipeData;