import puppeteer, { Browser, ElementHandle, Page } from 'puppeteer';

interface ExtractedData {
    image_src: string;
    title: string;
}

async function initializeBrowser(): Promise<{ browser: Browser, page: Page }> {
    const browser = await puppeteer.launch({ headless: true, args:['--no-sandbox']});
    const page = await browser.newPage();
    return { browser, page };
}

async function processDivs(page: Page, divs: ElementHandle[], data: ExtractedData[], needItems: number): Promise<ExtractedData[]> {
    for (const div of divs) {
        if (data.length >= needItems) {
            break;
        }

        const item: ExtractedData = { image_src: '', title: '' };
        const hasSpanInsideLink = await div.$eval('a img', (span) => span !== null);
        item.title = await div.$eval('a.title span', (a) => (a.textContent || '').trim());

        if (!hasSpanInsideLink) {
            item.image_src = await div.$eval('a:first-child img', (img) => img.getAttribute('src') || '');
        } else {
            item.image_src = await div.$eval('a:nth-child(2) img', (img) => img.getAttribute('src') || '');
        }

        console.log("item", item)

        if (item && (data.length < needItems)) {
            data.push(item);
        }
    }

    return data;
}

async function closeBrowser(browser: Browser | null): Promise<void> {
    if (browser) {
        await browser.close();
    }
}

export async function runScraper(baseUrl: string, needItems: number = 10): Promise<ExtractedData[]> {
    const { browser, page } = await initializeBrowser();
    let data: ExtractedData[] = [];
    let pageNum = 1;
    const startTime = Date.now();
    const timer = 180000


    try {
        while (data.length < needItems) {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;

            if (elapsedTime >= timer) {
                break;
            }

            let isItems = data.length
            await page.goto(`${process.env.BASE_URL}/search/for-sale/apartments?page=${pageNum}`);

            const divs = await page.$$('div.property');
            data = await processDivs(page, divs, data, needItems);
            data.length > isItems && pageNum++;
            console.log('pageNum', pageNum);
            console.log('data.length', data.length);

            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        console.log('scraped data:', data.length);
        return data;
    } catch (error) {
        console.error('Error:', error);
        return [];
    } finally {
        await closeBrowser(browser);
    }
}
