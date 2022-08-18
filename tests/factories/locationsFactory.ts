import { faker } from "@faker-js/faker";

export function locationInput() {
    return {
        hostId: 1,
        description: faker.lorem.paragraph(),
        pricePerNight: parseInt(faker.finance.amount(1, 2000000)),
        isAvailable: true,
        bedrooms: 3,
        country: faker.address.country(),
        state: faker.address.state(),
        city: faker.address.city(),
        picture: faker.image.city(),
    }
}