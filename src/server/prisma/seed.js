import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: { email: "admin@example.com", password: "admin123" },
  });
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());

  
