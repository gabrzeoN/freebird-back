// import bcrypt from "bcrypt";
// import * as saltUtil from "../src/utils/saltUtils.js";
// import prisma from "../src/config/database.js";
// import { Country, State, City, User } from "@prisma/client";
// import { encryptPassword } from "../src/services/authService.js";

// const countries: Country[] = [
//     {   
//         id: 1,
//         name: "Brazil"
//     },
//     {   
//         id: 2,
//         name: "Italy"
//     }
// ]

// const states: State[] = [
//     {   
//         id: 1,
//         countryId: 1,
//         name: "Parana"
//     },
//     {   
//         id: 2,
//         countryId: 1,
//         name: "Sao Paulo"
//     }
// ]

// const cities: City[] = [
//     {   
//         id: 1,
//         stateId: 1,
//         name: "Parana"
//     },
//     {   
//         id: 2,
//         stateId: 2,
//         name: "Sao Paulo"
//     }
// ]

// const users: User[] = [
//     {
//         id: 1,
//         countryId: 1,
//         fullName: "Administrator",
//         email: "admin@gmail.com",
//         password: encryptPassword("adminadmin"),
//         foneNumber: "4499988776655",
//         createdAt: new Date()
//     }
// ]

// // async function populateDatabase(
// //         data:Country[] | State[] | City[] | User[],
// //         table: "countries" | "states" | "cities" | "users"
// //     ){
// //     for(let i = 0; i < data.length; i++){
// //         await prisma[table].upsert({
// //             where: {id: data[i].id},
// //             update: {},
// //             create: data[i]
// //         });
// //     }
// // }


// async function main() {
//     for(let i = 0; i < countries.length; i++){
//         await prisma.country.upsert({
//             where: {id: countries[i].id},
//             update: {},
//             create: countries[i]
//         });
//     }
//     for(let i = 0; i < states.length; i++){
//         await prisma.state.upsert({
//             where: {id: states[i].id},
//             update: {},
//             create: states[i]
//         });
//     }
//     for(let i = 0; i < cities.length; i++){
//         await prisma.city.upsert({
//             where: {id: cities[i].id},
//             update: {},
//             create: cities[i]
//         });
//     }
//     for(let i = 0; i < users.length; i++){
//         await prisma.user.upsert({
//             where: {id: users[i].id},
//             update: {},
//             create: users[i]
//         });
//     }
// }

// main().catch(e => {
//     console.log(e);
//     process.exit(1);
// }).finally(async () => {
//     await prisma.$disconnect();
// })