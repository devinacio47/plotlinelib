// lib/prisma.ts
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Make sure you have DATABASE_URL in your .env
if (!process.env.DATABASE_URL) {
  throw new Error("Please define the DATABASE_URL environment variable inside .env");
}

// Create the Postgres adapter
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

// Global singleton for Next.js to avoid multiple clients in dev
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  globalThis.prisma ??
  new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}
