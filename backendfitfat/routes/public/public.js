// Required imports
import express from 'express'
import bcrypt from 'bcrypt'         // For password hashing
import {PrismaClient} from '@prisma/client'  // Database ORM
import jwt from 'jsonwebtoken'      // For authentication tokens
import dotenv from 'dotenv'

// Initialize Prisma client and Express router
const prisma = new PrismaClient()
const router = express.Router()
dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET

// Registration endpoint
router.post('/cadastro', async(req, res) => {
    try{
        const user = req.body
        // Generate salt and hash password
        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(user.password, salt)

        // Create user in database
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

// Login endpoint
router.post('/login', async(req, res) => {
    try{
        const userInfo = req.body

        // Find user by email
        const user = await prisma.user.findUnique({
            where:{email:userInfo.email},
        })

        if(!user){
            return res.status(404).json({message: 'Usuário não encontrado'})
        }

        // Verify password
        const isMatch = await bcrypt.compare(userInfo.password, user.password)
        if(!isMatch){
            return res.status(400).json({message: 'senha incorreta'})
        }

        // Generate JWT token valid for 7 days
        const token = jwt.sign({id:user.id}, JWT_SECRET, {expiresIn: '7d'})
        res.status(200).json(token)
    }
    catch(err){
        res.status(500).json({message: 'Erro no servidor, tente novamente mais tarde'})
    }
})

export default router
