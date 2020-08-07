import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import RecipesRepository from '../repositories/RecipesRepository';
import CreateRecipeService from '../services/CreateRecipeService';

const recipesRouter = Router();

recipesRouter.get('/', (request, response) => {
    const recipesRepository = getCustomRepository(RecipesRepository);
    const recipes = recipesRepository.find();

    return response.json(recipes);
});

recipesRouter.post('/', async (request, response) => {
    try {
        const { title, description, picture, ingredients, steps } = request.body;

        const createRecipe = new CreateRecipeService();

        const recipe = await createRecipe.execute({
            title,
            description,
            picture,
            ingredients,
            steps
        });

        return response.json(recipe);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default recipesRouter;