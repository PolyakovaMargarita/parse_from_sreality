// import Scrapped from "../model/scrapped_model";

class Scrapped_service {

    constructor() {

    }

    public static async getAll() {
        try {
            // const scrapped = await Scrapped.findAll();
        } catch (e) {
            throw e;
        }
    }

    public static async storeAllScrapped(scrappedList: any) {
        try {
            // const scrapped = await Scrapped.bulkCreate(scrappedList);
        } catch (e) {
            throw e;
        }
    }
}

export default Scrapped_service;