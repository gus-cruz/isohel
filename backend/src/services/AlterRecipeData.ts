import { getRepository } from 'typeorm';

import Recipe from '../models/Recipe';

import RecipesRepository from '../repositories/RecipesRepository';

interface Request {
    recipe_id: string;
    title: string;
    description: string;
}

class AlterRecipeData {
    public async execute({
        recipe_id,
        title,
        description
    }: Request): Promise<Recipe>{
        const recipeRepository = getRepository(Recipe);
        const recipe = await recipeRepository.findOne(recipe_id);

        if(!recipe){
            throw new Error ('Error');
        }

        recipe.title = title;
        recipe.description = description;

        await recipeRepository.save(recipe);

        console.log(recipe.title);
        
        return recipe;
    }
}

export default AlterRecipeData;