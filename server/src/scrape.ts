import puppeteer from 'puppeteer';

interface ExtractedData {
  image_src: string;
  title: string;
}

export default async function scrapeSReality(): Promise<ExtractedData[]> {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  let pageNum = 1;
  const data: ExtractedData[] = [];
  const needItems = 10;

  while (data.length < needItems) {
    await page.goto(`${process.env.BASE_URL}/search/for-sale/apartments?pade=${pageNum}`);
    console.log("data.length", data.length)

    const divs = await page.$$('div.property');

    for (const div of divs) {
      const item: ExtractedData = {
        image_src: "",
        title: ""
      };

      // Проверяем, есть ли внутри div элемент <span>
      const hasSpanInsideLink = await div.$eval('a img', (span) => span !== null);

      const titleText = await div.$eval('a.title span', (a) => a.textContent || '');
      item.title = titleText;

      console.log("hasSpanInsideLink", hasSpanInsideLink)

      if (!hasSpanInsideLink) {
        // Если элемент <span> отсутствует, извлекаем ссылку на первую картинку
        const image_src = await div.$eval('a:first-child img', (img) => img.getAttribute('src') || '');
        item.image_src = image_src;

      } else {
        // Если элемент <span> есть, извлекаем ссылку на следующую картинку
        const image_src = await div.$eval('a:nth-child(2) img', (img) => img.getAttribute('src') || '');
        item.image_src = image_src;
      }
      pageNum++;
      data.length < needItems && data.push(item);

    }

  }

  console.log('Извлеченные данные:', data.length);

  await browser.close();
  return data;
}


// import puppeteer from 'puppeteer';

// interface ExtractedData {
//   image_src: string;
//   title: string;
// }

// export default async function(){
//   (async () => {
//     const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox']});
//     const page = await browser.newPage();
//     let pageNum = 1;
//     const data: ExtractedData[] = [];
//     const needItems = 30;

//     while (data.length < needItems) {
//       await page.goto(`${process.env.BASE_URL}/search/for-sale/apartments?pade=${pageNum}`);
//       console.log("data.length", data.length)

//       const divs = await page.$$('div.property');

//       for (const div of divs) {
//         const item: ExtractedData = {
//           image_src: "",
//           title: ""
//         };
    
//         // Проверяем, есть ли внутри div элемент <span>
//         const hasSpanInsideLink = await div.$eval('a img', (span) => span !== null);
    
//         const titleText = await div.$eval('a.title span', (a) => a.textContent || '');
//         item.title = titleText;
    
//         console.log("hasSpanInsideLink", hasSpanInsideLink)
    
//         if (!hasSpanInsideLink) {
//           // Если элемент <span> отсутствует, извлекаем ссылку на первую картинку
//           const image_src = await div.$eval('a:first-child img', (img) => img.getAttribute('src') || '');
//           item.image_src = image_src;
    
//         } else {
//           // Если элемент <span> есть, извлекаем ссылку на следующую картинку
//           const image_src = await div.$eval('a:nth-child(2) img', (img) => img.getAttribute('src') || '');
//           item.image_src = image_src;
//         }
//         pageNum++;
//         data.length < needItems && data.push(item);
        
//       }

//     }

//     console.log('Извлеченные данные:', data.length);

//     await browser.close();
//     return data;
// })();
// }


