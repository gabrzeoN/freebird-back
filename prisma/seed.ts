import prisma from "../src/config/database.js";
import { User } from "@prisma/client";
import { encryptPassword } from "../src/services/authService.js";

const users: User[] = [
    {
        id: 1,
        country: "Brazil",
        fullName: "Administrator",
        email: "admin@gmail.com",
        password: encryptPassword("adminadmin"),
        foneNumber: "4499988776655",
        createdAt: new Date()
    }
]

async function main() {
    for(let i = 0; i < users.length; i++){
        await prisma.user.upsert({
            where: {id: users[i].id},
            update: {},
            create: users[i]
        });
    }
}

main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})