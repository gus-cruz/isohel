import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import { getCustomRepository } from 'typeorm';
import RecipesRepository from '../repositories/RecipesRepository';
import CreateRecipeService from '../services/CreateRecipeService';
import SendRecipePictureService from '../services/SendRecipePictureService';
import AlterRecipeData from '../services/AlterRecipeData';


const recipesRouter = Router();
const upload = multer(uploadConfig);

recipesRouter.get('/', (request, response) => {
    const recipesRepository = getCustomRepository(RecipesRepository);
    const recipes = recipesRepository.find();

    return response.json(recipes);
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
    '/',
    async (request, response) => {
        const { recipe_id, title, description } = request.body;

        const updateRecipe = new AlterRecipeData();

        await updateRecipe.execute( { recipe_id, title, description });

        return response.json({ ok: true });
    }
)

export default recipesRouter;