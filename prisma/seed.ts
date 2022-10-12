import { PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';

const test = async () => {
  const prisma = new PrismaClient();
  await prisma.user.create({
    data: {
      email: Random.email(),
      name: Random.string(1, 5),
    },
  });
};
test();
