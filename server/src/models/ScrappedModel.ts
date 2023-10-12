import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient;

class ScrappedModel {

    async findAllWithPagination(page: number, per_page: number) {

        const skip = (page - 1) * per_page;

        const scrapped = await prisma.scrapped.findMany({
            skip,
            take: per_page
        });

        const total = await prisma.scrapped.count();
        return {data: scrapped, total}
    }
}

export default ScrappedModel