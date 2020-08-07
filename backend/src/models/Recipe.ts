import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn,  
    UpdateDateColumn 
} from 'typeorm';

@Entity('recipes')
class Recipe {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    title: string;

    @Column()
    picture: string;

    @Column()
    description: string;

    @Column()
    ingredients: string;

    @Column()
    steps: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Recipe;