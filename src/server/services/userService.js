import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createUser(email, password) {
  return await prisma.user.create({
    data: { email, password },
  });
}
