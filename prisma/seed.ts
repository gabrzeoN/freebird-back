import prisma from "../src/config/database.js";
import { User, Location, Picture } from "@prisma/client";
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

const locations: Location[] = [
    {
        id: 1,
        hostId: 1,
        bedrooms: 1,
        pricePerNight: 185,
        description: "NATURAVE is a treetops unique stay experience. A one of a kind cabin where, from the comfort of your bedroom, you can enjoy the birds singing, sightseeing families of monkeys passing in the mountain just in front of you or just enjoy a cup of coffee surrounded by the peace of Monteverde.",
        country: "Costa Rica",
        state: "Provincia de Puntarenas",
        city: "Monteverde",
        isAvailable: true,
    },
    {
        id: 2,
        hostId: 1,
        bedrooms: 1,
        pricePerNight: 110,
        description: "Learn and share with the Andean people with all the comfort of a hotel but at ground level. The tent has a spring mattress, feather duvet, and soft blankets.. it's a luxury. The decoration is typical of the area, handmade and in some cases it is made by the same Francisca, owner of the house. There is electrical connection inside the tent and even an electric heating. The bathroom is another part of luxury, nice finishes and views, it is shared by 3 tents, maximum 6 people.",
        country: "Brazil",
        state: "Parana",
        city: "Maringa",
        isAvailable: true,
    },
    {
        id: 3,
        hostId: 1,
        bedrooms: 1,
        pricePerNight: 98,
        description: "Blue Gralha chalet! Located high on the Morro da Igreja/Urubici, with an altitude of 1,550 meters, the chalet boasts an incredible and exclusive view of the canyon and the famous Véu de Biva Waterfall, one of the most photographed spots in the Serra Catarinense mountain range. Due to its high altitude, the property is in one of the coolest regions of Brazil, with the largest snow rush in the country. It is only 1 km from the gate of access to Pedra Furada. The chalet boasts one of the best views of the entire Sierra Qatari!",
        country: "Brazil",
        state: "Santa Catarina",
        city: "Urubici",
        isAvailable: true,
    },
    {
        id: 4,
        hostId: 1,
        bedrooms: 6,
        pricePerNight: 3450,
        description: "This shoreside Cancún villa boasts an impressive, Aztec-inspired facade, with contoured white gates crowned by palm leaves and the pale Mexican sky. Spacious, bright, and evocatively-decorated rooms promise relaxed days, as the blue-green water of the Caribbean laps by the sea-level pool. The city’s fun-filled downtown and tranquil beach walks are all nearby. Picture-perfect Isla Mujeres is only a 15minute boat ride away. Meticulously-planned and glowing with distinct visual flair, Villa Sha is an ideal choice for a pampered Cancún getaway. Guests can dine at the flower-filled dining table, ringed by colorful art, as sunset colors blaze through the evening air.",
        country: "Mexico",
        state: "Quintana",
        city: "Cancún",
        isAvailable: true,
    },
];

