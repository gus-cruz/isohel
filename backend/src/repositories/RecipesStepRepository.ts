import RecipeStep from '../models/RecipeStep';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(RecipeStep)
class RecipesStepRepository extends Repository<RecipeStep> {
}

export default RecipesStepRepository;