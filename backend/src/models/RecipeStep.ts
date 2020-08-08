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

@Entity('steps')
class Step {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    recipe_id: string;

    @ManyToOne(() => Recipe)
    @JoinColumn({ name: 'recipe_id' })
    recipe: Recipe;

    @Column()
    step: string;

    @Column()
    number: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Step;