const pictures: Picture[] = [
    {
        id: 1,
        locationId: 1,
        url: "https://a0.muscache.com/im/pictures/379f84f9-d418-41ad-b1b3-e1f9d007124d.jpg?im_w=1200"
    },
    {
        id: 2,
        locationId: 1,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53292029/original/3e737e92-7f4a-455b-9afa-73158ccf2045.jpeg?im_w=720"
    },
    {
        id: 3,
        locationId: 1,
        url: "https://a0.muscache.com/im/pictures/1e9851ac-cb69-4dd4-994d-a87e1006e6cb.jpg?im_w=720"
    },
    {
        id: 4,
        locationId: 1,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53292029/original/2c116e6a-6748-4f3f-b371-bf79a9110dcd.jpeg?im_w=720"
    },
    {
        id: 5,
        locationId: 1,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53292029/original/9640abf5-1c14-40bc-803a-b99fa2b5ef5c.jpeg?im_w=720"
    },
    {
        id: 6,
        locationId: 2,
        url: "https://a0.muscache.com/im/pictures/2fb26876-1352-4c34-afb8-ab6b1b845a60.jpg?im_w=1200"
    },
    {
        id: 7,
        locationId: 2,
        url: "https://a0.muscache.com/im/pictures/a188ccdb-7d3f-41b1-baac-9c586c9de45b.jpg?im_w=720"
    },
    {
        id: 8,
        locationId: 2,
        url: "https://a0.muscache.com/im/pictures/a947e759-77ff-4d60-97d2-569761782f9f.jpg?im_w=720"
    },
    {
        id: 9,
        locationId: 3,
        url: "https://a0.muscache.com/im/pictures/5b7b6ae3-d173-45fd-8165-728af70f2a8b.jpg?im_w=1200"
    },
    {
        id: 10,
        locationId: 3,
        url: "https://a0.muscache.com/im/pictures/c8907b14-a0f4-40fd-9140-c8d251873589.jpg?im_w=1200"
    },
    {
        id: 11,
        locationId: 3,
        url: "https://a0.muscache.com/im/pictures/daf2b2f8-8208-47a6-8109-3ad5f431a85c.jpg?im_w=720"
    },
    {
        id: 12,
        locationId: 3,
        url: "https://a0.muscache.com/im/pictures/68a36016-0e55-44a6-a542-30af188e9a2d.jpg?im_w=720"
    },
    {
        id: 13,
        locationId: 4,
        url: "https://a0.muscache.com/im/pictures/9cca0574-0703-4340-984b-bab0f46e7d6c.jpg?im_w=1200"
    },
    {
        id: 14,
        locationId: 4,
        url: "https://a0.muscache.com/im/pictures/ede52fab-c4ef-4b41-9612-a3108f0cdfa0.jpg?im_w=720"
    },
    {
        id: 15,
        locationId: 4,
        url: "https://a0.muscache.com/im/pictures/36bcc4a1-aa66-403b-b9ee-998fdf898545.jpg?im_w=1200"
    },
    {
        id: 16,
        locationId: 4,
        url: "https://a0.muscache.com/im/pictures/4c25f43c-e219-44b6-97b2-3d918d2a49f7.jpg?im_w=720"
    },
];

