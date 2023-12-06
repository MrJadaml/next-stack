import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Account
// Address
// Business
// User
// Session
// VerificationToken

async function main() {
  // Delete all existing records
  await prisma.verificationToken.deleteMany({});
  await prisma.session.deleteMany({});
  await prisma.business.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.address.deleteMany({});

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
      email: 'gill@mail.com',
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

  const john = await prisma.user.upsert({
    where: { email: 'john@mail.com' },
    update: {},
    create: {
      email: 'john@mail.com',
      name: 'John',
      businesses: {
        create: [
          {
            name: 'Things and Stuffs',
          },
        ],
      },
    },
  })

  console.log({ bob, gill, john })
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
