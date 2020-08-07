import { getRepository, useContainer } from 'typeorm';
import Recipe from '../models/Recipe';

interface Request {
    recipe_id: string,
    pictureFilename: string
}

class SendRecipePictureService {
    public async execute({ recipe_id, pictureFilename }: Request): Promise<Recipe> {
        const recipeRepository = getRepository(Recipe);

        const recipe = await recipeRepository.findOne(recipe_id);

        if (!recipe) {
            throw new Error('Erro.')
        }

        recipe.picture = pictureFilename;  
        
        await recipeRepository.save(recipe);

        return recipe;
    }
}

export default SendRecipePictureService;