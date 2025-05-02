import bcrypt from 'bcrypt'         // For password hashing
import {PrismaClient} from '@prisma/client'  // Database ORM
import dotenv from 'dotenv'

dotenv.config();
const prisma = new PrismaClient();

export const registerUser = async (req, res) => {

    try{
        const {email, password, name} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);

        const newUser = await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: hashpassword
            }
        });

        res.status(201).json(newUser);
    }

    catch(err){
        res.status(500).json({message: 'Erro no servidor, tente novamente mais tarde'});
    }
}
