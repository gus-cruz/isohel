import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn,  
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm';

import User from './User';

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

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Recipe;