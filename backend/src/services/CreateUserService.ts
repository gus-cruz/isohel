import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';

import UsersRepository from '../repositories/UsersRepository';

interface Request {
    name: string;
    last_name: string;
    email: string;
    user: string;
    password: string
}

class CreateUserService {
    public async execute({ 
        name, 
        last_name, 
        email,
        user,
        password
    }: Request): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);

        const hashedPassword = await hash(password, 8);

        const users = usersRepository.create({
            name, 
            last_name, 
            email,
            user,
            password: hashedPassword,
        });

        await usersRepository.save(users);

        return {name, last_name, email, user} as User;
    }
} 

export default CreateUserService;