import { prisma } from "@/prisma";

async function seed() {
   await prisma.user.createMany({
      data: [
         {
            name: "Quickley",
            email: "iq@email.com"
         },
         {
            name: "Luka Doncic",
            email: "luka@email.com"
         },
         {
            name: "Franz Wagner",
            email: "magic@email.com"
         },
         {
            name: "Moritz Wagner",
            email: "vito@email.com"
         },
         {
            name: "Shai Gilgeous",
            email: "sga@email.com"
         },
      ]
   })
}

seed().then(() => {
   console.log("Finished Seed")
   prisma.$disconnect()
})