const locationsLinks = [
    "https://www.airbnb.com/rooms/53292029?adults=1&category_tag=Tag%3A8188&children=0&infants=0&search_mode=flex_destinations_search&check_in=2023-01-22&check_out=2023-01-27&federated_search_id=21d31014-b559-46c7-8ae2-8291d6707c5f&source_impression_id=p3_1660226357_aHQFI79Md69nvC0O&display_currency=USD&locale=en&_set_bev_on_new_domain=1659444497_ZDRlMzUwZDVhOGIw",
    "https://www.airbnb.com/rooms/25776927?adults=1&category_tag=Tag%3A634&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-08-11&check_out=2022-08-16&federated_search_id=8a4cd60c-bb45-4b70-afe4-6e8695ad3370&source_impression_id=p3_1660226381_1fm0DoexdDKbn2P%2F&locale=en&_set_bev_on_new_domain=1659444497_ZDRlMzUwZDVhOGIw&display_currency=USD",
    "https://www.airbnb.com.br/rooms/49013283?adults=1&category_tag=Tag%3A8102&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-08-27&check_out=2022-09-02&federated_search_id=ac23af80-1b9a-44fe-9332-2767c9a27c3c&source_impression_id=p3_1660226464_rO7qcXQ7E59%2F%2Fy5f",
    "https://www.airbnb.com.br/rooms/52255017?adults=1&category_tag=Tag%3A670&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-08-14&check_out=2022-08-19&federated_search_id=ef9f69f2-bc54-4712-b867-2166fbfb9350&source_impression_id=p3_1660226505_cOBo%2FO%2F5V4kqP%2F8n",
    "https://www.airbnb.com.br/rooms/19310821?adults=1&category_tag=Tag%3A670&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-09-10&check_out=2022-09-15&federated_search_id=ef9f69f2-bc54-4712-b867-2166fbfb9350&source_impression_id=p3_1660226507_advjYqj7e0t5AU8F",
    "https://www.airbnb.com.br/luxury/listing/54242345?adults=1&category_tag=Tag%3A5635&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-10-30&check_out=2022-11-06&federated_search_id=cfa45ecb-f635-41dd-be80-92faeb9fd9b4&source_impression_id=p3_1660226551_MW6NKFa3bqWJLwSs",
    "https://www.airbnb.com.br/luxury/listing/41774579?adults=1&category_tag=Tag%3A5635&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-08-13&check_out=2022-08-19&federated_search_id=390528fc-ea0e-4849-be21-dc75dbed53a5&source_impression_id=p3_1660226568_p6OBv%2FNKJehWeAXE",
    "https://www.airbnb.com.br/rooms/49227437?adults=1&category_tag=Tag%3A675&children=0&infants=0&search_mode=flex_destinations_search&check_in=2023-02-01&check_out=2023-02-06&federated_search_id=fcc27276-f13c-4077-9644-75e797c96eb5&source_impression_id=p3_1660226116_vrWZWbpwNvVAeFhi",
    "https://www.airbnb.com.br/rooms/47728550?adults=1&category_tag=Tag%3A675&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-08-15&check_out=2022-08-20&federated_search_id=fcc27276-f13c-4077-9644-75e797c96eb5&source_impression_id=p3_1660226146_EXd6HYtpqQiTUNmN",
    "https://www.airbnb.com.br/rooms/18459444?adults=1&category_tag=Tag%3A675&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-08-11&check_out=2022-08-16&federated_search_id=75af09ca-b917-4e54-a157-1a31e9eed603&source_impression_id=p3_1660226166_p15C9ZhhmxCgwezd",
    "https://www.airbnb.com.br/rooms/52043385?adults=1&category_tag=Tag%3A8225&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-10-12&check_out=2022-10-17&federated_search_id=82c0624c-aae2-4f1e-a7ff-704bd5b96840&source_impression_id=p3_1660226224_sMiw1oYlcS2mHvCk",
    "https://www.airbnb.com.br/rooms/52895054?adults=1&category_tag=Tag%3A677&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-12-01&check_out=2022-12-06&federated_search_id=b81722bc-593c-4df0-b8c7-c3a45ecbc28d&source_impression_id=p3_1660226259_88sP8POQmqZ2xm6r",
    "https://www.airbnb.com.br/rooms/53941129?adults=1&category_tag=Tag%3A677&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-08-15&check_out=2022-08-21&federated_search_id=35bf9369-6c71-42b1-ad26-082ffa27cddf&source_impression_id=p3_1660226282_HUyl3bAMVbTGUEjj",
    "https://www.airbnb.com.br/luxury/listing/20472958?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-09-04&check_out=2022-09-11&federated_search_id=c23ae200-05c9-4485-ab12-3acfda063af0&source_impression_id=p3_1660226315_Xk5GnfagD3nks1JK",
    "https://www.airbnb.com.br/rooms/156247?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-08-12&check_out=2022-08-18&federated_search_id=edd75ea0-1147-49e9-806c-b05e1a96f86b&source_impression_id=p3_1660226331_9h9BFJKzlBbCyZOS"
]

async function main() {
    for (let i = 0; i < users.length; i++) {
        await prisma.user.upsert({
            where: { id: users[i].id },
            update: {},
            create: users[i]
        });
    }
    for (let i = 0; i < locations.length; i++) {
        await prisma.location.upsert({
            where: { id: locations[i].id },
            update: {},
            create: locations[i]
        });
    }
    for (let i = 0; i < pictures.length; i++) {
        await prisma.picture.upsert({
            where: { id: pictures[i].id },
            update: {},
            create: pictures[i]
        });
    }
}

main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})