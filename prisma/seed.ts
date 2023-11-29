import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Account
// Address
// Business
// User
// Session
// VerificationToken

async function main() {
  const bob = await prisma.user.upsert({
    where: { email: 'bob@mail.com' },
    update: {},
    create: {
      email: 'bob@mail.com',
      name: 'Bob',
      businesses: {
        create: [
          {
            name: 'Bobs Tavern',
          },
          {
            name: 'Self Help Sailing Inc.',
          },
        ],
      },
    },
  })

  const gill = await prisma.user.upsert({
    where: { email: 'gill@mail.com' },
    update: {},
    create: {
      email: 'gillbob@mail.com',
      name: 'Gill',
      businesses: {
        create: [
          {
            name: 'Gills Fish Emporium',
          },
        ],
      },
    },
  })

  console.log({ bob, gill })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
