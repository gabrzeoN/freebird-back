import { faker } from "@faker-js/faker";

export function signUpInput(){
    const password = faker.internet.password();
    return {
        country: faker.address.country(),
        fullName: faker.name.fullName(),
        email: faker.internet.email(),
        password: password,
        foneNumber: faker.phone.number("###########")
    }
}

export function signInInput(){
    return {
        email: faker.internet.email(),
        password: faker.internet.password()
    }
}