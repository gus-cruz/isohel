import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';

const usersCreate = Router();
const upload = multer(uploadConfig);

usersCreate.get(
    '/',
    async (request, response) => {
        const usersRepository = getCustomRepository(UsersRepository);
        const users = await usersRepository.find();

        return response.json(users);    
});

usersCreate.post('/',
    async (request, response) => {
        try {
            const { name, last_name, icon, email, user, password } = request.body;

            const createUser = new CreateUserService();

            const users = await createUser.execute({
                name,
                last_name,
                email,
                user,
                password
            });

            return response.json(users);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
);

export default usersCreate;
