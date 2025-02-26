import express from 'express'
import bcrypt from 'bcrypt'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const router = express.Router()

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

export default router