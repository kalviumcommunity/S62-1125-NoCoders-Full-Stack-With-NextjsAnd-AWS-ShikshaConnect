import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john@example.com",
      projects: {
        create: [
          {
            name: "ShikshaConnect",
            tasks: {
              create: [
                { title: "Design database", status: "Done" },
                { title: "Build frontend", status: "Pending" },
              ],
            },
          },
        ],
      },
    },
  });
  console.log("Data inserted:", user);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => prisma.$disconnect());
