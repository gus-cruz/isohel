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
    name: string;

    @Column()
    last_name: string;

    @Column()
    icon: string;

    @Column()
    email: string;

    @Column()
    user: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Recipe;