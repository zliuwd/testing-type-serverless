import { prisma } from './generated/prisma-client';
async function main(): Promise<void> {
  await prisma.createUser({
    name: 'Alice',
    email: 'alice@prisma.io',
  });
  await prisma.createUser({
    name: 'Jason',
    email: 'Jason@prisma.io',
  });
}
main().catch(e => console.error(e));
