import axios from "axios";
import cheerio from "cheerio";


async function getHtmlContent(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching content: ${error.message}`);
        return null;
    }
}

function extractKeywords(htmlContent) {
    const $ = cheerio.load(htmlContent);
    
    // Extract keywords from meta tags
    const metaKeywords = $('meta[name="keywords"]').attr('content') || '';

    // Extract keywords from headings (h1, h2)
    const headingKeywords = [];
    $('h1, h2').each((index, element) => {
        headingKeywords.push($(element).text().trim());
    });

    // Extract keywords from paragraphs (p)
    const paragraphKeywords = [];
    $('p').each((index, element) => {
        paragraphKeywords.push($(element).text().trim());
    });

    // Extract keywords from anchor text (a)
    const anchorKeywords = [];
    $('a').each((index, element) => {
        anchorKeywords.push($(element).text().trim());
    });

    // Combine all extracted keywords
    const allKeywords = [metaKeywords, ...headingKeywords, ...paragraphKeywords, ...anchorKeywords]
        .map(keyword => keyword.split(',').map(k => k.trim()))
        .flat()
        .filter(Boolean) // Remove empty strings
        .join(', ');

    return allKeywords;
}

export default async function getKeywords(url){
    const htmlContent = await getHtmlContent(url);
    if (htmlContent) {
        const keywords = extractKeywords(htmlContent);
        return keywords.split(',')
    } else {
        return []
    }
}