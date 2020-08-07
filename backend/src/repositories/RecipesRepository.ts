import Recipe from '../models/Recipe';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Recipe)
class RecipesRepository extends Repository<Recipe> {
}

export default RecipesRepository;