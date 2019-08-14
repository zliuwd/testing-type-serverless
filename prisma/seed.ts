import { prisma } from '../src/generated/prisma-client';
async function main() {
  await prisma.createUser({
    name: "Alice",
    email: "alice@prisma.io"
  });
  await prisma.createUser({
    name: "Jason",
    email: "Jason@prisma.io"
  });
}
main().catch(e => console.error(e))
