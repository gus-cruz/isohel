import { getCustomRepository } from 'typeorm';

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

        const users = usersRepository.create({
            name, 
            last_name, 
            email,
            user,
            password
        });

        await usersRepository.save(users);

        return {name, last_name, email, user, password} as User;
    }
} 

export default CreateUserService;