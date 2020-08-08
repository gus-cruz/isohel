import RecipeIngredient from '../models/RecipeIngredient';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(RecipeIngredient)
class RecipesIngredientRepository extends Repository<RecipeIngredient> {
}

export default RecipesIngredientRepository;