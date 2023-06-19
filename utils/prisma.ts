import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma

// import { Prisma, PrismaClient } from "@prisma/client";

// declare global {
//   namespace NodeJS {
//     interface Global {
//       prisma: PrismaClient;
//     }
//   }
// }

// let prisma: PrismaClient;

// if (typeof window === "undefined") {
//   if (process.env.NODE_ENV === "production") {
//     prisma = new PrismaClient();
//   } else {
//     if (!global.prisma) {
//       global.prisma = new PrismaClient();
//     }

//     prisma = global.prisma;
//   }
// }

// export default prisma;