import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn,  
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm';

import Recipe from './Recipe';

@Entity('recipe_ingredients')
class RecipeIngredient {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    recipe_id: string;

    @ManyToOne(() => Recipe)
    @JoinColumn({ name: 'recipe_id' })
    recipe: Recipe;

    @Column()
    ingredient: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default RecipeIngredient;