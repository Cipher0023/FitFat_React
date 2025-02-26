import express from 'express'
import bcrypt from 'bcrypt'
import {PrismaClient} from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const router = express.Router()

const JWT_SECRET = process.env.JWT_SECRET

//Cadastro
router.post('/cadastro', async(req, res) => {

    try{
        const user = req.body

        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(user.password, salt)

        const userDB = await prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                password: hashpassword
            }
        })
        res.status(201).json(userDB)
    }
    catch (err) {
        res.status(500).json({message: 'Erro no servidor, tente novamente mais tarde'})
    }
})

router.post('/login', async(req, res) => {

    try{
        const userInfo = req.body


        //search for user in the database
        const user = await prisma.user.findUnique({
            where:{email:userInfo.email},
        })

        //verify if user exists
        if(!user){
            return res.status(404).json({message: 'Usuário não encontrado'})
        }

        const isMatch = await bcrypt.compare(userInfo.password, user.password)

        //compare the password
        if(!isMatch){
            return res.status(400).json({message: 'senha incorreta'})
        }

        //generate token
        const token = jwt.sign({id:user.id}, JWT_SECRET, {expiresIn: '7d'})

        res.status(200).json(token)
    }
    catch(err){
        res.status(500).json({message: 'Erro no servidor, tente novamente mais tarde'})
    }


})

export default router