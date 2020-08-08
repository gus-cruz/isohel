import { getCustomRepository } from 'typeorm';

import Recipe from '../models/Recipe';

import RecipesRepository from '../repositories/RecipesRepository';
import RecipesIngredientRepository from '../repositories/RecipesIngredientRepository';
import RecipesStepRepository from '../repositories/RecipesStepRepository';

interface Request {
    title: string;
    description: string;
    ingredients: string[];
    steps: string[];
}

interface FullRecipe {
    recipe: Recipe;
    ingredients: string[];
    steps: string[];
}

class CreateRecipeService {
    public async execute({ 
        title, 
        description, 
        ingredients, 
        steps 
    }: Request): Promise<FullRecipe> {
        const recipesRepository = getCustomRepository(RecipesRepository);
        const ingredientRepository = getCustomRepository(RecipesIngredientRepository);
        const stepRepository = getCustomRepository(RecipesStepRepository);

        const recipe = recipesRepository.create({
            title,
            description,
        });

        await recipesRepository.save(recipe);
        
        ingredients.forEach(async ingredient => {
            const newIngredient = ingredientRepository.create({ingredient, recipe_id: recipe.id});
            await ingredientRepository.save(newIngredient);
        })

        steps.forEach(async (step, index) => {
            const newStep = stepRepository.create({step, recipe_id: recipe.id, number: index + 1});
            await stepRepository.save(newStep);
        })

        return {recipe, ingredients, steps}
    }
} 

export default CreateRecipeService;