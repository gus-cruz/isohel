import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import { getCustomRepository, getRepository } from 'typeorm';
import RecipesRepository from '../repositories/RecipesRepository';
import CreateRecipeService from '../services/CreateRecipeService';
import SendRecipePictureService from '../services/SendRecipePictureService';
import AlterRecipeData from '../services/AlterRecipeData';
import RecipesIngredientRepository from '../repositories/RecipesIngredientRepository';
import Recipe from '../models/Recipe';
import UsersRepository from '../repositories/UsersRepository';

interface Ingredient {
    ingredients: {
        ingredient_id: string;
        ingredient: string;
    }[]
}

interface UserRecipe {
    username: string;
    recipe: Recipe;
}

const recipesRouter = Router();
const upload = multer(uploadConfig);

recipesRouter.get(
    '/',
    async (request, response) => {
        const recipesRepository = getCustomRepository(RecipesRepository);
        const userRepository = getCustomRepository(UsersRepository);
        const recipes = await recipesRepository.find();

        let results: UserRecipe[] = await Promise.all(recipes.map(async (recipe): Promise<UserRecipe> => {
            const user = await userRepository.findOne(recipe.user_id);

            if(!user){ return {} as UserRecipe }

            return {username: user.user, recipe};
        }));

        return response.json(results);
        
        /* recipes.map(async recipe => {
            const user = await userRepository.findOne(recipe.user_id);

            if(!user){ return }

            return {username: user.user, recipe};
        }); */
});


recipesRouter.post(
    '/',
    async (request, response) => {
        try {
            const { title, description, picture, ingredients, steps, user_id } = request.body;

            const createRecipe = new CreateRecipeService();

            const recipe = await createRecipe.execute({
                title,
                description,
                ingredients,
                steps,
                user_id
            });

            return response.json(recipe);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
); 

recipesRouter.patch(
    '/picture',
    upload.single('picture'),
    async (request, response) => {
        const { recipe_id } = request.params;
        const pictureFilename = request.file.filename;

        const sendRecipe = new SendRecipePictureService();

        await sendRecipe.execute( { recipe_id, pictureFilename } );

        return response.json({ ok: true });
    });

recipesRouter.put(
    '/update',
    async (request, response) => {
        const { ingredients, recipe_id, title, description } = request.body;

        const updateRecipe = new AlterRecipeData();

        await updateRecipe.execute( { recipe_id, ingredients, title, description });

        return response.json({ ok: true });
    }
)

export default recipesRouter;