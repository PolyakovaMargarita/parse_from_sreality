import {PrismaClient} from '@prisma/client'
import * as scrapper from "../../src/helpers/sreality_scrapper_script/scrapper";

const prisma = new PrismaClient();


async function seedScrapperData() {

    const arr = await scrapper.runScraper('https://www.sreality.cz/en', 500);

    for (const item of arr) {
        try {
            const user = await prisma.scrapped.create({
                data: item
            });
            console.log('Data seeded successfully')
        } catch (e) {
            console.log('Error seeding data')
        }
    }
}

seedScrapperData()