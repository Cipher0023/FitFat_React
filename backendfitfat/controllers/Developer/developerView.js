import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllDevelopers = async (req, res) => {
    try {
        const developers = await prisma.developer.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                telephone: true,
                document_type: true,
                document_number: true,
                createdAt: true,
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        res.status(200).json(developers);
    } catch (err) {
        console.error('Erro ao buscar desenvolvedores:', err);
        res.status(500).json({ message: 'Erro no servidor ao buscar desenvolvedores' });
    }
};
