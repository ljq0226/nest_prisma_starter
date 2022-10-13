import { PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';

const test = async () => {
  const prisma = new PrismaClient();
  await prisma.user.create({
    data: {
      username: Random.string(1, 5),
      password: Random.string(1, 5)
    },
  });
};
test();
